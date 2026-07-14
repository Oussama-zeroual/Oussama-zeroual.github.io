document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== TOOLS SECTION ====================
    const toolsList = ["Python", "MATLAB", "PyTorch", "TensorFlow", "OpenCV", "Power BI", "LaTeX", "Git", "GitHub", "Scikit-learn"];
    const toolsGrid = document.getElementById('toolsGrid');
    
    if(toolsGrid) {
        toolsList.forEach(tool => {
            const span = document.createElement('span');
            span.className = 'tool-item';
            span.textContent = tool;
            toolsGrid.appendChild(span);
        });
    }
    
    // ==================== ABOUT ME - CENTERED ====================
    const aboutSection = document.getElementById('about');
    if(aboutSection) {
        const aboutWrapper = aboutSection.querySelector('.about-wrapper');
        if(aboutWrapper) {
            aboutWrapper.style.textAlign = 'center';
            aboutWrapper.style.flexDirection = 'column';
        }
        const aboutText = aboutSection.querySelector('.about-text');
        if(aboutText) {
            aboutText.style.maxWidth = '800px';
            aboutText.style.margin = '0 auto';
        }
        const sectionTitle = aboutSection.querySelector('.section-title');
        if(sectionTitle) {
            sectionTitle.style.display = 'block';
            sectionTitle.style.textAlign = 'center';
        }
    }
    
    // ==================== PROJECTS SECTION ====================
    const projects = [
        { 
            title: "Face Detection & Recognition System", 
            desc: "Real-time detection using OpenCV & deep learning (Python).", 
            icon: "fas fa-face-smile",
            zipLink: "projects/face-detection.zip"
        },
        { 
            title: "Sleep Health Regression Analysis", 
            desc: "Statistical modeling & ML to predict sleep quality metrics.", 
            icon: "fas fa-chart-line",
            zipLink: "projects/sleep-analysis.zip"
        },
        { 
            title: "Graph Clustering Algorithms", 
            desc: "Spectral clustering & community detection on complex networks.", 
            icon: "fas fa-project-diagram",
            zipLink: "projects/graph-clustering.zip"
        },
        { 
            title: "Power BI QHSE Dashboard", 
            desc: "Interactive safety dashboard for industrial KPIs and reporting.", 
            icon: "fas fa-chart-pie",
            zipLink: "projects/powerbi-dashboard.zip"
        },
        { 
            title: "Mathematical Modeling Projects", 
            desc: "ODE systems, epidemiology & population dynamics simulations.", 
            icon: "fas fa-square-root-alt",
            zipLink: "projects/mathematical-models.zip"
        },
        { 
            title: "Photography Portfolio", 
            desc: "Creative visual storytelling & travel content collection.", 
            icon: "fas fa-camera",
            zipLink: ""
        }
    ];
    
    const projectsGrid = document.getElementById('projectsGrid');
    
    if(projectsGrid) {
        projects.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            let buttonsHtml = '';
            if (proj.zipLink) {
                buttonsHtml = `
                    <div class="project-buttons">
                        <a href="${proj.zipLink}" download class="project-link-btn">
                            <i class="fas fa-download"></i> Download Project ZIP
                        </a>
                    </div>
                `;
            }
            
            card.innerHTML = `
                <div class="project-icon"><i class="${proj.icon}"></i></div>
                <h3>${proj.title}</h3>
                <p>${proj.desc}</p>
                ${buttonsHtml}
            `;
            projectsGrid.appendChild(card);
        });
    }
    
    // ==================== EXCHANGE THOUGHTS SECTION ====================
    const exchangeContainer = document.getElementById('exchangeThoughtsContainer');
    if (exchangeContainer) {
        exchangeContainer.innerHTML = `
            <h2 class="section-title" style="text-align: center; display: block;">
                <i class="fas fa-comments"></i> Exchange Thoughts
            </h2>
            <div class="exchange-container">
                <div class="exchange-message">
                    <p style="font-size: 1.1rem; color: #475569; margin-bottom: 1.5rem; text-align: center;">
                        💡 Have a question, collaboration idea, or just want to discuss AI and mathematics? 
                        Let's connect and exchange thoughts!
                    </p>
                </div>
                
                <div class="exchange-form">
                    <form id="thoughtsForm">
                        <div class="form-group">
                            <input type="text" id="name" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <textarea id="message" rows="5" placeholder="Share your thoughts, ideas, or questions..." required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary submit-thoughts-btn">
                            <i class="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                    <div id="formMessage" style="margin-top: 1rem; text-align: center;"></div>
                </div>
                
                
            </div>
        `;
        
        // Add form submission handler
        const thoughtsForm = document.getElementById('thoughtsForm');
        if (thoughtsForm) {
            thoughtsForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('name').value;
                
                const formMessage = document.getElementById('formMessage');
                formMessage.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i> Thank you for your message, ' + name + '! I\'ll get back to you soon.</div>';
                
                thoughtsForm.reset();
                
                setTimeout(() => {
                    formMessage.innerHTML = '';
                }, 5000);
                
                showToast('✨ Message sent successfully!');
            });
        }
    }
    
    // ==================== 3D TILT EFFECT ====================
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 8;
            const rotateY = ((x - centerX) / centerX) * 8;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
    
    // ==================== SCROLL REVEAL EFFECT ====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section, .hero, .tools-grid').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // ==================== SMOOTH SCROLLING ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href === "#" || href === "") return;
            const targetElem = document.querySelector(href);
            if(targetElem) {
                e.preventDefault();
                targetElem.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // ==================== VIEW WORK BUTTON ====================
    const viewWorkBtn = document.getElementById('viewWorkBtn');
    if(viewWorkBtn) {
        viewWorkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if(projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // ==================== TOAST NOTIFICATION ====================
    function showToast(message) {
        const toast = document.createElement('div');
        toast.innerText = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = '#1e293b';
        toast.style.color = 'white';
        toast.style.padding = '12px 20px';
        toast.style.borderRadius = '30px';
        toast.style.fontSize = '0.85rem';
        toast.style.zIndex = '999';
        toast.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        toast.style.animation = 'slideIn 0.3s ease';
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    // ==================== UPDATE FOOTER YEAR ====================
    const footer = document.querySelector('.footer p');
    if(footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `© ${currentYear} Oussama Zeroual`;
    }
    
    // ==================== CONSOLE LOG ====================
    console.log('Portfolio website loaded successfully! 🚀');
});