
import { Project, Skill, Experience } from './types';

export const SKILLS: Skill[] = [
  { name: 'Manual Testing', icon: '📋' },
  { name: 'API Testing', icon: '📡' },
  { name: 'Automation Testing', icon: '⚡' },
  { name: 'Performance Testing', icon: '🚀' },
  { name: 'Mobile Testing', icon: '📱' },
  { name: 'Agile Methodology', icon: '🔄' },
  { name: 'SQL & Database', icon: '🗄️' },
  { name: 'Test Case Design', icon: '✍️' },
];

export const SKILLS_DESCRIPTIONS: Record<string, string> = {
  'Manual Testing': 'Expert in SDLC/STLC, crafting test plans/cases from use cases.',
  'API Testing': 'Postman validation to verify endpoints, integrations, and data flows.',
  'Automation Testing': 'Built Selenium WebDriver suites and pioneered Playwright frameworks.',
  'Performance Testing': 'Stress and Load testing using JMeter for high-volume loads.',
  'Mobile Testing': 'Specializing in Android/iOS functionality and cross-platform compatibility.',
  'Agile Methodology': 'Scrum framework leadership and sprint-based quality assurance.',
  'SQL & Database': 'Robust database testing for data integrity and validation.',
  'Test Case Design': 'Enhanced 100+ detailed test cases for structured procedures.',
};

export const TOOLS = [
  { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira/0052CC', category: 'Project Management' },
  { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37', category: 'API Testing' },
  { name: 'Selenium', icon: 'https://cdn.simpleicons.org/selenium/43B02A', category: 'Automation' },
  { name: 'Playwright', icon: 'https://playwright.dev/img/playwright-logo.svg', category: 'Automation' },
  { name: 'JMeter', icon: 'https://cdn.simpleicons.org/apachejmeter/D22128', category: 'Performance' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', category: 'Automation' },
  { name: 'Swagger', icon: 'https://cdn.simpleicons.org/swagger/85EA2D', category: 'API Documentation' },
  { name: 'SQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', category: 'Database' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', category: 'Version Control' },
  { name: 'Chrome DevTools', icon: 'https://cdn.simpleicons.org/googlechrome/4285F4', category: 'Debugging' },
  { name: 'Slack', icon: 'https://cdn.simpleicons.org/slack/4A154B', category: 'Communication' },
  { name: 'Testrail', icon: 'https://cdn.simpleicons.org/testrail/28A745', category: 'Test Management' }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'NESPAK Proprietary Systems',
    description: 'Led QA excellence for proprietary software engineering products, ensuring high-impact delivery for enterprise clients.',
    responsibilities: [
      'Architected comprehensive QA frameworks ensuring 100% feature coverage',
      'Mentored and led QA teams of 5+ implementing Agile practices',
      'Ensured zero major defects in production releases'
    ],
    tools: ['Jira', 'SQL', 'Test Case/Log Sheets'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Selenium Automation Suite',
    description: 'Built scalable Selenium WebDriver suites (Python/Java) automating 50+ UI scenarios to boost operational efficiency.',
    responsibilities: [
      'Automated 50+ UI scenarios for critical business paths',
      'Established robust defect tracking and CI/CD pipelines',
      'Reduced manual efforts by 40% through automation innovation'
    ],
    tools: ['Selenium', 'Python', 'Java', 'Git'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Playwright E2E Integration',
    description: 'Pioneered Playwright and automation suites for mission-critical UI/end-to-end testing for high-volume platforms.',
    responsibilities: [
      'Scaled automation suites for high-volume loads',
      'Partnered with frontend/backend squads to validate new features',
      'Slashed release cycles by 30% through process optimization'
    ],
    tools: ['Playwright', 'Jira', 'Postman'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  }
];

export const SUMMARY_POINTS = [
  'Dedicated SQA Engineer with a track record of leading high-impact software projects.',
  'Expert in full SDLC/STLC, crafting test plans/cases for manual, API, database, and automation.',
  'Specialized in Smoke/Sanity/Regression Testing, UI/UX, and Cross-Browser validation.',
  'Pioneered Playwright and Selenium suites, reducing manual efforts by 40%.',
  'Established robust defect tracking and CI/CD pipelines in JIRA, cutting cycles by 30%.',
  'Mentored and led QA teams of 5+, upholding top-tier quality standards.',
  'Experienced in Mobile Testing (Android/iOS) and Performance/Load testing with JMeter.',
  'Analytical problem-solver, turning requirements into secure, high-performance software.'
];

export const CERTIFICATIONS = [
  { name: 'JMeter: Performance and Load Testing', issuer: 'LinkedIn Learning' },
  { name: 'Oracle Cloud Infrastructure 2023 Certified Foundation Associate', issuer: 'Oracle' },
  { name: 'Test Automation with Python: 1 Introduction to Automated Testing', issuer: 'LinkedIn' },
  { name: 'Postman Essential Training', issuer: 'LinkedIn Learning' }
];

export const EXPERIENCES: (Experience & { keyAchievements: string[], location: string })[] = [
  {
    id: 1,
    company: 'NESPAK (Pvt) Limited',
    role: 'Software Quality Assurance Engineer',
    period: 'May 2024 - Present',
    location: 'Lahore, Pakistan',
    description: 'Leading QA Excellence and Team Success while delivering reliable software solutions for enterprise clients.',
    keyAchievements: [
      'Mentored and led QA teams of 5+, implementing Agile practices',
      'Architected frameworks ensuring 100% feature coverage and zero critical defects',
      'Established robust defect tracking and CI/CD pipelines in JIRA',
      'Pioneered Playwright automation suites, reducing manual effort by 40%'
    ]
  },
  {
    id: 2,
    company: 'Techtiz',
    role: 'Software Quality Assurance Engineer',
    period: 'Oct 2023 - May 2024',
    location: 'Lahore, Pakistan',
    description: 'Driving QA excellence through manual and automation testing for mission-critical platforms.',
    keyAchievements: [
      'Built Selenium WebDriver suites automating 50+ UI scenarios',
      'Executed Postman testing to verify endpoints and data flows',
      'Partnered with backend squads to accelerate time-to-market',
      'Enhanced UI/UX assurance for intuitive design and accessibility'
    ]
  },
  {
    id: 3,
    company: 'Oriental Tech Solutions',
    role: 'Junior SQA Engineer',
    period: 'Apr 2021 - Sep 2023',
    location: 'Lahore, Pakistan',
    description: 'Implemented testing aligned with SDLC/STLC, specializing in mobile and web applications.',
    keyAchievements: [
      'Enhanced 100+ detailed test cases for structured mobile/web procedures',
      'Utilized JIRA for issue tracking and team coordination in Agile',
      'Executed testing across multiple browsers for consistent performance',
      'Collaborated with PMs to align QA goals and accelerate delivery'
    ]
  }
];

export const EDUCATION = {
  institution: 'Lahore College for Women University',
  degree: "Bachelor's in Computer Science",
  period: 'September 2018 - April 2022',
  location: 'Lahore, Pakistan'
};
