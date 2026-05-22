
// Charts functionality
class ChartsManager {
    constructor() {
        this.charts = {};
        this.init();
    }

    init() {
        // Wait for Chart.js to load
        if (typeof Chart !== 'undefined') {
            this.initializeCharts();
        } else {
            // Retry after a short delay
            setTimeout(() => this.init(), 100);
        }
    }

    initializeCharts() {
        this.createPortfolioChart();
        this.updateMarketIndicators();
    }

    createPortfolioChart() {
        const canvas = document.getElementById('portfolioChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Sample portfolio performance data
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const portfolioData = [100000, 102500, 105200, 103800, 108500, 112300, 115600, 118900, 122400, 125800, 129200, 132500];
        const benchmarkData = [100000, 101200, 102800, 101500, 104200, 106800, 108500, 110200, 112100, 113800, 115500, 117200];

        this.charts.portfolio = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [
                    {
                        label: 'BlueOak Portfolio',
                        data: portfolioData,
                        borderColor: '#1B4B5A',
                        backgroundColor: 'rgba(27, 75, 90, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#1B4B5A',
                        pointBorderColor: '#FFFFFF',
                        pointBorderWidth: 2,
                        pointRadius: 5
                    },
                    {
                        label: 'Market Benchmark',
                        data: benchmarkData,
                        borderColor: '#3A8B9A',
                        backgroundColor: 'rgba(58, 139, 154, 0.1)',
                        borderWidth: 2,
                        fill: false,
                        tension: 0.4,
                        pointBackgroundColor: '#3A8B9A',
                        pointBorderColor: '#FFFFFF',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            color: '#333333'
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1B4B5A',
                        titleColor: '#FFFFFF',
                        bodyColor: '#FFFFFF',
                        borderColor: '#3A8B9A',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#666666'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#666666',
                            callback: function(value) {
                                return '$' + (value / 1000) + 'K';
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    updateMarketIndicators() {
        // Simulate real-time market data updates
        const indicators = [
            { name: 'S&P 500', element: document.querySelector('.indicator-item:nth-child(1) .indicator-value') },
            { name: 'NASDAQ', element: document.querySelector('.indicator-item:nth-child(2) .indicator-value') },
            { name: 'DOW JONES', element: document.querySelector('.indicator-item:nth-child(3) .indicator-value') },
            { name: 'GOLD', element: document.querySelector('.indicator-item:nth-child(4) .indicator-value') }
        ];

        const updateIndicator = (indicator) => {
            if (!indicator.element) return;

            // Generate random market movement
            const change = (Math.random() - 0.5) * 4; // -2% to +2%
            const isPositive = change >= 0;
            
            indicator.element.textContent = (isPositive ? '+' : '') + change.toFixed(2) + '%';
            indicator.element.className = 'indicator-value ' + (isPositive ? 'positive' : 'negative');
        };

        // Update indicators every 5 seconds
        indicators.forEach(updateIndicator);
        setInterval(() => {
            indicators.forEach(updateIndicator);
        }, 5000);
    }

    // Method to update charts when new data is available
    updatePortfolioChart(newData) {
        if (this.charts.portfolio) {
            this.charts.portfolio.data.datasets[0].data = newData;
            this.charts.portfolio.update();
        }
    }

    // Destroy all charts (useful for cleanup)
    destroyCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.destroy();
        });
        this.charts = {};
    }
}

// Initialize charts manager
document.addEventListener('DOMContentLoaded', () => {
    window.chartsManager = new ChartsManager();
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.chartsManager) {
        Object.values(window.chartsManager.charts).forEach(chart => {
            if (chart) chart.resize();
        });
    }
});