// Enhanced JavaScript for Y-Axis Immigration Services

// Enhanced service details data
const serviceDetails = {
    'global-immigration': {
        title: 'Global Immigration Services',
        subtitle: 'Permanent Residency & Work Visas for 25+ Countries',
        content: `
            <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-semibold text-lg mb-3 text-blue-900">Popular Destinations</h4>
                        <ul class="space-y-2">
                            <li class="flex items-center"><i class="fas fa-map-marker-alt text-blue-500 mr-3"></i> Canada Express Entry</li>
                            <li class="flex items-center"><i class="fas fa-map-marker-alt text-blue-500 mr-3"></i> Australia Skilled Migration</li>
                            <li class="flex items-center"><i class="fas fa-map-marker-alt text-blue-500 mr-3"></i> UAE Golden Visa</li>
                            <li class="flex items-center"><i class="fas fa-map-marker-alt text-blue-500 mr-3"></i> UK Tier 2 Visa</li>
                            <li class="flex items-center"><i class="fas fa-map-marker-alt text-blue-500 mr-3"></i> USA EB Visas</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-lg mb-3 text-blue-900">What We Offer</h4>
                        <ul class="space-y-2">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Eligibility Assessment</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Document Preparation</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Application Filing</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Follow-up & Updates</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Processing Time</h4>
                    <p>Varies by country: 6-18 months for most permanent residency programs</p>
                </div>
            </div>
        `
    },
    'business-immigration': {
        title: 'Business Immigration',
        subtitle: 'Investor & Entrepreneur Visa Programs',
        content: `
            <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-semibold text-lg mb-3 text-blue-900">Investment Options</h4>
                        <ul class="space-y-2">
                            <li class="flex items-center"><i class="fas fa-chart-line text-blue-500 mr-3"></i> Canada Start-up Visa</li>
                            <li class="flex items-center"><i class="fas fa-chart-line text-blue-500 mr-3"></i> UAE Investor Visa</li>
                            <li class="flex items-center"><i class="fas fa-chart-line text-blue-500 mr-3"></i> Australia Business Innovation</li>
                            <li class="flex items-center"><i class="fas fa-chart-line text-blue-500 mr-3"></i> UK Innovator Visa</li>
                            <li class="flex items-center"><i class="fas fa-chart-line text-blue-500 mr-3"></i> USA EB-5 Visa</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-lg mb-3 text-blue-900">Our Services</h4>
                        <ul class="space-y-2">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Business Plan Development</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Investment Guidance</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Company Registration</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Visa Processing</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-green-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Minimum Investment</h4>
                    <p>Starting from $50,000 depending on the country and program requirements</p>
                </div>
            </div>
        `
    },
    'student-visa': {
        title: 'Student Visa Services',
        subtitle: 'Study Abroad & Education Migration',
        content: `
            <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-semibold text-lg mb-3 text-blue-900">Top Study Destinations</h4>
                        <ul class="space-y-2">
                            <li class="flex items-center"><i class="fas fa-graduation-cap text-blue-500 mr-3"></i> Canada Study Permit</li>
                            <li class="flex items-center"><i class="fas fa-graduation-cap text-blue-500 mr-3"></i> Australia Student Visa</li>
                            <li class="flex items-center"><i class="fas fa-graduation-cap text-blue-500 mr-3"></i> USA F-1 Visa</li>
                            <li class="flex items-center"><i class="fas fa-graduation-cap text-blue-500 mr-3"></i> UK Tier 4 Visa</li>
                            <li class="flex items-center"><i class="fas fa-graduation-cap text-blue-500 mr-3"></i> Germany Student Visa</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-lg mb-3 text-blue-900">Comprehensive Support</h4>
                        <ul class="space-y-2">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> University Applications</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Scholarship Assistance</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Visa Processing</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i> Accommodation Support</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">Post-Study Benefits</h4>
                    <p>Most countries offer work permits after graduation, leading to permanent residency pathways</p>
                </div>
            </div>
        `
    },
    'consultation': {
        title: 'Free Consultation',
        subtitle: 'Personalized Immigration Assessment',
        content: `
            <div class="space-y-6">
                <p class="text-lg">Book a free 30-minute consultation with our RCIC certified immigration consultants to:</p>
                <ul class="space-y-3">
                    <li class="flex items-center"><i class="fas fa-star text-yellow-500 mr-3"></i> Get your eligibility assessed</li>
                    <li class="flex items-center"><i class="fas fa-star text-yellow-500 mr-3"></i> Understand your immigration options</li>
                    <li class="flex items-center"><i class="fas fa-star text-yellow-500 mr-3"></i> Receive a personalized action plan</li>
                    <li class="flex items-center"><i class="fas fa-star text-yellow-500 mr-3"></i> Get answers to all your questions</li>
                </ul>
                <div class="bg-yellow-50 p-4 rounded-lg">
                    <h4 class="font-semibold mb-2">What to Prepare</h4>
                    <p>Bring your educational documents, work experience details, and any previous visa history for comprehensive assessment</p>
                </div>
            </div>
        `
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('service-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalContent = document.getElementById('modal-content');
    const backToTopBtn = document.getElementById('back-to-top');
    const contactForm = document.getElementById('contact-form');
    const submitText = document.getElementById('submit-text');
    const loadingSpinner = document.querySelector('.loading-spinner');

    // Ensure required elements exist before proceeding
    if (!modal || !closeModalBtn || !modalTitle || !modalSubtitle || !modalContent || !backToTopBtn || !submitText || !loadingSpinner) {
        console.error('One or more required DOM elements are missing.');
        return;
    }

    // Open modal when Learn More button is clicked
    learnMoreBtns.forEach(button => {
        button.addEventListener('click', function() {
            const serviceKey = this.getAttribute('data-service');
            openModal(serviceKey);
        });
    });

    // Close modal when close button is clicked
    closeModalBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Back to top button functionality
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form submission handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            submitText.textContent = 'Processing...';
            loadingSpinner.style.display = 'block';
            
            // Simulate form submission
            setTimeout(() => {
                // Show success message
                submitText.textContent = 'Message Sent!';
                loadingSpinner.style.display = 'none';
                
                // Reset form
                contactForm.reset();
                
                // Reset button text after 3 seconds
                setTimeout(() => {
                    submitText.textContent = 'Get Free Assessment';
                }, 3000);
            }, 2000);
        });
    }

    // Animate stats counter
    function animateStats() {
        const statElements = document.querySelectorAll('.stat-number');
        
        statElements.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current).toLocaleString();
            }, 16);
        });
    }

    // Intersection Observer for stats animation
    const statsSection = document.querySelector('#about');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }

    // Mobile menu toggle (if needed in future)
    // Add mobile menu functionality here if required
});

// Global functions
function openModal(serviceKey) {
    const modal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalContent = document.getElementById('modal-content');
    
    const service = serviceDetails[serviceKey];
    if (service) {
        modalTitle.textContent = service.title;
        modalSubtitle.textContent = service.subtitle || '';
        modalContent.innerHTML = service.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('service-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}


// Add smooth scrolling for navigation links
const navAnchors = document.querySelectorAll('a[href^="#"]');
if (navAnchors.length > 0) {
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}