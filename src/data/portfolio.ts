export const profile = {
  name: "Allada Akshaya",
  title: "Backend Developer | Full Stack Developer | AI & ML Engineer",
  tagline: "Building Future with Code",
  status: "2027 B.Tech CSE (AI & ML) Fresher",
  description:
    "I build scalable backend systems, intelligent applications, and modern digital experiences by combining software development with AI and machine learning.",
  about:
    "I'm Allada Akshaya, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning, with a strong focus on backend and full-stack development. I enjoy building practical, scalable applications and intelligent solutions using modern technologies. I'm continuously learning, improving my problem-solving skills, and preparing to contribute to real-world software projects.",
  careerGoal:
    "As a fresher, I'm seeking opportunities as a Full Stack Developer / Backend Developer where I can contribute to real-world software solutions, continuously learn new technologies, and grow into a strong industry-ready engineer.",
  email: "akshayaallada60@gmail.com",
  phone: "+91 9391292177",
  linkedin: "https://www.linkedin.com/in/akshaya-allada-2693a02b7",
  github: "https://github.com/Akshaya-0613",
  /** Replace public/resume.pdf to update the resume — no code changes needed. */
  resumePath: "/resume.pdf",
  resumeDownloadName: "Allada_Akshaya_Resume.pdf",
};

export const typingRoles = [
  "Backend Developer",
  "Full Stack Developer",
  "Java Developer",
  "Python Developer",
  "AI & ML Enthusiast",
  "Problem Solver",
];

export const recruiterHighlights = [
  "Strong backend development focus",
  "Java & Python",
  "REST APIs",
  "SQL / Databases",
  "AI & Machine Learning",
  "Real-world academic projects",
  "Fast learner",
  "Open to opportunities",
];

export const profileStats = [
  "Fresher",
  "B.Tech – CSE (AI & ML)",
  "Graduation: 2027",
  "CGPA: 8.01",
  "Backend Development Focus",
  "Fast Learner",
  "Team Player",
];

export const learning = [
  { title: "Agentic AI", icon: "Bot", note: "Autonomous agents & tool-using systems" },
  { title: "Large Language Models (LLMs)", icon: "BrainCircuit", note: "Prompting, embeddings, applied NLP" },
  { title: "Backend Development", icon: "Server", note: "Spring Boot, REST APIs, system design" },
  { title: "Cloud Computing", icon: "CloudCog", note: "Deployment, services & scalability" },
  { title: "Modern Full Stack Development", icon: "Layers", note: "React, APIs and databases end to end" },
];

export const skillGroups = [
  { title: "Programming Languages", icon: "Code2", items: ["C", "Java", "Python", "SQL"] },
  { title: "Frontend", icon: "MonitorSmartphone", items: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend", icon: "Server", items: ["Java", "Spring Boot", "Python", "Flask", "REST APIs"] },
  { title: "Database", icon: "Database", items: ["MySQL", "MongoDB", "SQL"] },
  { title: "AI / Machine Learning", icon: "BrainCircuit", items: ["Machine Learning", "Scikit-learn", "Pandas", "NumPy", "TF-IDF", "LightGBM", "SHAP"] },
  { title: "Tools & Technologies", icon: "Wrench", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman"] },
  { title: "Core Skills", icon: "Sparkles", items: ["Object-Oriented Programming", "Problem Solving", "REST API Development", "Responsive Design", "Backend Development", "Database Management"] },
];

export const projects = [
  {
    title: "Fake Job Posting Detection",
    description:
      "A machine-learning based application that analyzes job posting content and predicts whether a job advertisement is genuine or potentially fraudulent. The system uses text processing and machine learning to provide a prediction with confidence information.",
    stack: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "TF-IDF", "Flask"],
    github: "https://github.com/Akshaya-0613/fake-job-posting-detection",
    demo: "https://fake-job-posting-detection-brxq.onrender.com",
  },
  {
    title: "Resume Analyzer",
    description:
      "A web-based resume analysis application designed to analyze resume content and provide useful insights to help users improve their resumes.",
    stack: ["Java", "Spring Boot", "Apache PDFBox", "Thymeleaf", "Bootstrap"],
    github: null,
    demo: "https://resume-analyzer-production-b70e.up.railway.app",
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    institution: "Dadi Institute of Engineering and Technology",
    affiliation: "JNTUGV Affiliated",
    period: "Graduation: 2027",
    detail: "CGPA: 8.01",
  },
];

export const internship = {
  title: "Agentic AI Programme",
  org: "DATAPRO",
  description:
    "AI-focused internship programme centred on agentic AI concepts and applied artificial intelligence workflows.",
};

/**
 * Certificate title -> PDF path in /public/certificates.
 * Set `pdf: null` when the PDF has not been uploaded yet.
 */
export const certificates: { title: string; issuer?: string; pdf: string | null }[] = [
  { title: "AWS Cloud Computing", issuer: "AWS", pdf: null },
  { title: "Celonis Process Mining Virtual Internship", issuer: "Celonis", pdf: "/certificates/celonis-process-mining.pdf" },
  { title: "Google AI/ML", issuer: "Google", pdf: "/certificates/google-ai-ml.pdf" },
  { title: "Android Studio", issuer: "Google / Android", pdf: "/certificates/android-studio.pdf" },
  { title: "Forage Data Analyst", issuer: "Forage", pdf: null },
  { title: "Quantum Computing", pdf: null },
  { title: "Java Full Stack Developer", pdf: null },
  { title: "Programming Fundamentals Using Python – 1", pdf: null },
  { title: "Programming Fundamentals Using Python – 2", pdf: "/certificates/python-fundamentals-2.pdf" },
  { title: "Design Thinking", pdf: "/certificates/design-thinking.pdf" },
  { title: "Data Structures and Algorithm with C", pdf: null },
  { title: "AWS Generative AI", issuer: "AWS", pdf: "/certificates/aws-generative-ai.pdf" },
];

export const achievements: {
  title: string;
  category: "ACHIEVEMENT" | "RESEARCH";
  icon: string;
  description: string;
  pdf: string | null;
  pdfLabel?: string;
}[] = [
  {
    title: "Celonis Business Analytics Tech Camp",
    category: "ACHIEVEMENT",
    icon: "Trophy",
    description:
      "Participated in the Celonis Business Analytics Tech Camp and gained practical exposure to business process analysis and process mining concepts. The experience helped me understand how data-driven insights can be used to analyze and improve business processes.",
    pdf: "/achievements/celonis-business-analytics-tech-camp.pdf",
    pdfLabel: "View Certificate PDF",
  },
  {
    title: "ABHA Card Registration Initiative",
    category: "ACHIEVEMENT",
    icon: "HeartHandshake",
    description:
      "Contributed to an ABHA Card registration initiative and successfully assisted in registering more than 100 people. This experience strengthened my communication, coordination, and ability to work directly with people while contributing to a meaningful digital healthcare initiative.",
    pdf: null,
  },
  {
    title: "Research Paper — Mobile Malware Fraud Detection",
    category: "RESEARCH",
    icon: "FlaskConical",
    description:
      "Worked on a research paper focused on Mobile Malware Fraud Detection, exploring approaches for identifying and detecting malicious or fraudulent mobile applications using machine learning and related techniques. The research reflects my interest in applying AI and machine learning to real-world cybersecurity challenges.",
    pdf: "/research/mobile-malware-fraud-detection.pdf",
    pdfLabel: "View Research Paper PDF",
  },
];

export const careerHighlights = [
  "Open to Opportunities",
  "Backend Development",
  "Full Stack Development",
  "AI & ML",
  "Continuous Learning",
  "Team Collaboration",
];

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Achievements", id: "achievements" },
  { label: "Career Goals", id: "career" },
  { label: "Contact", id: "contact" },
];
