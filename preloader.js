// Preloader functionality
class Preloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.minLoadTime = 2000; // Minimum loading time in milliseconds
        this.startTime = Date.now();
        this.init();
    }

    init() {
        // Simulate loading progress
        this.simulateLoading();
        
        // Hide preloader when page is fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.handlePageLoad();
            });
        } else {
            this.handlePageLoad();
        }
    }

    simulateLoading() {
        const progressBar = document.querySelector('.loading-progress');
        const loadingText = document.querySelector('.loading-text');
        
        const messages = [
            'Loading your financial future',
            'Preparing investment data',
            'Securing your connection',
            'Almost ready'
        ];
        
        let messageIndex = 0;
        let progress = 0;
        
        const updateProgress = () => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = progress + '%';
            
            // Update loading message
            if (progress > 25 * (messageIndex + 1) && messageIndex < messages.length - 1) {
                messageIndex++;
                loadingText.textContent = messages[messageIndex];
            }
            
            if (progress < 100) {
                setTimeout(updateProgress, 100 + Math.random() * 200);
            }
        };
        
        updateProgress();
    }

    handlePageLoad() {
        const elapsedTime = Date.now() - this.startTime;
        const remainingTime = Math.max(0, this.minLoadTime - elapsedTime);
        
        setTimeout(() => {
            this.hidePreloader();
        }, remainingTime);
    }

    hidePreloader() {
        this.preloader.classList.add('fade-out');
        
        setTimeout(() => {
            this.preloader.style.display = 'none';
            document.body.style.overflow = 'visible';
            
            // Initialize other components after preloader is hidden
            this.initializeComponents();
        }, 500);
    }

    initializeComponents() {
        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        }
        
        // Trigger any other initialization functions
        if (typeof initializeCounters === 'function') {
            initializeCounters();
        }
        
        // Dispatch custom event for other scripts
        document.dispatchEvent(new CustomEvent('preloaderComplete'));
    }
}

// Initialize preloader when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Preloader();
    });
} else {
    new Preloader();
}