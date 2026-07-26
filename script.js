document.addEventListener('DOMContentLoaded', () => {
    const contactEmail = 'oussamazeroual1000@gmail.com';

    const toolsList = [
        'Python', 'MATLAB', 'PyTorch', 'TensorFlow', 'OpenCV',
        'Power BI', 'LaTeX', 'Git', 'GitHub', 'Scikit-learn'
    ];

    const categoryStyles = {
        'Research': { gradient: 'linear-gradient(135deg, #93211b, #d97a4d)', icon: 'fa-satellite' },
        'Computer Vision': { gradient: 'linear-gradient(135deg, #2c3e50, #4c6b8a)', icon: 'fa-eye' },
        'Data Science': { gradient: 'linear-gradient(135deg, #3a5a40, #7a9e7e)', icon: 'fa-chart-line' },
        'AI / Algorithms': { gradient: 'linear-gradient(135deg, #4a3f77, #7d6bb0)', icon: 'fa-diagram-project' },
        'Data Visualization': { gradient: 'linear-gradient(135deg, #8a6d1f, #d1a94a)', icon: 'fa-chart-simple' },
        'Modeling': { gradient: 'linear-gradient(135deg, #6e2a3a, #b0576e)', icon: 'fa-square-root-variable' },
        'Creative': { gradient: 'linear-gradient(135deg, #444, #999)', icon: 'fa-camera-retro' }
    };

    // NOTE: edit githubLink / zipLink below to point at your real repos/files.
    const projects = [
        {
            title: 'SAR–Optical Satellite Image Fusion',
            category: 'Research',
            desc: 'Fusing SAR and optical satellite imagery for cloud removal and richer scene reconstruction.',
            tech: ['Remote Sensing', 'Deep Learning', 'Python'],
            result: 'Ongoing research affiliated with the ASAL incubator.',
            zipLink: '',
            githubLink: ''
        },
        {
            title: 'Face Detection & Recognition System',
            category: 'Computer Vision',
            desc: 'Real-time face detection and recognition pipeline using OpenCV and deep learning.',
            tech: ['Python', 'OpenCV', 'Deep Learning'],
            result: 'Useful for identity recognition and webcam demos.',
            zipLink: 'projects/face-detection.zip',
            githubLink: 'https://github.com/oussama-zeroual'
        },
        {
            title: 'Sleep Health Regression Analysis',
            category: 'Data Science',
            desc: 'Statistical modeling and machine learning analysis to predict sleep quality metrics.',
            tech: ['Python', 'Regression', 'Statistics'],
            result: 'Transforms health variables into interpretable predictions.',
            zipLink: 'projects/sleep-analysis.zip',
            githubLink: 'https://github.com/oussama-zeroual'
        },
        {
            title: 'Graph Clustering Algorithms',
            category: 'AI / Algorithms',
            desc: 'Spectral clustering and community detection experiments on complex network structures.',
            tech: ['Python', 'Graphs', 'Clustering'],
            result: 'Explores hidden groups and communities inside graph-based data.',
            zipLink: 'projects/graph-clustering.zip',
            githubLink: 'https://github.com/oussama-zeroual'
        },
        {
            title: 'Power BI QHSE Dashboard',
            category: 'Data Visualization',
            desc: 'Interactive dashboard for industrial safety KPIs, monitoring, and clear reporting.',
            tech: ['Power BI', 'KPIs', 'Dashboard'],
            result: 'Turns safety data into visual indicators for faster decisions.',
            zipLink: 'projects/powerbi-dashboard.zip',
            githubLink: ''
        },
        {
            title: 'Mathematical Modeling Projects',
            category: 'Modeling',
            desc: 'ODE systems, epidemiology, population dynamics, and numerical simulation projects.',
            tech: ['ODE', 'Simulation', 'Python'],
            result: 'Connects mathematical theory with computational experiments.',
            zipLink: 'projects/mathematical-models.zip',
            githubLink: 'https://github.com/oussama-zeroual'
        },
        {
            title: 'Photography Portfolio',
            category: 'Creative',
            desc: 'Creative visual storytelling and travel content collection.',
            tech: ['Photography', 'Travel', 'Storytelling'],
            result: 'Shows the creative side behind technical work.',
            zipLink: '',
            githubLink: ''
        }
    ];

    const $ = (selector, parent = document) => parent.querySelector(selector);
    const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

    function escapeHTML(value) {
        return String(value).replace(/[&<>'"]/g, (char) => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
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
            const style = categoryStyles[project.category] || { gradient: 'linear-gradient(135deg,#555,#999)', icon: 'fa-folder' };
            const techHtml = project.tech.map((item) => `<span>${escapeHTML(item)}</span>`).join('');

            const zipButton = project.zipLink
                ? `<a href="${escapeHTML(project.zipLink)}" download class="project-link">ZIP</a>`
                : '';
            const githubButton = project.githubLink
                ? `<a href="${escapeHTML(project.githubLink)}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>`
                : '';
            const contactButton = `<a href="#contact" class="project-link">Details</a>`;

            return `
                <article class="project-card">
                    <div class="project-thumb">
                        <div class="project-thumb-bg" style="background:${style.gradient}"><i class="fas ${style.icon}"></i></div>
                        <span class="thumb-tag">${escapeHTML(project.category)}</span>
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
            navLinks.classList.remove('is-open');
            document.body.classList.remove('no-scroll');
            menuBtn.setAttribute('aria-expanded', 'false');
        }

        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.contains('is-open');
            if (isOpen) {
                closeMenu();
            } else {
                navLinks.classList.add('is-open');
                document.body.classList.add('no-scroll');
                menuBtn.setAttribute('aria-expanded', 'true');
            }
        });

        $$('.nav-links a').forEach((link) => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
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
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        elements.forEach((element) => observer.observe(element));
    }

    function setupActiveNavigation() {
        const links = $$('.nav-links a');
        const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
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
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
            setFormMessage('Your email app should open with the message prepared.', 'success');
            showToast('Message prepared in your email app');
            form.reset();
        });

        function setFormMessage(message, type) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
        }
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

    renderTools();
    renderProjectFilters();
    renderProjects();
    setupMobileNavigation();
    setupSmoothAnchorScrolling();
    setupScrollReveal();
    setupActiveNavigation();
    setupContactForm();
    setupFooterYear();
});
