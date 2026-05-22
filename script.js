
// // Initialize AOS
// AOS.init({
//     duration: 1000,
//     once: true,
//     offset: 100
// });

// // Preloader
// window.addEventListener('load', function() {
//     const preloader = document.getElementById('preloader');
//     setTimeout(() => {
//         preloader.style.opacity = '0';
//         setTimeout(() => {
//             preloader.style.display = 'none';
//         }, 500);
//     }, 1500);
// });

// // Navigation
// const navToggle = document.querySelector('.nav-toggle');
// const navMenu = document.querySelector('.nav-menu');
// const navbar = document.querySelector('.navbar');

// // Mobile menu toggle
// navToggle.addEventListener('click', function() {
//     navMenu.classList.toggle('active');
//     navToggle.classList.toggle('active');
// });

// // Close mobile menu when clicking on a link
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//         navMenu.classList.remove('active');
//         navToggle.classList.remove('active');
//     });
// });

// // Navbar scroll effect
// window.addEventListener('scroll', function() {
//     if (window.scrollY > 100) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// // Hero Slider
// class HeroSlider {
//     constructor() {
//         this.slides = document.querySelectorAll('.slide');
//         this.dots = document.querySelectorAll('.dot');
//         this.prevBtn = document.querySelector('.prev-btn');
//         this.nextBtn = document.querySelector('.next-btn');
//         this.currentSlide = 0;
//         this.slideInterval = null;
        
//         this.init();
//     }
    
//     init() {
//         if (this.slides.length === 0) return;
        
//         // Event listeners
//         this.prevBtn?.addEventListener('click', () => this.prevSlide());
//         this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
//         this.dots.forEach((dot, index) => {
//             dot.addEventListener('click', () => this.goToSlide(index));
//         });
        
//         // Auto-play
//         this.startAutoPlay();
        
//         // Pause on hover
//         const heroSection = document.querySelector('.hero');
//         heroSection?.addEventListener('mouseenter', () => this.stopAutoPlay());
//         heroSection?.addEventListener('mouseleave', () => this.startAutoPlay());
//     }
    
//     goToSlide(slideIndex) {
//         // Remove active class from current slide and dot
//         this.slides[this.currentSlide]?.classList.remove('active');
//         this.dots[this.currentSlide]?.classList.remove('active');
        
//         // Update current slide
//         this.currentSlide = slideIndex;
        
//         // Add active class to new slide and dot
//         this.slides[this.currentSlide]?.classList.add('active');
//         this.dots[this.currentSlide]?.classList.add('active');
//     }
    
//     nextSlide() {
//         const nextIndex = (this.currentSlide + 1) % this.slides.length;
//         this.goToSlide(nextIndex);
//     }
    
//     prevSlide() {
//         const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
//         this.goToSlide(prevIndex);
//     }
    
//     startAutoPlay() {
//         this.slideInterval = setInterval(() => {
//             this.nextSlide();
//         }, 5000);
//     }
    
//     stopAutoPlay() {
//         if (this.slideInterval) {
//             clearInterval(this.slideInterval);
//             this.slideInterval = null;
//         }
//     }
// }

// // Initialize slider
// const heroSlider = new HeroSlider();

// // Back to Top Button
// const backToTopBtn = document.getElementById('backToTop');

// window.addEventListener('scroll', function() {
//     if (window.scrollY > 300) {
//         backToTopBtn.classList.add('show');
//     } else {
//         backToTopBtn.classList.remove('show');
//     }
// });

// backToTopBtn.addEventListener('click', function() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             const offsetTop = target.offsetTop - 80;
//             window.scrollTo({
//                 top: offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Contact Form
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form data
//         const formData = new FormData(this);
//         const data = Object.fromEntries(formData);
        
//         // Simple validation
//         if (!data.name || !data.email || !data.message) {
//             alert('Please fill in all required fields.');
//             return;
//         }
        
//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(data.email)) {
//             alert('Please enter a valid email address.');
//             return;
//         }
        
//         // Simulate form submission
//         const submitBtn = this.querySelector('.submit-btn');
//         const originalText = submitBtn.innerHTML;
        
//         submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
//         submitBtn.disabled = true;
        
//         setTimeout(() => {
//             alert('Thank you for your message! We will get back to you soon.');
//             this.reset();
//             submitBtn.innerHTML = originalText;
//             submitBtn.disabled = false;
//         }, 2000);
//     });
// }

// // Newsletter Form
// document.querySelectorAll('.newsletter-form').forEach(form => {
//     form.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         const email = this.querySelector('input[type="email"]').value;
        
//         if (!email) {
//             alert('Please enter your email address.');
//             return;
//         }
        
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             alert('Please enter a valid email address.');
//             return;
//         }
        
//         // Simulate subscription
//         const button = this.querySelector('button');
//         const originalHTML = button.innerHTML;
        
//         button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
//         button.disabled = true;
        
//         setTimeout(() => {
//             alert('Thank you for subscribing to our newsletter!');
//             this.reset();
//             button.innerHTML = originalHTML;
//             button.disabled = false;
//         }, 1500);
//     });
// });

// // Animated Counter for Stats
// function animateCounters() {
//     const counters = document.querySelectorAll('.stat-number');
    
//     counters.forEach(counter => {
//         const target = counter.textContent;
//         const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
//         const suffix = target.replace(/[0-9.]/g, '');
        
//         if (isNaN(numericValue)) return;
        
//         let current = 0;
//         const increment = numericValue / 100;
//         const timer = setInterval(() => {
//             current += increment;
//             if (current >= numericValue) {
//                 current = numericValue;
//                 clearInterval(timer);
//             }
            
//             if (suffix.includes('%')) {
//                 counter.textContent = current.toFixed(1) + '%';
//             } else if (suffix.includes('B')) {
//                 counter.textContent = '$' + current.toFixed(1) + 'B+';
//             } else if (suffix.includes('K') || suffix.includes(',')) {
//                 counter.textContent = Math.floor(current).toLocaleString() + '+';
//             } else {
//                 counter.textContent = Math.floor(current) + suffix;
//             }
//         }, 20);
//     });
// }

// // Intersection Observer for animations
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
            
//             // Trigger counter animation for stats section
//             if (entry.target.classList.contains('stats-section')) {
//                 animateCounters();
//             }
//         }
//     });
// }, observerOptions);

// // Observe elements for animation
// document.querySelectorAll('.fade-in, .stats-section').forEach(el => {
//     observer.observe(el);
// });

// // Feature icons animation
// document.querySelectorAll('.feature-icon').forEach((icon, index) => {
//     icon.style.animationDelay = `${index * 0.2}s`;
// });

// // Add loading animation to CTA buttons
// document.querySelectorAll('.cta-btn').forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         if (this.classList.contains('primary') || this.classList.contains('secondary')) {
//             e.preventDefault();
            
//             const ripple = document.createElement('span');
//             ripple.classList.add('ripple');
//             this.appendChild(ripple);
            
//             const rect = this.getBoundingClientRect();
//             const size = Math.max(rect.width, rect.height);
//             const x = e.clientX - rect.left - size / 2;
//             const y = e.clientY - rect.top - size / 2;
            
//             ripple.style.width = ripple.style.height = size + 'px';
//             ripple.style.left = x + 'px';
//             ripple.style.top = y + 'px';
            
//             setTimeout(() => {
//                 ripple.remove();
//             }, 600);
//         }
//     });
// });

// // Add ripple effect CSS
// const style = document.createElement('style');
// style.textContent = `
//     .cta-btn {
//         position: relative;
//         overflow: hidden;
//     }
    
//     .ripple {
//         position: absolute;
//         border-radius: 50%;
//         background: rgba(255, 255, 255, 0.3);
//         transform: scale(0);
//         animation: ripple-animation 0.6s linear;
//         pointer-events: none;
//     }
    
//     @keyframes ripple-animation {
//         to {
//             transform: scale(4);
//             opacity: 0;
//         }
//     }
// `;
// document.head.appendChild(style);

// // Lazy loading for images
// if ('IntersectionObserver' in window) {
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src || img.src;
//                 img.classList.remove('lazy');
//                 imageObserver.unobserve(img);
//             }
//         });
//     });

//     document.querySelectorAll('img[data-src]').forEach(img => {
//         imageObserver.observe(img);
//     });
// }

// // Performance optimization: Debounce scroll events
// function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// // Apply debouncing to scroll events
// const debouncedScrollHandler = debounce(() => {
//     // Scroll-based animations can be added here
// }, 10);

// window.addEventListener('scroll', debouncedScrollHandler);

// // Initialize everything when DOM is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Add any additional initialization code here
//     console.log('Blueoak Capitals website loaded successfully!');
// });


// // Testimonials Carousel
// class TestimonialsCarousel {
//     constructor() {
//         this.slides = document.querySelectorAll('.testimonial-slide');
//         this.indicators = document.querySelectorAll('.indicator');
//         this.prevBtn = document.querySelector('.prev-testimonial');
//         this.nextBtn = document.querySelector('.next-testimonial');
//         this.currentSlide = 0;
//         this.slideInterval = null;
//         this.isTransitioning = false;
        
//         this.init();
//     }
    
//     init() {
//         if (this.slides.length === 0) return;
        
//         // Event listeners
//         this.prevBtn?.addEventListener('click', () => this.prevSlide());
//         this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
//         this.indicators.forEach((indicator, index) => {
//             indicator.addEventListener('click', () => this.goToSlide(index));
//         });
        
//         // Auto-play
//         this.startAutoPlay();
        
//         // Pause on hover
//         const carousel = document.querySelector('.testimonials-carousel');
//         carousel?.addEventListener('mouseenter', () => this.stopAutoPlay());
//         carousel?.addEventListener('mouseleave', () => this.startAutoPlay());
        
//         // Touch/swipe support
//         this.addTouchSupport();
        
//         // Keyboard navigation
//         this.addKeyboardSupport();
//     }
    
//     goToSlide(slideIndex, direction = 'next') {
//         if (this.isTransitioning || slideIndex === this.currentSlide) return;
        
//         this.isTransitioning = true;
        
//         // Remove active classes
//         this.slides[this.currentSlide]?.classList.remove('active');
//         this.indicators[this.currentSlide]?.classList.remove('active');
        
//         // Add animation classes
//         const currentSlideEl = this.slides[this.currentSlide];
//         const nextSlideEl = this.slides[slideIndex];
        
//         if (direction === 'next') {
//             currentSlideEl?.classList.add('prev');
//             nextSlideEl?.classList.add('slide-in-right');
//         } else {
//             currentSlideEl?.classList.add('prev');
//             nextSlideEl?.classList.add('slide-in-left');
//         }
        
//         // Update current slide
//         this.currentSlide = slideIndex;
        
//         // Add active classes
//         this.slides[this.currentSlide]?.classList.add('active');
//         this.indicators[this.currentSlide]?.classList.add('active');
        
//         // Clean up animation classes
//         setTimeout(() => {
//             this.slides.forEach(slide => {
//                 slide.classList.remove('prev', 'slide-in-right', 'slide-in-left');
//             });
//             this.isTransitioning = false;
//         }, 600);
//     }
    
//     nextSlide() {
//         const nextIndex = (this.currentSlide + 1) % this.slides.length;
//         this.goToSlide(nextIndex, 'next');
//     }
    
//     prevSlide() {
//         const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
//         this.goToSlide(prevIndex, 'prev');
//     }
    
//     startAutoPlay() {
//         this.slideInterval = setInterval(() => {
//             this.nextSlide();
//         }, 6000); // 6 seconds per slide
//     }
    
//     stopAutoPlay() {
//         if (this.slideInterval) {
//             clearInterval(this.slideInterval);
//             this.slideInterval = null;
//         }
//     }
    
//     addTouchSupport() {
//         const carousel = document.querySelector('.carousel-container');
//         if (!carousel) return;
        
//         let startX = 0;
//         let startY = 0;
//         let endX = 0;
//         let endY = 0;
        
//         carousel.addEventListener('touchstart', (e) => {
//             startX = e.touches[0].clientX;
//             startY = e.touches[0].clientY;
//         });
        
//         carousel.addEventListener('touchmove', (e) => {
//             e.preventDefault(); // Prevent scrolling
//         });
        
//         carousel.addEventListener('touchend', (e) => {
//             endX = e.changedTouches[0].clientX;
//             endY = e.changedTouches[0].clientY;
            
//             const deltaX = endX - startX;
//             const deltaY = endY - startY;
            
//             // Check if horizontal swipe is more significant than vertical
//             if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
//                 if (deltaX > 0) {
//                     this.prevSlide();
//                 } else {
//                     this.nextSlide();
//                 }
//             }
//         });
//     }
    
//     addKeyboardSupport() {
//         document.addEventListener('keydown', (e) => {
//             // Only handle keyboard events when testimonials section is in view
//             const testimonialsSection = document.querySelector('.testimonials');
//             const rect = testimonialsSection.getBoundingClientRect();
//             const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
//             if (!isInView) return;
            
//             switch(e.key) {
//                 case 'ArrowLeft':
//                     e.preventDefault();
//                     this.prevSlide();
//                     break;
//                 case 'ArrowRight':
//                     e.preventDefault();
//                     this.nextSlide();
//                     break;
//                 case ' ': // Spacebar
//                     e.preventDefault();
//                     if (this.slideInterval) {
//                         this.stopAutoPlay();
//                     } else {
//                         this.startAutoPlay();
//                     }
//                     break;
//             }
//         });
//     }
// }

// // Initialize testimonials carousel
// const testimonialsCarousel = new TestimonialsCarousel();



// Testimonials Carousel
class TestimonialsCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.prev-testimonial');
        this.nextBtn = document.querySelector('.next-testimonial');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.isTransitioning = false;
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        // Event listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Auto-play
        this.startAutoPlay();
        
        // Pause on hover
        const carousel = document.querySelector('.testimonials-carousel');
        carousel?.addEventListener('mouseenter', () => this.stopAutoPlay());
        carousel?.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Touch/swipe support
        this.addTouchSupport();
        
        // Keyboard navigation
        this.addKeyboardSupport();
    }
    
    goToSlide(slideIndex, direction = 'next') {
        if (this.isTransitioning || slideIndex === this.currentSlide) return;
        
        this.isTransitioning = true;
        
        // Remove active classes
        this.slides[this.currentSlide]?.classList.remove('active');
        this.indicators[this.currentSlide]?.classList.remove('active');
        
        // Add animation classes
        const currentSlideEl = this.slides[this.currentSlide];
        const nextSlideEl = this.slides[slideIndex];
        
        if (direction === 'next') {
            currentSlideEl?.classList.add('prev');
            nextSlideEl?.classList.add('slide-in-right');
        } else {
            currentSlideEl?.classList.add('prev');
            nextSlideEl?.classList.add('slide-in-left');
        }
        
        // Update current slide
        this.currentSlide = slideIndex;
        
        // Add active classes
        this.slides[this.currentSlide]?.classList.add('active');
        this.indicators[this.currentSlide]?.classList.add('active');
        
        // Clean up animation classes
        setTimeout(() => {
            this.slides.forEach(slide => {
                slide.classList.remove('prev', 'slide-in-right', 'slide-in-left');
            });
            this.isTransitioning = false;
        }, 600);
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex, 'next');
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex, 'prev');
    }
    
    startAutoPlay() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 6000); // 6 seconds per slide
    }
    
    stopAutoPlay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
    
    addTouchSupport() {
        const carousel = document.querySelector('.carousel-container');
        if (!carousel) return;
        
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            e.preventDefault(); // Prevent scrolling
        });
        
        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            
            // Check if horizontal swipe is more significant than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.prevSlide();
                } else {
                    this.nextSlide();
                }
            }
        });
    }
    
    addKeyboardSupport() {
        document.addEventListener('keydown', (e) => {
            // Only handle keyboard events when testimonials section is in view
            const testimonialsSection = document.querySelector('.testimonials');
            const rect = testimonialsSection.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (!isInView) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.prevSlide();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case ' ': // Spacebar
                    e.preventDefault();
                    if (this.slideInterval) {
                        this.stopAutoPlay();
                    } else {
                        this.startAutoPlay();
                    }
                    break;
            }
        });
    }
}


const whatsapp = (function () {
    var options = {
        whatsapp: "+12544292877", // WhatsApp number
        call_to_action: "Message us", // Call to action
        position: "left", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();

// Initialize testimonials carousel
const testimonialsCarousel = new TestimonialsCarousel();

// Main JavaScript functionality
class BlueOakWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.initializeNavigation();
        this.initializeHeroSlider();
        this.initializeScrollEffects();
        this.initializeModals();
        this.initializeCounters();
        this.initializeTestimonials();
        this.initializeForms();
        this.initializeBackToTop();
    }

    initializeNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navbar = document.querySelector('.navbar');


        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

       
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu?.classList.remove('active');
                navToggle?.classList.remove('active');
            });
        });

       
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }
        });

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initializeHeroSlider() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        if (slides.length === 0) return;

        let currentSlide = 0;
        let slideInterval;

        const goToSlide = (slideIndex) => {
            slides[currentSlide]?.classList.remove('active');
            dots[currentSlide]?.classList.remove('active');
            
            currentSlide = slideIndex;
            
            slides[currentSlide]?.classList.add('active');
            dots[currentSlide]?.classList.add('active');
        };

        const nextSlide = () => {
            const nextIndex = (currentSlide + 1) % slides.length;
            goToSlide(nextIndex);
        };

        const prevSlide = () => {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prevIndex);
        };

        const startAutoPlay = () => {
            slideInterval = setInterval(nextSlide, 5000);
        };

        const stopAutoPlay = () => {
            if (slideInterval) {
                clearInterval(slideInterval);
                slideInterval = null;
            }
        };

        // Event listeners
        prevBtn?.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });

        nextBtn?.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
                stopAutoPlay();
                startAutoPlay();
            });
        });

        // Pause on hover
        const heroSection = document.querySelector('.hero');
        heroSection?.addEventListener('mouseenter', stopAutoPlay);
        heroSection?.addEventListener('mouseleave', startAutoPlay);

        // Start auto-play
        startAutoPlay();
    }

    initializeScrollEffects() {
        // Initialize AOS if not already done
        if (typeof AOS !== 'undefined' && !document.querySelector('[data-aos]').classList.contains('aos-animate')) {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Trigger counter animation for stats section
                    if (entry.target.classList.contains('quick-stats')) {
                        this.animateCounters();
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.fade-in, .quick-stats').forEach(el => {
            observer.observe(el);
        });
    }

    initializeModals() {
        // Modal functions
        window.openModal = (modalId) => {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        };

        window.closeModal = (modalId) => {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'visible';
            }
        };

        window.switchModal = (currentModalId, targetModalId) => {
            window.closeModal(currentModalId);
            setTimeout(() => {
                window.openModal(targetModalId);
            }, 300);
        };

        // Close modal when clicking outside
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'visible';
                }
            });
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(modal => {
                    if (modal.style.display === 'block') {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'visible';
                    }
                });
            }
        });
    }

    initializeCounters() {
        window.initializeCounters = () => {
            const counters = document.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                const suffix = counter.textContent.replace(/[0-9.]/g, '');
                
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
                        counter.textContent = current.toFixed(1) + 'B+';
                    } else if (suffix.includes('K') || target >= 1000) {
                        counter.textContent = Math.floor(current).toLocaleString() + '+';
                    } else if (suffix.includes('%')) {
                        counter.textContent = current.toFixed(1) + '%';
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 20);
            });
        };
    }

    animateCounters() {
        if (typeof window.initializeCounters === 'function') {
            window.initializeCounters();
        }
    }

    initializeTestimonials() {
        // Testimonials carousel functionality is handled in the existing testimonials carousel class
        // This is a placeholder for any additional testimonial functionality
    }

    initializeForms() {
        // Newsletter forms
        document.querySelectorAll('.newsletter-form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const email = form.querySelector('input[type="email"]').value;
                
                if (!email) {
                    this.showNotification('Please enter your email address.', 'error');
                    return;
                }
                
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    this.showNotification('Please enter a valid email address.', 'error');
                    return;
                }
                
                // Simulate subscription
                const button = form.querySelector('button');
                const originalHTML = button.innerHTML;
                
                button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                button.disabled = true;
                
                setTimeout(() => {
                    this.showNotification('Thank you for subscribing to our newsletter!', 'success');
                    form.reset();
                    button.innerHTML = originalHTML;
                    button.disabled = false;
                }, 1500);
            });
        });

        // Auth forms
        document.querySelectorAll('.auth-form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                // Basic validation
                if (!data.email || !data.password) {
                    this.showNotification('Please fill in all required fields.', 'error');
                    return;
                }
                
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(data.email)) {
                    this.showNotification('Please enter a valid email address.', 'error');
                    return;
                }
                
                // Simulate form submission
                const submitBtn = form.querySelector('.auth-submit-btn');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    const isLogin = form.closest('#loginModal');
                    const message = isLogin ? 'Login successful!' : 'Account created successfully!';
                    this.showNotification(message, 'success');
                    
                    // Close modal
                    const modal = form.closest('.modal');
                    if (modal) {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'visible';
                    }
                    
                    form.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            });
        });
    }

    initializeBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn?.classList.add('show');
            } else {
                backToTopBtn?.classList.remove('show');
            }
        });

        backToTopBtn?.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        // Add styles if not already added
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
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
                }
                .notification-success { border-left-color: #28a745; }
                .notification-error { border-left-color: #dc3545; }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #333;
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

        // Hide notification after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
    }
}

// Initialize website functionality
document.addEventListener('DOMContentLoaded', () => {
    window.blueOakWebsite = new BlueOakWebsite();
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, pause any animations or timers
        document.querySelectorAll('video, audio').forEach(media => {
            if (!media.paused) media.pause();
        });
    } else {
        // Page is visible, resume animations or timers
        // Resume any paused functionality if needed
    }
});


document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('drawer').classList.add('open');
  });
  
  document.getElementById('close-drawer').addEventListener('click', () => {
    document.getElementById('drawer').classList.remove('open');
  });
  
  document.getElementById('services-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    const parent = this.parentElement;
    parent.classList.toggle('open');
  });



  