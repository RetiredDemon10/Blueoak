
// About Page JavaScript
import AOS from 'aos'; // Declare the AOS variable before using it

class AboutPage {
    constructor() {
        this.init();
    }

    init() {
        this.initializeCounters();
        this.initializeVideoModal();
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    initializeCounters() {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statsContainer = entry.target;
                    const counters = statsContainer.querySelectorAll('.stat-number');
                    
                    counters.forEach(counter => {
                        this.animateCounter(counter);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const statsSection = document.querySelector('.overview-stats');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }

    animateCounter(counter) {
        const target = parseFloat(counter.getAttribute('data-target'));
        const suffix = counter.nextElementSibling?.textContent || '';
        
        if (isNaN(target)) return;
        
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (suffix.includes('B')) {
                counter.textContent = current.toFixed(1);
            } else if (suffix.includes('%')) {
                counter.textContent = current.toFixed(1);
            } else if (target >= 1000) {
                counter.textContent = Math.floor(current).toLocaleString();
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 20);
    }

    initializeVideoModal() {
        const videoTrigger = document.querySelector('.image-overlay');
        if (videoTrigger) {
            videoTrigger.addEventListener('click', this.openVideoModal.bind(this));
        }
    }

    openVideoModal() {
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.innerHTML = `
            <div class="video-modal-content">
                <span class="video-close">&times;</span>
                <div class="video-container">
                    <iframe 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        `;

        // Add modal styles
        if (!document.querySelector('#video-modal-styles')) {
            const styles = document.createElement('style');
            styles.id = 'video-modal-styles';
            styles.textContent = `
                .video-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .video-modal.show {
                    opacity: 1;
                }
                .video-modal-content {
                    position: relative;
                    width: 90%;
                    max-width: 800px;
                    background: #000;
                    border-radius: 10px;
                    overflow: hidden;
                    transform: scale(0.8);
                    transition: transform 0.3s ease;
                }
                .video-modal.show .video-modal-content {
                    transform: scale(1);
                }
                .video-close {
                    position: absolute;
                    top: -40px;
                    right: 0;
                    color: white;
                    font-size: 2rem;
                    cursor: pointer;
                    z-index: 10001;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    transition: background 0.3s ease;
                }
                .video-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                .video-container {
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-bottom: 56.25%;
                }
                .video-container iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            `;
            document.head.appendChild(styles);
        }

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Show modal
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);

        // Close modal functionality
        const closeModal = () => {
            modal.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(modal);
                document.body.style.overflow = 'visible';
            }, 300);
        };

        modal.querySelector('.video-close').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function escapeHandler(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        });
    }
}

// Initialize about page
document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
});