// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== TOOLS SECTION ====================
    const toolsList = ["Python", "MATLAB", "PyTorch", "TensorFlow", "OpenCV", "Power BI", "LaTeX", "Git"];
    const toolsGrid = document.getElementById('toolsGrid');
    
    if(toolsGrid) {
        toolsList.forEach(tool => {
            const span = document.createElement('span');
            span.className = 'tool-item';
            span.textContent = tool;
            toolsGrid.appendChild(span);
        });
    }
    
    // ==================== STATS SECTION ====================
    const statsData = [
        { number: "10+", label: "Projects" },
        { number: "5+", label: "AI Models" },
        { number: "3+", label: "Research Projects" },
        { number: "∞", label: "Photography & Content" }
    ];
    const statsContainer = document.getElementById('statsContainer');
    
    if(statsContainer) {
        statsData.forEach(stat => {
            const card = document.createElement('div');
            card.className = 'stat-card';
            card.innerHTML = `
                <div class="stat-number">${stat.number}</div>
                <div>${stat.label}</div>
            `;
            statsContainer.appendChild(card);
        });
    }
    
    // ==================== PROJECTS SECTION ====================
    const projects = [
        { title: "Face Detection & Recognition System", desc: "Real-time detection using OpenCV & deep learning (Python).", icon: "fas fa-face-smile" },
        { title: "Sleep Health Regression Analysis", desc: "Statistical modeling & ML to predict sleep quality metrics.", icon: "fas fa-chart-line" },
        { title: "Graph Clustering Algorithms", desc: "Spectral clustering & community detection on complex networks.", icon: "fas fa-project-diagram" },
        { title: "Power BI QHSE Dashboard", desc: "Interactive safety dashboard for industrial KPIs and reporting.", icon: "fas fa-chart-pie" },
        { title: "Mathematical Modeling Projects", desc: "ODE systems, epidemiology & population dynamics simulations.", icon: "fas fa-square-root-alt" },
        { title: "Photography Portfolio", desc: "Creative visual storytelling & travel content collection.", icon: "fas fa-camera" }
    ];
    
    const projectsGrid = document.getElementById('projectsGrid');
    
    if(projectsGrid) {
        projects.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-icon"><i class="${proj.icon}"></i></div>
                <h3>${proj.title}</h3>
                <p>${proj.desc}</p>
            `;
            projectsGrid.appendChild(card);
        });
    }
    
    // ==================== TECHNICAL SKILLS SECTION - COMPLETELY REMOVED ====================
    // No skills section code - title and content removed
    
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
    
    // ==================== CV DOWNLOAD - REMOVED ====================
    // CV download functionality removed - using your PDF link in HTML instead
    
    // ==================== TOAST NOTIFICATION FUNCTION ====================
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
    
    // ==================== ADD ANIMATION STYLES ====================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ==================== UPDATE FOOTER YEAR ====================
    const footer = document.querySelector('.footer p');
    if(footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `© ${currentYear} Oussama Zeroual — Applied Mathematics & AI Portfolio`;
    }
    
    // ==================== ADD HOVER EFFECT TO STAT CARDS ====================
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // ==================== CONSOLE LOG ====================
    console.log('Portfolio website loaded successfully! 🚀');
});