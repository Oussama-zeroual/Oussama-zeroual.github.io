document.addEventListener('DOMContentLoaded', () => {
    const contactEmail = 'oussamazeroual1000@gmail.com';

    const toolsList = [
        'Python', 'MATLAB', 'PyTorch', 'TensorFlow', 'OpenCV',
        'Power BI', 'LaTeX', 'Git', 'GitHub', 'Scikit-learn'
    ];

    const projects = [
        {
            title: 'Face Detection & Recognition System',
            category: 'Computer Vision',
            desc: 'Real-time face detection and recognition pipeline using OpenCV and deep learning tools.',
            icon: 'fas fa-face-smile',
            tech: ['Python', 'OpenCV', 'Deep Learning'],
            result: 'Useful for identity recognition, webcam demos, and image-processing workflows.',
            zipLink: 'projects/face-detection.zip',
            githubLink: 'https://github.com/oussama-zeroual'
        },
        {
            title: 'Sleep Health Regression Analysis',
            category: 'Data Science',
            desc: 'Statistical modeling and machine learning analysis to predict sleep quality metrics.',
            icon: 'fas fa-chart-line',
            tech: ['Python', 'Regression', 'Statistics'],
            result: 'Transforms health variables into interpretable prediction and analysis results.',
            zipLink: 'projects/sleep-analysis.zip',
            githubLink: 'https://github.com/oussama-zeroual'
        },
        {
            title: 'Graph Clustering Algorithms',
            category: 'AI / Algorithms',
            desc: 'Spectral clustering and community detection experiments on complex network structures.',
            icon: 'fas fa-project-diagram',
            tech: ['Python', 'Graphs', 'Clustering'],
            result: 'Explores hidden groups and communities inside graph-based data.',
            zipLink: 'projects/graph-clustering.zip',
            githubLink: 'https://github.com/oussama-zeroual'
        },
        {
            title: 'Power BI QHSE Dashboard',
            category: 'Data Visualization',
            desc: 'Interactive dashboard for industrial safety KPIs, monitoring, and clear reporting.',
            icon: 'fas fa-chart-pie',
            tech: ['Power BI', 'KPIs', 'Dashboard'],
            result: 'Turns safety data into visual indicators for faster decision-making.',
            zipLink: 'projects/powerbi-dashboard.zip',
            githubLink: ''
        },
        {
            title: 'Mathematical Modeling Projects',
            category: 'Modeling',
            desc: 'ODE systems, epidemiology, population dynamics, and numerical simulation projects.',
            icon: 'fas fa-square-root-alt',
            tech: ['ODE', 'Simulation', 'Python'],
            result: 'Connects mathematical theory with computational experiments and interpretation.',
            zipLink: 'projects/mathematical-models.zip',
            githubLink: 'https://github.com/oussama-zeroual'
        },
        {
            title: 'Photography Portfolio',
            category: 'Creative',
            desc: 'Creative visual storytelling and travel content collection with a clean artistic style.',
            icon: 'fas fa-camera',
            tech: ['Photography', 'Travel', 'Storytelling'],
            result: 'Shows the creative side behind technical and analytical work.',
            zipLink: '',
            githubLink: ''
        }
    ];

    const typingWords = [
        'modeling & simulation',
        'machine learning',
        'computer vision',
        'data science',
        'optimization'
    ];

    const focusWords = [
        'Simulation models',
        'Computer vision',
        'AI workflows',
        'Data dashboards',
        'Optimization'
    ];

    const $ = (selector, parent = document) => parent.querySelector(selector);
    const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

    function escapeHTML(value) {
        return String(value).replace(/[&<>'"]/g, (char) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[char]));
    }

    function renderTools() {
        const toolsGrid = $('#toolsGrid');
        if (!toolsGrid) return;

        toolsGrid.innerHTML = toolsList
            .map((tool) => `<span class="tool-item">${escapeHTML(tool)}</span>`)
            .join('');
    }

    function getProjectCategories() {
        return ['All', ...new Set(projects.map((project) => project.category))];
    }

    function renderProjectFilters() {
        const filtersContainer = $('#projectFilters');
        if (!filtersContainer) return;

        filtersContainer.innerHTML = getProjectCategories()
            .map((category, index) => `
                <button class="filter-btn ${index === 0 ? 'active' : ''}" type="button" data-filter="${escapeHTML(category)}">
                    ${escapeHTML(category)}
                </button>
            `)
            .join('');

        $$('.filter-btn', filtersContainer).forEach((button) => {
            button.addEventListener('click', () => {
                $$('.filter-btn', filtersContainer).forEach((btn) => btn.classList.remove('active'));
                button.classList.add('active');
                renderProjects(button.dataset.filter);
            });
        });
    }

    function renderProjects(filter = 'All') {
        const projectsGrid = $('#projectsGrid');
        if (!projectsGrid) return;

        const visibleProjects = filter === 'All'
            ? projects
            : projects.filter((project) => project.category === filter);

        projectsGrid.innerHTML = visibleProjects.map((project) => {
            const techHtml = project.tech
                .map((item) => `<span>${escapeHTML(item)}</span>`)
                .join('');

            const zipButton = project.zipLink
                ? `<a href="${escapeHTML(project.zipLink)}" download class="project-link"><i class="fas fa-download"></i> ZIP</a>`
                : '';

            const githubButton = project.githubLink
                ? `<a href="${escapeHTML(project.githubLink)}" target="_blank" rel="noopener noreferrer" class="project-link secondary"><i class="fab fa-github"></i> GitHub</a>`
                : '';

            const contactButton = `<a href="#contact" class="project-link secondary"><i class="fas fa-message"></i> Details</a>`;

            return `
                <article class="project-card">
                    <div class="project-top">
                        <div class="project-icon"><i class="${escapeHTML(project.icon)}"></i></div>
                        <span class="project-category">${escapeHTML(project.category)}</span>
                    </div>
                    <h3>${escapeHTML(project.title)}</h3>
                    <p>${escapeHTML(project.desc)}</p>
                    <div class="project-tech">${techHtml}</div>
                    <div class="project-result">${escapeHTML(project.result)}</div>
                    <div class="project-actions">
                        ${zipButton}
                        ${githubButton}
                        ${contactButton}
                    </div>
                </article>
            `;
        }).join('');
    }

    function setupMobileNavigation() {
        const menuBtn = $('#mobileMenuBtn');
        const navLinks = $('#navLinks');
        if (!menuBtn || !navLinks) return;

        function closeMenu() {
            menuBtn.classList.remove('is-open');
            navLinks.classList.remove('is-open');
            document.body.classList.remove('no-scroll');
            menuBtn.setAttribute('aria-expanded', 'false');
        }

        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.contains('is-open');
            if (isOpen) {
                closeMenu();
            } else {
                menuBtn.classList.add('is-open');
                navLinks.classList.add('is-open');
                document.body.classList.add('no-scroll');
                menuBtn.setAttribute('aria-expanded', 'true');
            }
        });

        $$('.nav-links a').forEach((link) => link.addEventListener('click', closeMenu));

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeMenu();
        });
    }

    function setupThemeToggle() {
        const themeToggle = $('#themeToggle');
        if (!themeToggle) return;

        const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nextTheme);
            localStorage.setItem('portfolio-theme', nextTheme);
            updateThemeIcon(nextTheme);
        });

        function updateThemeIcon(theme) {
            themeToggle.innerHTML = theme === 'dark'
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';
        }
    }

    function setupDynamicFocus() {
        const focusTarget = $('#dynamicFocus');
        if (!focusTarget) return;

        let index = 0;
        window.setInterval(() => {
            index = (index + 1) % focusWords.length;
            focusTarget.style.opacity = '0';
            focusTarget.style.transform = 'translateY(4px)';

            window.setTimeout(() => {
                focusTarget.textContent = focusWords[index];
                focusTarget.style.opacity = '1';
                focusTarget.style.transform = 'translateY(0)';
            }, 180);
        }, 2200);
    }

    function setupTypingEffect() {
        const target = $('#typingText');
        if (!target) return;

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = typingWords[wordIndex];
            const visibleText = isDeleting
                ? currentWord.slice(0, charIndex - 1)
                : currentWord.slice(0, charIndex + 1);

            target.textContent = visibleText;
            charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

            let delay = isDeleting ? 45 : 85;

            if (!isDeleting && charIndex === currentWord.length) {
                delay = 1200;
                isDeleting = true;
            }

            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % typingWords.length;
                delay = 350;
            }

            window.setTimeout(type, delay);
        }

        type();
    }

    function setupScrollReveal() {
        const elements = $$('.section-reveal');
        if (!elements.length) return;

        if (!('IntersectionObserver' in window)) {
            elements.forEach((element) => element.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

        elements.forEach((element) => observer.observe(element));
    }

    function setupActiveNavigation() {
        const links = $$('.nav-links a');
        const sections = links
            .map((link) => document.querySelector(link.getAttribute('href')))
            .filter(Boolean);

        if (!sections.length || !('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                links.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            });
        }, { threshold: 0.35 });

        sections.forEach((section) => observer.observe(section));
    }

    function setupContactForm() {
        const form = $('#contactForm');
        const formMessage = $('#formMessage');
        if (!form || !formMessage) return;

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = $('#name').value.trim();
            const email = $('#email').value.trim();
            const message = $('#message').value.trim();

            if (!name || !email || !message) {
                setFormMessage('Please fill in all fields before sending.', 'error');
                return;
            }

            const subject = encodeURIComponent(`Portfolio message from ${name}`);
            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            );

            window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
            setFormMessage('Your email app should open with the message prepared.', 'success');
            showToast('Message prepared in your email app ✨');
            form.reset();
        });

        function setFormMessage(message, type) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
        }
    }

    function setupScrollProgress() {
        const progress = $('#scrollProgress');
        if (!progress) return;

        function updateProgress() {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const value = maxScroll > 0 ? window.scrollY / maxScroll : 0;
            progress.style.transform = `scaleX(${Math.min(Math.max(value, 0), 1)})`;
        }

        updateProgress();
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress);
    }

    function setupBackToTop() {
        const button = $('#backToTop');
        if (!button) return;

        window.addEventListener('scroll', () => {
            button.classList.toggle('show', window.scrollY > 650);
        }, { passive: true });

        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function setupSmoothAnchorScrolling() {
        $$('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (event) => {
                const href = anchor.getAttribute('href');
                if (!href || href === '#') return;

                const target = document.querySelector(href);
                if (!target) return;

                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    function showToast(message) {
        const existingToast = $('.toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        window.setTimeout(() => {
            toast.classList.add('hide');
            window.setTimeout(() => toast.remove(), 260);
        }, 2800);
    }

    function setupFooterYear() {
        const year = $('#currentYear');
        if (year) year.textContent = new Date().getFullYear();
    }

    // Initialize everything
    renderTools();
    renderProjectFilters();
    renderProjects();
    setupMobileNavigation();
    setupThemeToggle();
    setupTypingEffect();
    setupDynamicFocus();
    setupScrollProgress();
    setupSmoothAnchorScrolling();
    setupScrollReveal();
    setupActiveNavigation();
    setupContactForm();
    setupBackToTop();
    setupFooterYear();

    console.log('Enhanced portfolio website loaded successfully! 🚀');
});