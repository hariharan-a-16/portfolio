document.addEventListener("DOMContentLoaded", () => {
    // Check if portfolioData is loaded
    if (typeof portfolioData === 'undefined') {
        console.error("portfolioData is not defined. Ensure data.js is loaded before script.js.");
        return;
    }

    /* ==========================================================================
       1. Dynamic Rendering
       ========================================================================== */

    // --- Render Navigation ---
    const navContainer = document.getElementById("dynamic-nav");
    if (navContainer) {
        navContainer.innerHTML = portfolioData.footer.quickLinks.map(link => `
            <li class="nav-item">
                <a href="${link.url}" class="nav-link">${link.label}</a>
            </li>
        `).join('');
    }

    // --- Render Hero ---
    const heroContainer = document.getElementById("dynamic-hero");
    if (heroContainer) {
        heroContainer.innerHTML = `
            <div class="hero-content">
                <span class="hero-greeting reveal">Hello, I'm</span>
                <h1 class="hero-title reveal"><span>${portfolioData.hero.name.charAt(0)}</span>${portfolioData.hero.name.slice(1)}</h1>
                <div class="hero-roles reveal"><span class="typing-text"></span></div>
                <p class="hero-subtitle reveal">${portfolioData.hero.subtitle}</p>
                <div class="hero-buttons reveal">
                    <a href="#contact" class="btn btn-primary">Hire Me</a>
                    <a href="#projects" class="btn btn-outline">View Projects</a>
                </div>
            </div>
            <div class="hero-image-wrapper reveal">
                <img src="${portfolioData.hero.profileImage}" alt="${portfolioData.hero.name}">
            </div>
        `;
    }

    // --- Render About ---
    const aboutContainer = document.getElementById("dynamic-about");
    if (aboutContainer) {
        const detailsHtml = portfolioData.about.details.map(d => `
            <div class="detail-item">
                <span class="label">${d.label}</span>
                <span class="value">${d.value}</span>
            </div>
        `).join('');

        aboutContainer.innerHTML = `
            <div class="about-image reveal">
                <img src="${portfolioData.about.aboutImage}" alt="About Image" loading="lazy">
            </div>
            <div class="about-text reveal">
                <h3>Professional Summary</h3>
                <p>${portfolioData.about.summary}</p>
                <p><strong>Education:</strong> ${portfolioData.about.education}</p>
                <p><strong>Objective:</strong> ${portfolioData.about.careerObjective}</p>
                <div class="about-details">
                    ${detailsHtml}
                </div>
            </div>
        `;
    }

    // --- Render Skills ---
    const skillsContainer = document.getElementById("dynamic-skills");
    if (skillsContainer) {
        skillsContainer.innerHTML = `
            <div class="skills-tabs reveal">
                <button class="tab-btn active" data-target="frontend">Frontend</button>
                <button class="tab-btn" data-target="backend">Backend</button>
                <button class="tab-btn" data-target="database">Database</button>
            </div>
            <div class="skills-grid reveal" id="skills-grid">
                <!-- Skills will be rendered here -->
            </div>
        `;

        const skillsGrid = document.getElementById("skills-grid");
        const tabBtns = document.querySelectorAll(".tab-btn");

        const renderSkills = (category) => {
            const skillsArray = portfolioData.skills[category];
            skillsGrid.innerHTML = skillsArray.map(skill => `
                <div class="skill-item glass-card">
                    <i class="${skill.iconClass}"></i>
                    <span>${skill.name}</span>
                </div>
            `).join('');

            // Add slight animation
            const items = skillsGrid.querySelectorAll('.skill-item');
            items.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.4s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 50);
            });
        };

        // Render initial category
        renderSkills("frontend");

        tabBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                // Remove active class from all
                tabBtns.forEach(b => b.classList.remove("active"));
                // Add active class to clicked
                btn.classList.add("active");
                // Render corresponding skills
                const target = btn.getAttribute("data-target");
                renderSkills(target);
            });
        });
    }

    // --- Render Experience ---
    const expContainer = document.getElementById("dynamic-experience");
    if (expContainer) {
        expContainer.innerHTML = `
            <div class="experience-timeline">
                ${portfolioData.experience.map(exp => `
                    <div class="timeline-item reveal">
                        <div class="timeline-icon">
                            <i class="fa-solid fa-briefcase"></i>
                        </div>
                        <div class="timeline-content glass-card">
                            <h3>${exp.company}</h3>
                            <div class="role">${exp.role}</div>
                            <div class="duration"><i class="fa-regular fa-calendar-days"></i> ${exp.duration}</div>
                            <ul>
                                ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // --- Render Projects ---
    const projectsContainer = document.getElementById("dynamic-projects");
    if (projectsContainer) {
        projectsContainer.innerHTML = portfolioData.projects.map(proj => `
            <div class="project-card reveal">
                <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy">
                <div class="project-info">
                    <span class="project-type">${proj.type}</span>
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-desc">${proj.description}</p>
                    <div class="project-links">
                        <a href="${proj.liveUrl}" target="_blank" title="Live Demo" aria-label="View Live Demo"><i class="fa-solid fa-globe"></i></a>
                        ${proj.githubUrl && proj.githubUrl !== "#" ? `<a href="${proj.githubUrl}" target="_blank" title="GitHub Repo" aria-label="View GitHub Repository"><i class="fa-brands fa-github"></i></a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // --- Render Services ---
    const servicesContainer = document.getElementById("dynamic-services");
    if (servicesContainer) {
        servicesContainer.innerHTML = portfolioData.services.map(service => `
            <div class="service-card glass-card reveal">
                <div class="service-icon">
                    <i class="${service.iconClass}"></i>
                </div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.description}</p>
            </div>
        `).join('');
    }

    // --- Render Achievements ---
    const achievementsContainer = document.getElementById("dynamic-achievements");
    if (achievementsContainer) {
        achievementsContainer.innerHTML = portfolioData.achievements.map(ach => `
            <div class="achievement-card glass-card reveal">
                <div class="achievement-icon">
                    <i class="${ach.iconClass}"></i>
                </div>
                <div class="achievement-info">
                    <h3>${ach.title}</h3>
                    <p>${ach.description}</p>
                </div>
            </div>
        `).join('');
    }

    // --- Render Contact ---
    const contactContainer = document.getElementById("dynamic-contact");
    if (contactContainer) {
        const infoHtml = portfolioData.contact.details.map(det => `
            <div class="contact-info-item">
                <div class="contact-icon"><i class="${det.iconClass}"></i></div>
                <div class="contact-details">
                    <h4>${det.label}</h4>
                    <p>${det.value}</p>
                </div>
            </div>
        `).join('');

        const socialsHtml = portfolioData.contact.socials.map(soc => `
            <a href="${soc.url}" target="_blank" aria-label="Social Profile"><i class="${soc.iconClass}"></i></a>
        `).join('');

        contactContainer.innerHTML = `
            <div class="contact-info-wrapper reveal">
                <div class="contact-info-list">
                    ${infoHtml}
                </div>
                <div class="contact-socials">
                    ${socialsHtml}
                </div>
            </div>
            
            <div class="contact-form-wrapper reveal">
                <form id="contactForm" class="contact-form glass-card" action="https://formspree.io/f/${portfolioData.contact.formspreeId}" method="POST">
                    <div class="input-group">
                        <input type="text" name="name" required placeholder="Your Name">
                    </div>
                    <div class="input-group">
                        <input type="email" name="email" required placeholder="Your Email">
                    </div>
                    <div class="input-group">
                        <textarea name="message" required placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                    <p id="status" style="margin-top: 10px; font-weight: 500;"></p>
                </form>
            </div>
        `;

        // Form Submit Handler
        document.getElementById("contactForm").addEventListener("submit", async function (e) {
            e.preventDefault();
            let form = e.target;
            let status = document.getElementById("status");
            let data = new FormData(form);
            try {
                let res = await fetch(form.action, {
                    method: "POST",
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if (res.ok) {
                    status.style.color = "#10B981"; // success green
                    status.innerText = "Message sent successfully!";
                    form.reset();
                } else {
                    status.style.color = "#EF4444"; // error red
                    status.innerText = "Failed to send message!";
                }
            } catch (error) {
                status.style.color = "#EF4444";
                status.innerText = "Something went wrong!";
            }
            setTimeout(() => { status.innerText = ""; }, 5000);
        });
    }

    // --- Render Footer ---
    const footerContainer = document.getElementById("dynamic-footer");
    if (footerContainer) {
        footerContainer.innerHTML = `
            <div class="footer-container container">
                <a href="#home" class="footer-logo">Port<span>folio.</span></a>
                <div class="footer-links">
                    ${portfolioData.footer.quickLinks.map(link => `<a href="${link.url}">${link.label}</a>`).join('')}
                </div>
                <div class="footer-copy">
                    &copy; ${new Date().getFullYear()} ${portfolioData.footer.name}. All Rights Reserved.
                </div>
            </div>
        `;
    }

    /* ==========================================================================
       2. Advanced Interactivity & Animations
       ========================================================================== */

    // --- Typing Animation ---
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const roles = portfolioData.hero.roles;
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before typing next
            }

            setTimeout(type, typeSpeed);
        }

        // Start typing effect slightly after load
        setTimeout(type, 1000);
    }

    // --- Custom Cursor Removed ---

    // --- Scroll Progress Bar ---
    const scrollProgress = document.getElementById("scroll-progress");
    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (scrollProgress) scrollProgress.style.width = scrolled + "%";
    });

    // --- Scroll Reveal ---
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only reveal once
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach(section => {
        revealObserver.observe(section);
    });

    // --- Sticky Navbar & Active Link ---
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Sticky Header
        if (window.scrollY >= 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button
        if (window.scrollY >= 500 && backToTopBtn) {
            backToTopBtn.classList.add('show');
        } else if (backToTopBtn) {
            backToTopBtn.classList.remove('show');
        }

        // Active Link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // --- Mobile Menu Toggle ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            // Change icon
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('show-menu')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // --- Particle Background (Vanilla JS implementation) ---
    const particlesContainer = document.getElementById("particles-container");
    if (particlesContainer) {
        const numParticles = 50;
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");

            // Random properties
            const size = Math.random() * 5 + 2;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;

            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background-color: rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                left: ${x}%;
                top: ${y}%;
                animation: float ${duration}s ease-in-out ${delay}s infinite alternate;
                pointer-events: none;
            `;

            particlesContainer.appendChild(particle);
        }

        // Add float animation keyframes dynamically
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes float {
                0% { transform: translate(0, 0); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
});
