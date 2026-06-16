const portfolioData = {
    hero: {
        name: "Hariharan",
        roles: ["Full Stack Developer", "React Developer", "Python Developer", "Django Developer", "Node.js Developer"],
        subtitle: "Building modern, responsive, and scalable web applications.",
        profileImage: "static/image/pos2.jpg"
    },
    about: {
        aboutImage: "static/image/p2.jpg",
        summary: "I am a passionate Full Stack Developer focused on building robust, scalable, and responsive web applications. With a strong foundation in both frontend and backend technologies, I enjoy turning complex problems into simple, beautiful, and intuitive designs.",
        education: "Completed secondary and higher secondary education with a strong inclination towards computer science and software development.",
        careerObjective: "To leverage my full-stack development skills in a dynamic environment, contributing to innovative projects while continuously growing as a software engineer.",
        details: [
            { label: "Name", value: "Hariharan A" },
            { label: "Date of Birth", value: "March 16, 2005" },
            { label: "Location", value: "Bangalore, India" },
            { label: "Email", value: "haran4889@gmail.com" },
            { label: "Phone", value: "+91 9500311001" }
        ]
    },
    skills: {
        frontend: [
            { name: "HTML5", iconClass: "fa-brands fa-html5" },
            { name: "CSS3", iconClass: "fa-brands fa-css3-alt" },
            { name: "JavaScript", iconClass: "fa-brands fa-js" },
            { name: "Bootstrap", iconClass: "fa-brands fa-bootstrap" },
            { name: "React.js", iconClass: "fa-brands fa-react" }
        ],
        backend: [
            { name: "Node.js", iconClass: "fa-brands fa-node" },
            { name: "Express.js", iconClass: "fa-brands fa-node-js" },
            { name: "Python", iconClass: "fa-brands fa-python" },
            { name: "Django", iconClass: "fa-brands fa-python" }
        ],
        database: [
            { name: "MySQL", iconClass: "fa-solid fa-database" },
            { name: "SQL", iconClass: "fa-solid fa-server" },
            { name: "MongoDB", iconClass: "fa-solid fa-leaf" }
        ]
    },
    experience: [
        {
            company: "Draptor Technologies",
            role: "Full Stack Developer Intern",
            duration: "3 Months Internship",
            description: [
                "Worked on full stack web application development using React.js, Node.js, Express.js, Django, Python, MySQL, and MongoDB.",
                "Developed responsive user interfaces using HTML5, CSS3, Bootstrap, and JavaScript.",
                "Built RESTful APIs and integrated frontend with backend services.",
                "Worked with relational and NoSQL databases.",
                "Participated in debugging, testing, deployment, and code reviews.",
                "Collaborated with team members using Git and Agile methodologies."
            ]
        }
    ],
    projects: [
        {
            title: "Badige Mane Website",
            type: "Internship Project",
            website: "https://badigemane.com/",
            description: "Developed and maintained a responsive business website during internship.",
            responsibilities: [
                "Developed responsive UI components.",
                "Implemented frontend using HTML, CSS, Bootstrap, JavaScript and React.js.",
                "Integrated backend APIs.",
                "Improved performance and responsiveness.",
                "Fixed bugs and optimized user experience.",
                "Worked with backend services and database."
            ],
            image: "static/image/badi.png",
            liveUrl: "https://badigemane.com/",
            githubUrl: "#"
        },
        {
            title: "E-commerce Website",
            type: "Personal Project",
            description: "An elegant e-commerce website using HTML, CSS, Bootstrap, and JavaScript. Designed for seamless browsing and interactive shopping experience.",
            responsibilities: [],
            image: "static/image/e com 2.jpg",
            liveUrl: "https://hariharan-a-16.github.io/e-commerce/",
            githubUrl: "https://github.com/hariharan-a-16/e-commerce"
        },
        {
            title: "Monsoon Recipie Hub",
            type: "Personal Project",
            description: "Monsoon Recipe Hub is a website that shares tasty seasonal recipes. It is built using HTML, CSS, and JavaScript.",
            responsibilities: [],
            image: "static/image/monsoon receipe.jpg",
            liveUrl: "https://hariharan-a-16.github.io/Recipe/",
            githubUrl: "https://github.com/hariharan-a-16/Recipe"
        },
{
            title: "Whatsapp Ui",
            type: "Personal Project",
            description: "Built a fully responsive WhatsApp-style chat UI using React and JavaScript, featuring sidebar, chat list, message window, and interactive messaging components.",
            responsibilities: [],
            image: "static/image/image.png",
            liveUrl: "https://whatsappui-8i3m.vercel.app/",
            githubUrl: "https://github.com/hariharan-a-16/whatsappui"
        }
    ],
    services: [
        { title: "Frontend Development", description: "Building responsive, interactive, and beautiful user interfaces.", iconClass: "fa-solid fa-code" },
        { title: "Backend Development", description: "Creating robust and scalable server-side logic and APIs.", iconClass: "fa-solid fa-server" },
        { title: "Full Stack Development", description: "End-to-end web application development from UI to database.", iconClass: "fa-solid fa-laptop-code" },
        { title: "REST API Development", description: "Designing secure and efficient RESTful APIs for seamless integration.", iconClass: "fa-solid fa-network-wired" },
        { title: "Database Design", description: "Architecting relational and NoSQL databases for optimal performance.", iconClass: "fa-solid fa-database" },
        { title: "Responsive Website Design", description: "Ensuring websites look perfect on all devices, from mobile to desktop.", iconClass: "fa-solid fa-mobile-screen" }
    ],
    achievements: [
        { title: "Internship Completed", description: "Successfully completed a 3-month full-stack development internship at Draptor Technologies.", iconClass: "fa-solid fa-award" },
        { title: "Multiple Projects Completed", description: "Developed and deployed multiple personal and commercial projects.", iconClass: "fa-solid fa-check-circle" },
        { title: "Responsive Web Development", description: "Mastered the art of building mobile-first responsive layouts.", iconClass: "fa-solid fa-mobile-alt" },
        { title: "Full Stack Development", description: "Gained comprehensive expertise across the entire web stack.", iconClass: "fa-solid fa-layer-group" }
    ],
    contact: {
        formspreeId: "mvglzolg",
        details: [
            { iconClass: "fa-solid fa-phone", label: "Phone", value: "+91 9500311001" },
            { iconClass: "fa-solid fa-envelope", label: "Email", value: "haran4889@gmail.com" },
            { iconClass: "fa-solid fa-location-dot", label: "Location", value: "Bangalore, India" }
        ],
        socials: [
            { iconClass: "fa-brands fa-github", url: "https://github.com/hariharan-a-16" },
            { iconClass: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/hariharan-a" }
        ]
    },
    footer: {
        name: "Hariharan",
        quickLinks: [
            { label: "Home", url: "#home" },
            { label: "About", url: "#about" },
            { label: "Skills", url: "#skills" },
            { label: "Experience", url: "#experience" },
            { label: "Projects", url: "#projects" },
            { label: "Contact", url: "#contact" }
        ]
    }
};

window.portfolioData = portfolioData;
