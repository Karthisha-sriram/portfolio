import { ProjectItem, SkillCategory, RoadmapCard, CertificateItem, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Sriram Karthisha',
  initials: 'SK',
  title: 'Software Engineer | AI/ML Specialist',
  subtitle: 'B.Tech CSE – AI/ML graduate',
  email: 'sriramkarthisha@gmail.com',
  github: 'https://github.com/Karthisha-sriram',
  linkedin: 'https://www.linkedin.com/in/sriram-karthisha-705859297',
  profileImage: 'assets/photo.png',
  resumeFile: 'assets/resume.pdf',
  roles: [
    'Software Developer',
    'Backend Developer',
    'Full Stack Developer'
  ]
};

export const ABOUT_CHIPS = [
  'Java',
  'Python',
  'SQL',
  'OOP & DSA',
  'REST APIs',
  'Full-Stack Development'
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'AI Intern',
    organization: 'Infosys Springboard',
    dates: 'Dec 2025 – Jan 2026',
    bullets: [
      'Built a Personalized Learning Chatbot, integrating a Rasa-based conversational backend with a Streamlit frontend to deliver interactive, personalized learning sessions.',
      'Implemented and tested REST API integrations between backend and frontend, performing functional testing and debugging to ensure reliable chatbot responses.'
    ],
    tags: ['Python', 'Rasa', 'Streamlit', 'REST APIs', 'Testing']
  }
];

export const ROADMAP_CARDS: RoadmapCard[] = [
  {
    rootId: '01',
    title: 'Frontend Development',
    description: 'Building responsive, accessible interfaces with HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    rootId: '02',
    title: 'Backend Development',
    description: 'Designing REST APIs and backend logic with Python, Java, and FastAPI.',
    tags: ['Python', 'Java', 'FastAPI']
  },
  {
    rootId: '03',
    title: 'AI & Machine Learning',
    description: 'Applying computer vision and applied ML techniques with TensorFlow, Keras, and OpenCV.',
    tags: ['TensorFlow', 'Keras', 'OpenCV']
  },
  {
    rootId: '04',
    title: 'Software Engineering Practices',
    description: 'Writing testable, maintainable code with OOP principles, Git workflows, and Agile practices.',
    tags: ['OOP', 'Git', 'Agile']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'SQL']
  },
  {
    title: 'Software Development',
    skills: ['OOP', 'Data Structures & Algorithms', 'REST APIs', 'Software Testing', 'Debugging', 'Git']
  },
  {
    title: 'Web & Backend',
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'FastAPI', 'Streamlit', 'MySQL']
  },
  {
    title: 'Cloud & Practices',
    skills: ['AWS Fundamentals', 'Docker', 'Google Cloud Run', 'CI/CD Concepts', 'Agile', 'Microservices Concepts']
  },
  {
    title: 'CS Fundamentals',
    skills: ['Operating Systems', 'DBMS', 'Computer Networks']
  },
  {
    title: 'AI / ML Tools',
    skills: [
      'TensorFlow',
      'Keras',
      'OpenCV',
      'Rasa',
      'Machine Learning',
      'Computer Vision',
      'Google Gemini',
      'RAG',
      'AI Agents',
      'Tool Calling',
      'Prompt Engineering',
      'Agent Evaluation'
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'next-gen-surveillance',
    title: 'Next-Gen Surveillance: Intelligent Detection System',
    description:
      'Built a real-time, AI-powered surveillance system in JavaScript using the Human computer-vision library — detecting faces, emotions, hands, iris, and pose across five modalities, and validated across three input formats (image, video, and live webcam feed) to reduce performance bottlenecks. Built with a 3-member team using Git and GitHub for version control.',
    tags: ['JavaScript', 'Computer Vision', 'Human.js', 'Git'],
    liveDemoUrl:
      'https://karthisha-sriram.github.io/The-next-gen-serveillance-enhancing-security-through-intelligent-detection/',
    githubUrl:
      'https://github.com/Karthisha-sriram/The-next-gen-serveillance-enhancing-security-through-intelligent-detection',
    badgeCode: 'HUMAN.JS'
  },
  {
    id: 'agentdesk-ai',
    title: 'AgentDesk AI — RAG Agent',
    description:
      'Built and deployed AgentDesk AI, a full-stack workplace AI agent powered by Google Gemini, Retrieval-Augmented Generation, and tool calling — retrieving information from workplace knowledge-base documents and dynamically invoking specialized tools for document search, real-time weather, and mathematical calculations. Developed a 12-test evaluation suite covering retrieval, tool selection, and task execution (12/12 passed), plus an observability dashboard tracking request success, latency, evaluation accuracy, and tool execution. Deployed on Google Cloud Run with server-side API credential management.',
    tags: [
      'Google Gemini',
      'RAG',
      'AI Agents',
      'Tool Calling',
      'Agent Evaluation',
      'React',
      'TypeScript',
      'Node.js',
      'Google Cloud Run'
    ],
    liveDemoUrl: 'https://agentdesk-ai-565787934889.asia-southeast1.run.app',
    githubUrl: 'https://github.com/Karthisha-sriram/agentdesk-ai-rag-agent',
    badgeCode: 'RAG AGENT'
  },
  {
    id: 'hyperweather-ai',
    title: 'HyperWeatherAI — FastAPI Weather & Risk Prediction',
    description:
      'Extended a full-stack weather forecasting app into a FastAPI-based service exposing weather and forecast data through RESTful JSON endpoints, integrating the OpenWeather API and a rule-based risk-detection layer for wildfire, heatwave, and heavy rain/flood conditions — documented and tested through Swagger UI and Postman, with a Streamlit dashboard for visualization.',
    tags: ['Python', 'FastAPI', 'Streamlit', 'REST APIs', 'OpenWeather API'],
    githubUrl: 'https://github.com/Karthisha-sriram/hyper-weather-ai-fastapi',
    badgeCode: 'FASTAPI'
  },
  {
    id: 'covid-mask-detection',
    title: 'COVID-19 Face Mask Detection',
    description:
      'Designed, trained, and evaluated a CNN model to classify images into Mask and No Mask categories, applying a full data pipeline of ingestion, cleaning, and preprocessing — then analyzed misclassifications and tuned parameters to improve accuracy and real-time inference reliability.',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    githubUrl: 'https://github.com/Karthisha-sriram/covid-19-face-mask-detection',
    badgeCode: 'CNN MODEL'
  }
];

export const EDUCATION_DATA = {
  institution: 'Malla Reddy Engineering College for Women',
  degree: 'B.Tech in Computer Science and Engineering (AI/ML)',
  period: '2022 – 2026',
  cgpa: '9.23'
};

export const CERTIFICATIONS_DATA: CertificateItem[] = [
  {
    id: 'cisco-c',
    title: 'CLA: Programming Essentials in C',
    issuer: 'C++ Institute',
    image: 'assets/certificate-cisco-c.jpeg'
  },
  {
    id: 'cisco-python-2',
    title: 'Python Essentials 2',
    issuer: 'Cisco Networking Academy',
    image: 'assets/certificate-cisco-python-essentials-2.jpeg'
  },
  {
    id: 'ccna-intro',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    image: 'assets/certificate-ccna-intro-networks.jpeg'
  },
  {
    id: 'ccna-switching',
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    image: 'assets/certificate-ccna-switching-routing-wireless.jpeg'
  },
  {
    id: 'oracle-associate',
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle University',
    image: 'assets/certificate-oracle.jpeg'
  },
  {
    id: 'cambridge-c1',
    title: 'Cambridge English Empower Level C1',
    issuer: 'Cambridge',
    image: 'assets/certificate-cambridge.jpeg'
  }
];
