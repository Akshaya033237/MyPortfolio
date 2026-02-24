
// Profile Data Type Definitions
export type SocialLink = {
  platform: string;
  url: string;
  icon: string; // Icon name from lucide-react
};

export type Skill = {
  name: string;
  level: number; // 1-5
  category: "programming" | "core" | "database" | "tools";
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  duration?: string;
  description: string;
  highlights: string[];
  tags?: string[];
  logo?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  inDevelopment?: boolean;
  keyFeatures?: string[];
};

export type Education = {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  gpa?: string;
  percentage?: string;
  description?: string;
  logo?: string;
  icon?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  pdfFile: string;
};

export type ExtraActivity = {
  title: string;
  organization: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
};

// Main Profile Data
export interface ProfileData {
  basics: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    phone?: string;
    website?: string;
    availableForHire: boolean;
    avatar?: string;
  };
  socialLinks: SocialLink[];
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  extraActivities: ExtraActivity[];
  resumeUrl?: string;
}

// Default Profile Data (Example)
const profileData: ProfileData = {
  basics: {
    name: "Akshaya Gonala Tallam",
    title: "CSE Undergraduate | 3rd Year",
    summary: "Pursuing B.Tech in Computer Science with a strong academic record and a focused interest in programming, problem-solving, and emerging technologies.",
    location: "San Francisco, CA",
    email: "2300033237cseh@gmail.com",
    phone: "+99999999999",
    website: "https://alexmorgan.dev",
    availableForHire: true,
    avatar: "/placeholder.svg",
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Akshaya033237",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/akshaya-gonala-tallam/",
      icon: "linkedin"
    },
    {
      platform: "Email",
      url: "mailto:2300033237cseh@gmail.com",
      icon: "mail"
    },
    {
      platform: "CodeChef",
      url: "https://www.codechef.com/users/akshaya_33237",
      icon: "code"
    }
  ],
  skills: [
    { name: "C", level: 5, category: "programming" },
    { name: "C++", level: 5, category: "programming" },
    { name: "Java", level: 5, category: "programming" },
    { name: "JavaScript", level: 4, category: "programming" },
    { name: "HTML", level: 5, category: "programming" },
    { name: "CSS", level: 5, category: "programming" },
    { name: "Data Structures", level: 5, category: "core" },
    { name: "Algorithms", level: 4, category: "core" },
    { name: "Operating Systems", level: 4, category: "core" },
    { name: "DBMS", level: 4, category: "core" },
    { name: "SQL", level: 5, category: "database" },
    { name: "PostgreSQL", level: 4, category: "database" },
    { name: "Git", level: 4, category: "tools" },
    { name: "GitHub", level: 5, category: "tools" },
    { name: "VS Code", level: 5, category: "tools" },
    { name: "Eclipse", level: 4, category: "tools" }
  ],
  experiences: [
    {
      title: "Coding Mentor",
      company: "ZeroOne Code Club",
      location: "",
      startDate: "2023-01",
      endDate: "Present",
      duration: "2023 - Present",
      description: "Mentored students to strengthen programming and problem-solving skills.",
      highlights: [
        "Conducted coding sessions and peer-to-peer workshops",
        "Mentored 50+ students to strengthen programming and problem-solving skills",
        "Developed leadership and collaborative mentoring experience"
      ],
      tags: ["Mentorship", "Programming", "Leadership"],
      logo: ""
    },
    {
      title: "Student Contributor",
      company: "Vyuha Project & Innovation Hub",
      location: "",
      startDate: "2023-01", // Placeholder date 
      endDate: "Present",
      description: "Collaborated with peers and faculty mentors on innovative technical projects.",
      highlights: [
        "Collaborated with peers and faculty mentors on innovative technical projects",
        "Contributed to solution design aligned with real-world needs",
        "Participated in technical discussions and project execution"
      ],
      tags: ["Innovation", "Teamwork", "Technical Collaboration"],
      logo: ""
    },
    {
      title: "Volunteer",
      company: "Samyak College Fest",
      location: "",
      startDate: "2023-01", // Placeholder date
      endDate: "2023-01",
      description: "Assisted in event operations and coordination.",
      highlights: [
        "Assisted in event operations and coordination",
        "Worked with student teams for smooth execution",
        "Enhanced communication and organizational skills"
      ],
      tags: ["Event Management", "Coordination", "Communication"],
      logo: ""
    }
  ],
  projects: [
    {
      title: "CodeWise – Smart Learning & Practice Platform",
      description: "An intelligent coding practice and technical assessment platform designed to help students strengthen problem-solving skills and prepare for interviews and competitive exams.",
      tags: ["Java", "SQL", "Web Development", "System Design"],
      featured: true,
      inDevelopment: true,
      keyFeatures: [
        "Structured language-wise coding practice modules",
        "Role-based access (Admin / Student)",
        "Timed mock exams with automated evaluation",
        "Real-time code execution environment",
        "Tab-switch detection and secure exam controls",
        "Smart progress tracking dashboard",
        "Admin panel for question and content management"
      ]
    },
    {
      title: "Temperature & Humidity Monitoring System",
      description: "An IoT-based environmental monitoring system that captures and analyzes real-time temperature and humidity data using Arduino and DHT11 sensor.",
      tags: ["Arduino", "IoT", "Embedded Systems", "Hardware Integration"],
      featured: true,
      keyFeatures: [
        "Real-time sensor data collection",
        "Arduino and DHT11 integration",
        "Threshold-based alert mechanism",
        "Efficient data processing and display",
        "Practical IoT implementation"
      ]
    }
  ],
  education: [
    {
      institution: "KL University",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      location: "Vijayawada, India",
      duration: "July 2023 – Aug 2027",
      gpa: "9.25",
      description: "Currently pursuing B.Tech in Computer Science with a strong academic record and focus on building solid technical foundations in programming and problem-solving.",
      logo: "/kl-logo.png"
    },
    {
      institution: "Sri Gayathri Junior College",
      degree: "Intermediate Education",
      field: "MPC Stream",
      location: "Hyderabad, Telangana",
      percentage: "91%",
      description: "Completed Intermediate education with a strong foundation in Mathematics, Physics, and Chemistry, developing analytical and logical reasoning skills.",
      icon: "graduation-cap"
    }
  ],
  certifications: [
    {
      title: "Salesforce AI Associate",
      issuer: "Salesforce",
      pdfFile: "SalesForce Certificate.pdf"
    },
    {
      title: "Investment Banking Virtual Experience",
      issuer: "JPMorgan Chase (Forage)",
      pdfFile: "Investment Banking Virtual Experience.pdf"
    },
    {
      title: "AICTE–Google AIML Certificate",
      issuer: "EduSkills",
      pdfFile: "AICTE technical internship Certificate.pdf"
    },
    {
      title: "Oracle Cloud Infrastructure (OCI) Foundations Associate",
      issuer: "Oracle",
      pdfFile: "Oracle Architect Associate Certificate.pdf"
    },
    {
      title: "Aviatrix Multi-Cloud Network Associate (MCNA)",
      issuer: "Aviatrix",
      pdfFile: "Aviatrix MultiCloudNetwork certificate.pdf"
    }
  ],
  extraActivities: [
    {
      title: "Mentor",
      organization: "Code for Good",
      startDate: "2019-06",
      endDate: "Present",
      description: "Mentoring underrepresented groups in tech, providing career guidance and technical advice."
    },
    {
      title: "Volunteer Developer",
      organization: "Non-Profit Technology Alliance",
      startDate: "2018-03",
      endDate: "2020-12",
      description: "Developed websites for local non-profits, helping them establish an online presence."
    }
  ],
  resumeUrl: "/Akshaya_Gonala_Tallam_Resume.pdf"
};

export default profileData;
