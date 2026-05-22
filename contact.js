// Contact Page JavaScript
import AOS from 'aos';
import { google } from 'google-maps';

class ContactPage {
    constructor() {
        this.init();
    }

    init() {
        this.initializeForm();
        this.initializeFAQ();
        this.initializeMap();
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    initializeForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        }

        // Real-time validation
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', this.validateField.bind(this));
            input.addEventListener('input', this.clearFieldError.bind(this));
        });
    }

    validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        const fieldName = field.name;

        // Remove existing error styling
        this.clearFieldError(e);

        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'firstName':
            case 'lastName':
                if (!value) {
                    isValid = false;
                    errorMessage = 'This field is required';
                } else if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Must be at least 2 characters';
                }
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    isValid = false;
                    errorMessage = 'Email is required';
                } else if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;

            case 'phone':
                if (value && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-$$$$]/g, ''))) {
                    isValid = false;
                    errorMessage = 'Please enter a valid phone number';
                }
                break;

            case 'subject':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Please select a subject';
                }
                break;

            case 'message':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Message is required';
                } else if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Message must be at least 10 characters';
                }
                break;

            case 'privacy':
                if (!field.checked) {
                    isValid = false;
                    errorMessage = 'You must agree to the privacy policy';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.style.borderColor = '#dc3545';
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Add error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#dc3545';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    clearFieldError(e) {
        const field = e.target;
        field.style.borderColor = '#e0e0e0';
        
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validate all fields
        let isFormValid = true;
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            const event = { target: input };
            if (!this.validateField(event)) {
                isFormValid = false;
            }
        });

        // Check privacy policy
        const privacyCheckbox = form.querySelector('#privacy');
        if (!privacyCheckbox.checked) {
            this.showFieldError(privacyCheckbox, 'You must agree to the privacy policy');
            isFormValid = false;
        }

        if (!isFormValid) {
            this.showNotification('Please correct the errors above', 'error');
            return;
        }

        // Show loading state
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Simulate form submission
            await this.simulateFormSubmission(data);
            
            // Success
            this.showNotification('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.', 'success');
            form.reset();
            
        } catch (error) {
            this.showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    async simulateFormSubmission(data) {
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success (90% of the time)
                if (Math.random() > 0.1) {
                    resolve(data);
                } else {
                    reject(new Error('Submission failed'));
                }
            }, 2000);
        });
    }

    initializeFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    initializeMap() {
        // Initialize Google Map
        window.initMap = () => {
            const officeLocation = { lat: 40.7505, lng: -73.9934 }; // New York coordinates
            
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: officeLocation,
                styles: [
                    {
                        featureType: 'all',
                        elementType: 'geometry.fill',
                        stylers: [{ color: '#f5f5f5' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{ color: '#3A8B9A' }]
                    }
                ]
            });

            const marker = new google.maps.Marker({
                position: officeLocation,
                map: map,
                title: 'BlueOak Capitals',
                icon: {
                    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="18" fill="#1B4B5A" stroke="#3A8B9A" stroke-width="2"/>
                            <text x="20" y="25" text-anchor="middle" fill="white" font-size="12" font-weight="bold">BO</text>
                        </svg>
                    `),
                    scaledSize: new google.maps.Size(40, 40)
                }
            });

            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="padding: 10px; max-width: 200px;">
                        <h4 style="margin: 0 0 10px 0; color: #1B4B5A;">BlueOak Capitals</h4>
                        <p style="margin: 0; color: #666; font-size: 14px;">1250 Broadway, Suite 3601<br>New York, NY 10001</p>
                        <p style="margin: 5px 0 0 0; color: #3A8B9A; font-size: 14px;">📞 +1 (555) 123-4567</p>
                    </div>
                `
            });

            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });
        };

        // Fallback if Google Maps fails to load
        setTimeout(() => {
            const mapElement = document.getElementById('map');
            if (mapElement && !mapElement.hasChildNodes()) {
                mapElement.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f5f5f5; color: #666;">
                        <div style="text-align: center;">
                            <i class="fas fa-map-marker-alt" style="font-size: 3rem; margin-bottom: 1rem; color: #3A8B9A;"></i>
                            <h4>BlueOak Capitals Office</h4>
                            <p>1250 Broadway, Suite 3601<br>New York, NY 10001</p>
                        </div>
                    </div>
                `;
            }
        }, 3000);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Add styles if not already added
        if (!document.querySelector('#contact-notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'contact-notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: white;
                    padding: 1rem 1.5rem;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    z-index: 10000;
                    transform: translateX(400px);
                    transition: transform 0.3s ease;
                    border-left: 4px solid #3A8B9A;
                    max-width: 400px;
                }
                .notification-success { border-left-color: #28a745; }
                .notification-error { border-left-color: #dc3545; }
                .notification-content {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    color: #333;
                }
                .notification-content i:first-child {
                    margin-top: 2px;
                    flex-shrink: 0;
                }
                .notification-content span {
                    flex: 1;
                    line-height: 1.4;
                }
                .notification-close {
                    background: none;
                    border: none;
                    color: #999;
                    cursor: pointer;
                    padding: 0;
                    margin-left: 0.5rem;
                    flex-shrink: 0;
                }
                .notification-close:hover {
                    color: #666;
                }
                .notification.show { transform: translateX(0); }
            `;
            document.head.appendChild(styles);
        }

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Hide notification after 6 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 6000);
    }
}

// Global functions for map interactions
window.getDirections = () => {
    const destination = '1250 Broadway, Suite 3601, New York, NY 10001';
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(url, '_blank');
};

window.scheduleAppointment = () => {
    window.openModal('signupModal');
};

// Initialize contact page
document.addEventListener('DOMContentLoaded', () => {
    new ContactPage();
});