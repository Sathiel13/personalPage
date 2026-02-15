(function () {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Mobile nav toggle
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.getElementById("navMenu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            const isOpen = menu.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        // Close menu when clicking a link (mobile)
        menu.addEventListener("click", (e) => {
            const target = e.target;
            if (target instanceof HTMLAnchorElement) {
                menu.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            const t = e.target;
            const clickedInsideNav =
                (t instanceof Node && menu.contains(t)) ||
                (t instanceof Node && toggle.contains(t));

            if (!clickedInsideNav) {
                menu.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // --- i18n (ES/EN) ---
    const I18N = {
        es: {
            skipToContent: "Saltar al contenido",
            openMenu: "Abrir menú",
            "nav.about": "Sobre mí",
            "nav.projects": "Proyectos",
            "nav.skills": "Habilidades",
            "nav.achievements": "Logros",
            "nav.education": "Educación",
            "nav.contact": "Contacto",

            "hero.kicker": "Ingeniería en Sistemas · Fullstack · IA · LowCode",
            "hero.role": "<strong>Ingeniero en Sistemas</strong> | Fullstack Developer | IA | Herramientas LowCode",
            "hero.subtitle": "“Desarrollo soluciones web y automatizaciones con enfoque en productividad y negocio.”",
            "hero.ctaProjects": "Ver proyectos",
            "hero.cvEs": "Descargar CV (ES)",
            "hero.cvEn": "Download CV (EN)",
            "hero.ctaContact": "Contacto",
            "hero.location": "Zacatecas, MX",
            "hero.availability": "Disponible para prácticas",
            "hero.mainStack": "React · Node · TS",

            "summary.title": "Resumen rápido",
            "summary.item1": "Fullstack con enfoque en arquitectura, calidad y entrega.",
            "summary.item2": "Automatización (n8n) + APIs + bases de datos.",
            "summary.item3": "Finalista en hackathon ONE.",

            "about.title": "Sobre mí",
            "about.subtitle": "Resumen profesional",
            "about.body":
                'Estudiante de Ingeniería en Sistemas enfocado en fullstack e IA, con experiencia construyendo soluciones reales como <strong>ClinicFlow</strong> (automatización de flujos por WhatsApp y gestión de citas) y aplicaciones web con <strong>React</strong>, <strong>Node.js/Express</strong>, <strong>TypeScript</strong> y bases de datos (<strong>MongoDB/PostgreSQL/SQLite</strong>). Finalista en hackathon ONE, con enfoque en arquitectura, calidad y entrega. Busco prácticas profesionales para contribuir en desarrollo de software y escalar productos.',

            "projects.title": "Proyectos destacados",
            "projects.subtitle": "Selección de trabajos con impacto y stack real",
            "projects.features": "Funcionalidades",
            "projects.stack": "Stack",
            "projects.role": "Rol",
            "projects.impact": "Impacto",
            "projects.askDemo": "Pedir demo",
            "projects.techDetails": "Detalles técnicos",
            "projects.requestRepo": "Solicitar repositorio",
            "projects.seeApproach": "Ver enfoque",
            "projects.seeAchievement": "Ver logro",
            "projects.askDetails": "Preguntar detalles",

            "projects.clinicflow.tag": "Automatización WhatsApp · Citas · SaaS",
            "projects.clinicflow.desc": "Sistema de automatización de citas médicas por WhatsApp para clínicas dentales.",
            "projects.clinicflow.f1": "Agenda automática de citas.",
            "projects.clinicflow.f2": "Gestión de pacientes.",
            "projects.clinicflow.f3": "Integración con Google Calendar.",
            "projects.clinicflow.f4": "Respuestas automatizadas.",
            "projects.clinicflow.r1": "Arquitectura completa del sistema.",
            "projects.clinicflow.r2": "Diseño de base de datos multi-tenant.",
            "projects.clinicflow.r3": "Automatización de flujos.",
            "projects.clinicflow.r4": "Integración de APIs.",
            "projects.clinicflow.i1": "Implementado con clínicas reales.",
            "projects.clinicflow.i2": "Proyecto SaaS en fase de validación.",

            "projects.repx.tag": "Plataforma web fullstack · E-commerce",
            "projects.repx.desc": "Plataforma web de comercio electrónico desarrollada con arquitectura MERN.",
            "projects.repx.f1": "Registro de usuarios.",
            "projects.repx.f2": "Carrito de compras.",
            "projects.repx.f3": "Panel de administración.",
            "projects.repx.f4": "Gestión de productos y órdenes.",
            "projects.repx.r1": "Desarrollo fullstack.",
            "projects.repx.r2": "Diseño de base de datos.",
            "projects.repx.r3": "Implementación del panel administrativo.",
            "projects.repx.r4": "Integración de métricas y gráficos.",
            "projects.repx.i1": "Proyecto completo con arquitectura real de e-commerce.",

            "projects.flight.tag": "Hackathon ONE · IA · API",
            "projects.flight.desc": "Sistema de predicción de vuelos desarrollado durante el hackathon ONE, integrando modelos de predicción y API backend.",
            "projects.flight.f1": "Predicción de tiempos de vuelo.",
            "projects.flight.f2": "API para consultas.",
            "projects.flight.f3": "Integración con modelo en Python.",
            "projects.flight.stackModel": "Modelo de predicción",
            "projects.flight.r1": "Desarrollo de la API.",
            "projects.flight.r2": "Integración con el modelo.",
            "projects.flight.r3": "Trabajo en equipo durante hackathon.",
            "projects.flight.i1": "Proyecto finalista en hackathon ONE.",

            "skills.title": "Habilidades técnicas",
            "skills.subtitle": "Stack y herramientas",
            "skills.languages": "Lenguajes",
            "skills.frontend": "Frontend",
            "skills.backend": "Backend",
            "skills.databases": "Bases de datos",
            "skills.tools": "Herramientas",

            "ach.title": "Certificaciones y logros",
            "ach.subtitle": "Formación y resultados",
            "ach.certs": "Certificaciones",
            "ach.awards": "Logros",
            "ach.award1": "Hackathon NoCountry – Finalista",
            "ach.award2": "Hackathon ONE – Finalista (Flight Predictor)",

            "edu.title": "Educación",
            "edu.subtitle": "Trayectoria académica",
            "edu.degree": "Ingeniería en Sistemas Computacionales",
            "edu.school": "Instituto Tecnológico de Zacatecas",
            "edu.grad": "Graduación estimada: Noviembre 2026",
            "edu.gpa": "Promedio: 85.0",

            "cta.title": "¿Colaboramos?",
            "cta.subtitle": "Estoy disponible para prácticas profesionales o proyectos de desarrollo.<br />Si te interesa colaborar, contáctame.",
            "cta.cvEs": "Descargar CV (ES)",
            "cta.cvEn": "Download CV (EN)",
            "cta.contact": "Contactar",

            "contact.title": "Contacto",
            "contact.subtitle": "Rápido y directo",
            "contact.linksTitle": "Enlaces",
            "contact.emailLabel": "Email:",
            "contact.githubLabel": "GitHub:",
            "contact.linkedinLabel": "LinkedIn:",
            "contact.profile": "Perfil",
            "contact.formTitle": "Escríbeme",
            "contact.name": "Nombre",
            "contact.email": "Correo",
            "contact.message": "Mensaje",
            "contact.send": "Enviar",
            "contact.hint": "Esto abrirá tu cliente de correo no envia datos desde aqui.",
            "contact.namePh": "Tu nombre",
            "contact.emailPh": "tu-correo@ejemplo.com",
            "contact.messagePh": "Cuéntame sobre la oportunidad o proyecto…"
        },

        en: {
            skipToContent: "Skip to content",
            openMenu: "Open menu",
            "nav.about": "About",
            "nav.projects": "Projects",
            "nav.skills": "Skills",
            "nav.achievements": "Achievements",
            "nav.education": "Education",
            "nav.contact": "Contact",

            "hero.kicker": "Systems Engineering · Fullstack · AI · LowCode",
            "hero.role": "<strong>Systems Engineer</strong> | Fullstack Developer | AI | LowCode Tools",
            "hero.subtitle": "“I build web solutions and automations focused on productivity and business value.”",
            "hero.ctaProjects": "View projects",
            "hero.cvEs": "Download CV (ES)",
            "hero.cvEn": "Download CV (EN)",
            "hero.ctaContact": "Contact",
            "hero.location": "Zacatecas, MX",
            "hero.availability": "Open to internships",
            "hero.mainStack": "React · Node · TS",

            "summary.title": "Quick summary",
            "summary.item1": "Fullstack with a focus on architecture, quality, and delivery.",
            "summary.item2": "Automation (n8n) + APIs + databases.",
            "summary.item3": "ONE hackathon finalist.",

            "about.title": "About",
            "about.subtitle": "Professional summary",
            "about.body":
                'Systems Engineering student focused on fullstack and AI, with experience building real solutions like <strong>ClinicFlow</strong> (WhatsApp flow automation and appointment management) and web applications using <strong>React</strong>, <strong>Node.js/Express</strong>, <strong>TypeScript</strong>, and databases (<strong>MongoDB/PostgreSQL/SQLite</strong>). ONE hackathon finalist, with a strong focus on architecture, quality, and delivery. Seeking a professional internship to contribute to software development and help scale products.',

            "projects.title": "Featured projects",
            "projects.subtitle": "Selected work with real impact and stack",
            "projects.features": "Features",
            "projects.stack": "Stack",
            "projects.role": "Role",
            "projects.impact": "Impact",
            "projects.askDemo": "Request demo",
            "projects.techDetails": "Technical details",
            "projects.requestRepo": "Request repository",
            "projects.seeApproach": "See approach",
            "projects.seeAchievement": "See achievement",
            "projects.askDetails": "Ask for details",

            "projects.clinicflow.tag": "WhatsApp automation · Appointments · SaaS",
            "projects.clinicflow.desc": "WhatsApp-based medical appointment automation system for dental clinics.",
            "projects.clinicflow.f1": "Automatic appointment scheduling.",
            "projects.clinicflow.f2": "Patient management.",
            "projects.clinicflow.f3": "Google Calendar integration.",
            "projects.clinicflow.f4": "Automated replies.",
            "projects.clinicflow.r1": "End-to-end system architecture.",
            "projects.clinicflow.r2": "Multi-tenant database design.",
            "projects.clinicflow.r3": "Flow automation.",
            "projects.clinicflow.r4": "API integrations.",
            "projects.clinicflow.i1": "Deployed with real clinics.",
            "projects.clinicflow.i2": "SaaS project in validation stage.",

            "projects.repx.tag": "Fullstack web platform · E-commerce",
            "projects.repx.desc": "E-commerce web platform built with MERN architecture.",
            "projects.repx.f1": "User registration.",
            "projects.repx.f2": "Shopping cart.",
            "projects.repx.f3": "Admin dashboard.",
            "projects.repx.f4": "Product and order management.",
            "projects.repx.r1": "Fullstack development.",
            "projects.repx.r2": "Database design.",
            "projects.repx.r3": "Admin panel implementation.",
            "projects.repx.r4": "Metrics and charts integration.",
            "projects.repx.i1": "Complete project with a realistic e-commerce architecture.",

            "projects.flight.tag": "ONE hackathon · AI · API",
            "projects.flight.desc": "Flight prediction system built during the ONE hackathon, integrating predictive models and a backend API.",
            "projects.flight.f1": "Flight time prediction.",
            "projects.flight.f2": "Query API.",
            "projects.flight.f3": "Python model integration.",
            "projects.flight.stackModel": "Prediction model",
            "projects.flight.r1": "API development.",
            "projects.flight.r2": "Model integration.",
            "projects.flight.r3": "Teamwork under hackathon pressure.",
            "projects.flight.i1": "ONE hackathon finalist project.",

            "skills.title": "Technical skills",
            "skills.subtitle": "Stack and tools",
            "skills.languages": "Languages",
            "skills.frontend": "Frontend",
            "skills.backend": "Backend",
            "skills.databases": "Databases",
            "skills.tools": "Tools",

            "ach.title": "Certifications & achievements",
            "ach.subtitle": "Training and outcomes",
            "ach.certs": "Certifications",
            "ach.awards": "Achievements",
            "ach.award1": "NoCountry Hackathon – Finalist",
            "ach.award2": "ONE Hackathon – Finalist (Flight Predictor)",

            "edu.title": "Education",
            "edu.subtitle": "Academic background",
            "edu.degree": "B.S. in Computer Systems Engineering",
            "edu.school": "Instituto Tecnológico de Zacatecas",
            "edu.grad": "Expected graduation: November 2026",
            "edu.gpa": "GPA: 85.0",

            "cta.title": "Let’s collaborate",
            "cta.subtitle": "I’m available for internships or development projects.<br />If you’d like to collaborate, contact me.",
            "cta.cvEs": "Download CV (ES)",
            "cta.cvEn": "Download CV (EN)",
            "cta.contact": "Contact",

            "contact.title": "Contact",
            "contact.subtitle": "Fast and straightforward",
            "contact.linksTitle": "Links",
            "contact.emailLabel": "Email:",
            "contact.githubLabel": "GitHub:",
            "contact.linkedinLabel": "LinkedIn:",
            "contact.profile": "Profile",
            "contact.formTitle": "Message me",
            "contact.name": "Name",
            "contact.email": "Email",
            "contact.message": "Message",
            "contact.send": "Send",
            "contact.hint": "This will open your email client. No data is sent from this page.",
            "contact.namePh": "Your name",
            "contact.emailPh": "your-email@example.com",
            "contact.messagePh": "Tell me about the opportunity or project…"
        }
    };

    const STORAGE_KEY = "preferredLang";

    function applyI18n(lang) {
        const dict = I18N[lang] || I18N.es;

        document.documentElement.lang = lang;

        const nodes = document.querySelectorAll("[data-i18n]");
        nodes.forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (!key) return;

            const value = dict[key];
            if (typeof value !== "string") return;

            el.innerHTML = value;
        });

        const phNodes = document.querySelectorAll("[data-i18n-placeholder]");
        phNodes.forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (!key) return;

            const value = dict[key];
            if (typeof value !== "string") return;

            if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                el.placeholder = value;
            }
        });

        const langBtn = document.getElementById("langToggle");
        if (langBtn) {
            langBtn.textContent = lang === "es" ? "ES / EN" : "EN / ES";
            langBtn.setAttribute("aria-label", lang === "es" ? "Cambiar a inglés" : "Switch to Spanish");
        }
    }

    function getInitialLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "es" || saved === "en") return saved;

        const navLang = (navigator.language || "").toLowerCase();
        if (navLang.startsWith("es")) return "es";
        return "en";
    }

    const initialLang = getInitialLang();
    applyI18n(initialLang);

    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
        langToggle.addEventListener("click", () => {
            const current = document.documentElement.lang === "en" ? "en" : "es";
            const next = current === "es" ? "en" : "es";
            localStorage.setItem(STORAGE_KEY, next);
            applyI18n(next);
        });
    }

    // Contact form -> opens mail client (mailto)
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const data = new FormData(form);
            const name = String(data.get("name") || "").trim();
            const email = String(data.get("email") || "").trim();
            const message = String(data.get("message") || "").trim();

            const lang = document.documentElement.lang === "en" ? "en" : "es";
            const subjectText = lang === "en" ? `CV Contact — ${name}` : `Contacto CV — ${name}`;

            const bodyText =
                lang === "en"
                    ? `Hi Cristian,\n\n${message}\n\n---\nName: ${name}\nEmail: ${email}\n`
                    : `Hola Cristian,\n\n${message}\n\n---\nNombre: ${name}\nCorreo: ${email}\n`;

            const subject = encodeURIComponent(subjectText);
            const body = encodeURIComponent(bodyText);

            const to = "ramirezsath@gmail.com";
            window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        });
    }
})();