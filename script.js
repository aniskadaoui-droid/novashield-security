document.addEventListener('DOMContentLoaded', () => {

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    if (typeof gsap !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    const loader = document.querySelector('.loader-container');

    if (loader) {
        window.addEventListener('load', () => {
            gsap.to(loader, {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
                onComplete: () => {
                    loader.style.display = 'none';
                }
            });
        });
    }

    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {

            e.preventDefault();

            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            setTimeout(() => {

                submitBtn.textContent = "Message Sent";

                setTimeout(() => {

                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    contactForm.reset();

                }, 2000);

            }, 2000);

        });
    }

});
