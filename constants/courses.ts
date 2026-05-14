export type CourseModule = { module: string; topics: string[] }

export type Course = {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  duration: string
  durationMonths: number
  fee: number
  feeNote?: string
  category: 'computer' | 'design' | 'communication' | 'academic'
  certification: string
  certificationBody: string
  placementGuidance: boolean
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  syllabus: CourseModule[]
  learningOutcomes: string[]
  whoShouldJoin: string[]
  careerBenefits: string[]
  faqs: { question: string; answer: string }[]
  icon: string
  colorClass: string
  featured: boolean
  batchTimings: string[]
}

export const COURSES: Course[] = [
  {
    id: '1',
    slug: 'basic-computer-course',
    name: 'Basic Computer Course',
    shortDescription: 'Start your digital journey with essential computer skills trusted by 1000+ students.',
    description:
      'Our Basic Computer Course is designed for absolute beginners. You will gain complete confidence with computers — from switching on a PC to browsing the internet safely, typing efficiently, managing files, and creating documents. This is the essential foundation for anyone entering the digital world.',
    duration: '3 Months',
    durationMonths: 3,
    fee: 3500,
    feeNote: 'One-time fee. No hidden charges. EMI available on request.',
    category: 'computer',
    certification: 'E-Max Certificate in Basic Computing',
    certificationBody: 'E-Max Certification Board',
    placementGuidance: true,
    level: 'Beginner',
    batchTimings: ['Morning: 8:00 AM – 10:00 AM', 'Afternoon: 12:00 PM – 2:00 PM', 'Evening: 6:00 PM – 8:00 PM'],
    syllabus: [
      { module: 'Module 1: Introduction to Computers', topics: ['What is a Computer?', 'Types of Computers', 'Hardware Components', 'Software Basics', 'Operating Systems Overview', 'Computer Care & Maintenance'] },
      { module: 'Module 2: Windows & File Management', topics: ['Windows Interface', 'Desktop, Taskbar & Start Menu', 'File Explorer', 'Creating Folders & Files', 'Copy, Cut, Paste Operations', 'Recycle Bin Management'] },
      { module: 'Module 3: Typing & Keyboard Skills', topics: ['Touch Typing Fundamentals', 'Speed Building Exercises', 'Hindi Typing Basics', 'Shortcut Keys', 'Numeric Keypad Usage'] },
      { module: 'Module 4: Internet & Email', topics: ['Internet Basics', 'Web Browsing', 'Google Search Skills', 'Email Creation & Management', 'Online Safety & Security', 'Social Media Basics'] },
      { module: 'Module 5: MS Word Basics', topics: ['Creating Documents', 'Text Formatting', 'Tables & Borders', 'Print Preview & Printing', 'Saving & File Formats'] },
    ],
    learningOutcomes: [
      'Use computers confidently for daily tasks',
      'Manage files and folders efficiently',
      'Type at 25+ words per minute',
      'Browse the internet safely',
      'Create basic Word documents',
      'Send and receive professional emails',
    ],
    whoShouldJoin: [
      'Complete beginners with no prior computer knowledge',
      'Homemakers looking to learn digital skills',
      'Job seekers wanting to add computer skills to their resume',
      'Students joining Class 6–10',
      'Senior citizens wanting to go digital',
    ],
    careerBenefits: [
      'Apply for government & private sector jobs requiring basic computer knowledge',
      'Qualify for data entry and back-office roles',
      'Start learning advanced courses confidently',
      'Open a small home-based business online',
    ],
    faqs: [
      { question: 'Do I need any prior knowledge to join?', answer: 'No! This course is designed for absolute beginners. We start from scratch.' },
      { question: 'Is this course E-Max certified?', answer: 'Yes. You will receive an E-Max Certificate upon successful completion, which is recognized by employers.' },
      { question: 'What are the batch timings?', answer: 'We offer morning, afternoon, and evening batches to suit your schedule.' },
      { question: 'Is there a placement guarantee?', answer: 'We provide free career guidance and placement support. We cannot guarantee jobs, but we actively assist every student.' },
    ],
    icon: 'Monitor',
    colorClass: 'blue',
    featured: true,
  },
  {
    id: '2',
    slug: 'advanced-computer-course',
    name: 'Advanced Computer Course',
    shortDescription: 'Master professional computing skills — from Excel to networking to hardware.',
    description:
      'Take your computing skills to the next level with our Advanced Computer Course. Covering Excel, PowerPoint, internet marketing basics, hardware troubleshooting, and basic programming concepts, this course prepares you for professional roles in offices, businesses, and IT support.',
    duration: '6 Months',
    durationMonths: 6,
    fee: 6500,
    feeNote: 'One-time fee. No hidden charges. EMI available on request.',
    category: 'computer',
    certification: 'E-Max Certificate in Advanced Computing',
    certificationBody: 'E-Max Certification Board',
    placementGuidance: true,
    level: 'Intermediate',
    batchTimings: ['Morning: 8:00 AM – 10:00 AM', 'Evening: 6:00 PM – 8:00 PM'],
    syllabus: [
      { module: 'Module 1: Advanced MS Office', topics: ['MS Word Advanced', 'Excel Formulas & Functions', 'Excel Charts & Pivot Tables', 'PowerPoint Professional', 'Mail Merge & Templates'] },
      { module: 'Module 2: Internet & Digital Skills', topics: ['Advanced Internet Usage', 'Cloud Storage (Google Drive, OneDrive)', 'Online Forms & Government Portals', 'Digital Payments Basics', 'Email Marketing Basics'] },
      { module: 'Module 3: Hardware & Troubleshooting', topics: ['Computer Assembly Basics', 'Common Hardware Problems', 'Software Installation', 'Antivirus & Security', 'Data Backup & Recovery'] },
      { module: 'Module 4: Networking Fundamentals', topics: ['What is a Network?', 'LAN, WAN, WiFi Setup', 'IP Address Basics', 'Printer & Device Setup', 'Remote Desktop Basics'] },
      { module: 'Module 5: Introduction to Programming', topics: ['What is Programming?', 'HTML & CSS Basics', 'Introduction to Python', 'Simple Projects', 'Career Paths in IT'] },
    ],
    learningOutcomes: [
      'Build complex Excel spreadsheets with formulas',
      'Create professional PowerPoint presentations',
      'Troubleshoot common computer problems',
      'Set up and manage basic networks',
      'Understand fundamentals of programming and HTML',
    ],
    whoShouldJoin: [
      'Students who have completed the Basic Computer Course',
      'Graduates looking for office jobs',
      'Employees wanting to upgrade their skills',
      'Entrepreneurs managing their own business',
    ],
    careerBenefits: [
      'Qualify for MIS Executive, Office Assistant, Data Analyst roles',
      'Apply for IT Support positions',
      'Manage small business operations digitally',
      'Pursue further certification in specialized domains',
    ],
    faqs: [
      { question: 'Do I need to complete the Basic Computer Course first?', answer: 'Basic computer knowledge is recommended. If you are already comfortable with computers, you can join directly after a quick assessment.' },
      { question: 'Will I get a certificate?', answer: 'Yes, an E-Max Advanced Computing certificate is provided upon successful course completion.' },
      { question: 'How many days per week are classes held?', answer: 'Classes are held 6 days a week (Monday–Saturday), 2 hours per day.' },
    ],
    icon: 'Cpu',
    colorClass: 'indigo',
    featured: true,
  },
  {
    id: '3',
    slug: 'ms-office-mastery',
    name: 'MS Office Mastery',
    shortDescription: 'Become fully proficient in Word, Excel, and PowerPoint — the office standard.',
    description:
      'MS Office Mastery is a focused course covering Word, Excel, and PowerPoint at a professional level. Perfect for students and job seekers who need to demonstrate strong office software skills to employers. Learn practical skills used every day in offices across India.',
    duration: '2 Months',
    durationMonths: 2,
    fee: 2500,
    feeNote: 'One-time fee. No hidden charges.',
    category: 'computer',
    certification: 'E-Max Certificate in MS Office',
    certificationBody: 'E-Max Certification Board',
    placementGuidance: true,
    level: 'Beginner',
    batchTimings: ['Morning: 9:00 AM – 11:00 AM', 'Evening: 5:00 PM – 7:00 PM'],
    syllabus: [
      { module: 'Module 1: MS Word', topics: ['Document Creation & Formatting', 'Headers, Footers & Page Layout', 'Tables, Images & Shapes', 'Mail Merge', 'Track Changes & Comments', 'Templates & Styles'] },
      { module: 'Module 2: MS Excel', topics: ['Workbook & Worksheet Basics', 'Data Entry & Formatting', 'Formulas: SUM, AVERAGE, IF, VLOOKUP', 'Charts & Graphs', 'Sorting & Filtering', 'Pivot Tables Basics', 'Print Setup'] },
      { module: 'Module 3: MS PowerPoint', topics: ['Slide Design Principles', 'Layouts & Themes', 'Animations & Transitions', 'SmartArt & Charts', 'Presenter Mode', 'Exporting Presentations'] },
    ],
    learningOutcomes: [
      'Create professional Word documents and reports',
      'Build Excel spreadsheets with advanced formulas',
      'Design compelling PowerPoint presentations',
      'Complete office tasks 3x faster',
    ],
    whoShouldJoin: [
      'Job seekers in any field requiring office skills',
      'Students preparing for college or government exams',
      'Working professionals wanting to improve productivity',
      'Small business owners',
    ],
    careerBenefits: [
      'Required for almost all private and government office jobs',
      'Improve your salary negotiation with proven skills',
      'Work more efficiently in your current role',
    ],
    faqs: [
      { question: 'Which version of MS Office do you teach?', answer: 'We teach MS Office 2019 and Office 365, the most widely used versions in Indian offices.' },
      { question: 'Is this enough for a data entry job?', answer: 'Yes, this course more than qualifies you for data entry and MIS roles.' },
    ],
    icon: 'FileText',
    colorClass: 'green',
    featured: true,
  },
  {
    id: '4',
    slug: 'graphic-design-basics',
    name: 'Graphic Design Basics',
    shortDescription: 'Learn Canva, Photoshop basics & design principles to start your creative career.',
    description:
      'Our Graphic Design Basics course introduces you to the principles of visual design and hands-on tools used by professionals. Starting with Canva for quick designs, then moving to Photoshop basics, you will be able to create posters, social media content, logos, and more.',
    duration: '4 Months',
    durationMonths: 4,
    fee: 5000,
    feeNote: 'One-time fee. No hidden charges.',
    category: 'design',
    certification: 'E-Max Certificate in Graphic Design',
    certificationBody: 'E-Max Certification Board',
    placementGuidance: true,
    level: 'Beginner',
    batchTimings: ['Morning: 10:00 AM – 12:00 PM', 'Evening: 6:00 PM – 8:00 PM'],
    syllabus: [
      { module: 'Module 1: Design Fundamentals', topics: ['Principles of Good Design', 'Color Theory', 'Typography Basics', 'Layout & Composition', 'Design Trends 2024'] },
      { module: 'Module 2: Canva Mastery', topics: ['Canva Interface', 'Social Media Post Design', 'Flyer & Poster Design', 'Brand Kit Setup', 'Presentations in Canva', 'Exporting Files'] },
      { module: 'Module 3: Adobe Photoshop Basics', topics: ['Photoshop Interface', 'Layers & Masks', 'Photo Retouching', 'Background Removal', 'Text Effects', 'Saving for Web & Print'] },
      { module: 'Module 4: Portfolio & Freelancing', topics: ['Building Your Design Portfolio', 'Finding Freelance Clients', 'Pricing Your Work', 'Introduction to Fiverr & Upwork', 'Working with Clients'] },
    ],
    learningOutcomes: [
      'Create professional social media graphics',
      'Design posters, flyers and banners',
      'Edit photos professionally',
      'Build a portfolio of design work',
      'Start freelancing or apply for design jobs',
    ],
    whoShouldJoin: [
      'Creative individuals wanting a design career',
      'Small business owners managing their own marketing',
      'Students in commerce or arts streams',
      'Social media managers and content creators',
    ],
    careerBenefits: [
      'Work as a freelance graphic designer from home',
      'Apply for jobs in agencies, print shops, and digital marketing firms',
      'Support your own business with quality marketing materials',
      'Earn ₹15,000–₹50,000/month as a freelancer',
    ],
    faqs: [
      { question: 'Do I need a powerful computer for this course?', answer: 'No. Canva works in a web browser. For Photoshop, our lab computers are available for practice during class hours.' },
      { question: 'Can I start freelancing after this course?', answer: 'Yes! We teach you how to find clients and price your work in Module 4.' },
    ],
    icon: 'Palette',
    colorClass: 'purple',
    featured: false,
  },
  {
    id: '5',
    slug: 'english-communication-course',
    name: 'English Communication Course',
    shortDescription: 'Build confident spoken and written English for interviews, jobs, and daily life.',
    description:
      'The English Communication Course at IFL Institute is designed to build real-world English communication skills. From everyday conversation to professional email writing and interview preparation, this course gives you the confidence to communicate in English in any setting.',
    duration: '3 Months',
    durationMonths: 3,
    fee: 3000,
    feeNote: 'One-time fee. No hidden charges.',
    category: 'communication',
    certification: 'E-Max Certificate in English Communication',
    certificationBody: 'E-Max Certification Board',
    placementGuidance: true,
    level: 'Beginner',
    batchTimings: ['Morning: 8:00 AM – 9:00 AM', 'Evening: 7:00 PM – 8:00 PM'],
    syllabus: [
      { module: 'Module 1: Grammar Foundations', topics: ['Tenses Review', 'Parts of Speech', 'Sentence Structure', 'Common Errors & Corrections', 'Vocabulary Building'] },
      { module: 'Module 2: Spoken English', topics: ['Pronunciation Basics', 'Daily Conversation Practice', 'Formal vs Informal Speech', 'Public Speaking Basics', 'Group Discussion Practice'] },
      { module: 'Module 3: Written English', topics: ['Email Writing', 'Letter Writing', 'Report Writing Basics', 'Social Media Writing', 'Resume Writing'] },
      { module: 'Module 4: Interview Preparation', topics: ['Common Interview Questions', 'STAR Method Answers', 'Body Language & Confidence', 'Mock Interviews', 'Salary Negotiation Basics'] },
    ],
    learningOutcomes: [
      'Speak English confidently in daily and professional settings',
      'Write professional emails and letters',
      'Perform well in job interviews',
      'Improve vocabulary and grammar significantly',
    ],
    whoShouldJoin: [
      'Job seekers who want to improve interview performance',
      'Students preparing for college admissions',
      'Working professionals wanting to grow in their careers',
      'Anyone who wants to communicate confidently in English',
    ],
    careerBenefits: [
      'Qualify for BPO, customer service, and front-desk roles',
      'Communicate confidently with English-speaking clients and managers',
      'Improve your chances in competitive interviews',
      'Stand out from other candidates at the same qualification level',
    ],
    faqs: [
      { question: 'Is this course conducted in Hindi or English?', answer: 'Classes are bilingual (Hindi + English) so you can understand concepts clearly while practicing English.' },
      { question: 'Can I join if my English is very basic?', answer: 'Absolutely! We start from the basics and build up steadily. No prior English knowledge required.' },
    ],
    icon: 'MessageSquare',
    colorClass: 'orange',
    featured: false,
  },
  {
    id: '6',
    slug: 'academic-tuition-batches',
    name: 'Academic Tuition Batches',
    shortDescription: 'Expert subject tuition for Classes 6–12 in Math, Science, and Computers.',
    description:
      'IFL Institute offers focused academic tuition for students in Classes 6 to 12. Our experienced teachers provide clear explanations, regular practice tests, and personalized attention. We cover Mathematics, Science, and Computer Science/IT subjects to help students excel in school and board exams.',
    duration: 'Ongoing (Per Month)',
    durationMonths: 0,
    fee: 1500,
    feeNote: 'Per month, per subject. Discounts for multiple subjects.',
    category: 'academic',
    certification: 'Institute Certificate of Completion',
    certificationBody: 'IFL Institute',
    placementGuidance: false,
    level: 'Beginner',
    batchTimings: ['Morning: 7:00 AM – 9:00 AM', 'Afternoon: 2:00 PM – 4:00 PM', 'Evening: 5:00 PM – 7:00 PM'],
    syllabus: [
      { module: 'Mathematics (Class 6–10)', topics: ['Number Systems', 'Algebra & Linear Equations', 'Geometry & Mensuration', 'Statistics & Probability', 'Exam Pattern Practice'] },
      { module: 'Mathematics (Class 11–12)', topics: ['Calculus Basics', 'Matrices & Determinants', 'Probability & Statistics', 'Trigonometry', 'Board Exam Preparation'] },
      { module: 'Science (Class 6–10)', topics: ['Physics Basics', 'Chemistry Concepts', 'Biology Overview', 'NCERT Focus', 'Lab Work Understanding'] },
      { module: 'Computer Science / IT', topics: ['NCERT Computer Science Syllabus', 'Python Programming (Class 11–12)', 'Database Basics (SQL)', 'MS Office for School', 'Practical Exam Prep'] },
    ],
    learningOutcomes: [
      'Improve school exam scores significantly',
      'Build strong conceptual understanding',
      'Develop consistent study habits',
      'Clear board exams with confidence',
    ],
    whoShouldJoin: [
      'Students in Classes 6–12 needing extra academic support',
      'Students who want to improve their board exam scores',
      'Students weak in Math or Science',
      'Students appearing for competitive school entrance exams',
    ],
    careerBenefits: [
      'Better scores open doors to top colleges',
      'Strong foundation for engineering & science streams',
      'Computer skills from early age give career advantage',
    ],
    faqs: [
      { question: 'How many students are in each batch?', answer: 'We keep batches small — maximum 10 students per batch — for personalized attention.' },
      { question: 'Do you provide study material?', answer: 'Yes, notes and practice sheets are provided at no extra cost.' },
      { question: 'Can I join mid-session?', answer: 'Yes, students can join any time of the year.' },
    ],
    icon: 'GraduationCap',
    colorClass: 'teal',
    featured: false,
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug)
}

export function getFeaturedCourses(): Course[] {
  return COURSES.filter((c) => c.featured)
}
