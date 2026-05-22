// Investment Calculator functionality
class InvestmentCalculator {
    constructor() {
        this.plans = {
            starter: { min: 8, max: 12, duration: 6 },
            growth: { min: 12, max: 18, duration: 12 },
            premium: { min: 18, max: 25, duration: 18 },
            elite: { min: 25, max: 35, duration: 24 },
            platinum: { min: 35, max: 45, duration: 36 },
            diamond: { min: 45, max: 60, duration: 60 }
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateDurationDisplay();
    }

    bindEvents() {
        const durationSlider = document.getElementById('investment-duration');
        const amountInput = document.getElementById('investment-amount');
        const planSelect = document.getElementById('investment-plan');

        if (durationSlider) {
            durationSlider.addEventListener('input', () => {
                this.updateDurationDisplay();
            });
        }

        // Auto-calculate when inputs change
        [amountInput, planSelect, durationSlider].forEach(element => {
            if (element) {
                element.addEventListener('change', () => {
                    this.calculateProfit();
                });
            }
        });
    }

    updateDurationDisplay() {
        const durationSlider = document.getElementById('investment-duration');
        const durationDisplay = document.querySelector('.duration-display');
        
        if (durationSlider && durationDisplay) {
            const months = parseInt(durationSlider.value);
            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;
            
            let displayText = '';
            if (years > 0) {
                displayText += `${years} year${years > 1 ? 's' : ''}`;
                if (remainingMonths > 0) {
                    displayText += ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
                }
            } else {
                displayText = `${months} month${months > 1 ? 's' : ''}`;
            }
            
            durationDisplay.textContent = displayText;
        }
    }

    calculateProfit() {
        const amount = parseFloat(document.getElementById('investment-amount')?.value) || 0;
        const planKey = document.getElementById('investment-plan')?.value || 'starter';
        const duration = parseInt(document.getElementById('investment-duration')?.value) || 12;

        if (amount <= 0) {
            this.clearResults();
            return;
        }

        const plan = this.plans[planKey];
        const avgROI = (plan.min + plan.max) / 2;
        const monthlyROI = avgROI / 100 / 12;
        
        // Calculate compound interest
        const totalAmount = amount * Math.pow(1 + monthlyROI, duration);
        const profit = totalAmount - amount;
        const expectedReturn = profit;

        this.displayResults({
            initialAmount: amount,
            expectedReturn: expectedReturn,
            totalAmount: totalAmount,
            profit: profit,
            duration: duration,
            roi: avgROI
        });

        this.updateChart({
            amount: amount,
            profit: profit,
            duration: duration,
            monthlyROI: monthlyROI
        });
    }

    displayResults(results) {
        const formatCurrency = (amount) => {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(amount);
        };

        document.getElementById('initial-amount').textContent = formatCurrency(results.initialAmount);
        document.getElementById('expected-return').textContent = formatCurrency(results.expectedReturn);
        document.getElementById('total-amount').textContent = formatCurrency(results.totalAmount);
        document.getElementById('profit-amount').textContent = formatCurrency(results.profit);
    }

    clearResults() {
        ['initial-amount', 'expected-return', 'total-amount', 'profit-amount'].forEach(id => {
            const element = document.getElementById(id);
            if (element) element.textContent = '$0';
        });
    }

    updateChart(data) {
        const canvas = document.getElementById('profitChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // Clear previous chart
        if (window.profitChartInstance) {
            window.profitChartInstance.destroy();
        }

        // Generate monthly data points
        const months = [];
        const values = [];
        const initialAmount = data.amount;
        
        for (let i = 0; i <= data.duration; i++) {
            months.push(i);
            const currentValue = initialAmount * Math.pow(1 + data.monthlyROI, i);
            values.push(currentValue);
        }

        window.profitChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months.map(m => `Month ${m}`),
                datasets: [{
                    label: 'Investment Value',
                    data: values,
                    borderColor: '#3A8B9A',
                    backgroundColor: 'rgba(58, 139, 154, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#1B4B5A',
                    pointBorderColor: '#3A8B9A',
                    pointBorderWidth: 2,
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#1B4B5A',
                        titleColor: '#FFFFFF',
                        bodyColor: '#FFFFFF',
                        borderColor: '#3A8B9A',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return 'Value: $' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            color: '#666666'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            color: '#666666',
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }
}

// Global function for button onclick
function calculateProfit() {
    if (window.investmentCalculator) {
        window.investmentCalculator.calculateProfit();
    }
}

function openCalculator() {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
        calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize calculator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.investmentCalculator = new InvestmentCalculator();
});