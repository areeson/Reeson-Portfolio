import React from 'react';
import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram }  from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { RiTodoLine } from 'react-icons/ri';
import { MdOutlineSchool } from 'react-icons/md';
import { HiOutlineHome, HiOutlineBriefcase, HiOutlinePencil } from 'react-icons/hi';
import headshot from './headshot.jpg';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import shirt from './shirt.jpeg';
import minime from './minime.jpeg';
import camerastrap from './camerastrap.jpeg';

export const links = [
  {
    title: '',
    links: [
      {
        name: 'home',
        icon: <HiOutlineHome />,
      },
    ],
  },

  {
    title: 'NAV',
    links: [
      {
        name: 'Projects',
        icon: <HiOutlineBriefcase />,
      },
      {
        name: 'Education',
        icon: <MdOutlineSchool />,
      },
      {
        name: 'Resume',
        icon: <HiOutlinePencil />,
      },
    ],
  },

];

export const socialLinks = [
  {
    title: 'SOCIAL',
    links: [
      {
        name: 'LinkedIn',
        icon: <AiFillLinkedin />,
        link: 'https://www.linkedin.com/in/andrewreeson/'
      },
      {
        name: 'GitHub',
        icon: <AiOutlineGithub />,
        link: 'https://github.com/areeson'
      },
      {
        name: 'Instagram',
        icon: <AiOutlineInstagram />,
        link: 'https://www.instagram.com/reesonstudio/'
      },
    ],
  },
];

export const cartData = [
  {
    image:
      shirt,
    name: 'Simple Tee',
    category: 'Reeson Studio',
    price: '$35',
  },
  {
    image:
      minime,
    name: 'Mini Me Support',
    category: 'Tech Line',
    price: '$200',
  },
  {
    image:
      camerastrap,
    name: 'Camera Strap',
    category: 'Photography Line',
    price: '$30',
  },
];

export const notificationData = [
  {
    image:
      headshot,
    message: 'Andrew Joined the Team!',
    desc: 'Say Hello!',
    time: '9:08 AM',
  },
  {
    image:
      avatar2,
    message: 'New Project Posted',
    desc: 'Check it out!',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'John Doe',
    desc: 'Project Permission Request',
    time: '4:39 AM',
  },
];

export const chatData = [
  {
    image:
      avatar,
    message: 'John Doe',
    desc: 'New Private Message',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'Forest Gump',
    desc: 'Liked your message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'Proviso Project',
    desc: 'Someone replied to your comment',
    time: '4:39 AM',
  },
];

export const homeCardData = [
  {
    title: 'Professional Background',
    description: 'A mixture between analytical and creative. Keeping efficiency and logic in mind without forgetting the target user experience. A summary of work done to build up my resume.',
    link: 'Professional',
    bend: 'hover:skew-x-2'
  },
  {
    title: 'Resume',
    description: 'Checkout the breakdown on some of my past experiences and projects that have led me to today.',
    link: 'resume'
  },
  {
    title: 'Personal Background',
    description: 'Hear more about the hobbies and activities I like to dig into in the after hours. These are activities that have shaped my character and helped build balance in life.',
    link: 'Personal'
  }
];

export const projectsPersonalCardData = [
  {
    title: 'Portfolio Website',
    description: 'A more in depth look at what went on during the build of this current site.',
    link: 'Projects'
  },
  {
    title: 'Weather API Dash',
    description: 'Get an in depth look on the weather in your area. Collecting project for presentation, coming soon!',
    link: 'Projects'
  },
  {
    title: 'More Coming Soon',
    description: 'Collecting projects to present, coming soon!',
    link: 'Projects'
  },
];

export const projectsE36CardData = [
  {
    title: 'In Progress',
    description: 'Check back for track car progress posts',
    link: 'Projects'
  },

];

export const projectsBUCardData = [
  {
    title: 'Proviso',
    description: 'Capstone Project. A site for reserving a room for a hypothetical hotel chain running through Nebraska.',
    link: 'proviso'
  },
  {
    title: 'Outland Adventure',
    description: 'Gathering project to present, coming soon!',
    link: 'Projects'
  },
  {
    title: 'More Coming Soon',
    description: 'Collecting projects to present, coming soon!',
    link: 'Projects'
  }
//   {
//     title: 'Bank Application',
//     description: 'Gathering project for presentation, coming soon!',
//     link: 'Projects'
//   },
//   {
//     title: 'Cable Calculator',
//     description: 'Gathering project for presentation, coming soon!',
//     link: 'Projects'
//   },
//   {
//     title: 'FX JAVA',
//     description: 'Gathering project for presentation, coming soon!',
//     link: 'Projects'
//   },
];

export const classesBUCardData1 = [
  {
    title: 'Foundation of Software Development',
    // link: 'Education',
  },
  {
    title: 'Intro to Programming with Python',
    // link: 'Education',
  },
  {
    title: 'Database Development and Use',
    // link: 'Education',
  },
  {
    title: 'Programming with Java',
    // link: 'Education',
  },
  {
    title: 'Web Development with HTML & CSS',
    // link: 'Education',
  },
  {
    title: 'Intermediate Java Programming',
    // link: 'Education',
  }
]

export const classesBUCardData2 = [
  {
    title: 'Secure Software Development',
    // link: 'Education',
  },
  {
    title: 'Advanced Java Programming',
    // link: 'Education',
  },
  {
    title: 'DevOps',
    // link: 'Education',
  },
  {
    title: 'Server Side Development (JavaScript)',
    // link: 'Education',
  },
  {
    title: 'Server-Side Scripting (PHP)',
    // link: 'Education',
  },
  {
    title: 'Capstone in Software Development',
    // link: 'Education',
  },
];

export const classesUNLCardData2 = [
  {
    title: 'Marketing Management',
    // link: 'Education',
  },
  {
    title: 'Marketing',
    // link: 'Education',
  },
  {
    title: 'Operation & Supply Chain',
    // link: 'Education',
  },
  {
    title: 'Sales Force Management',
    // link: 'Education',
  },
  {
    title: 'Customer Relation Management',
    // link: 'Education',
  },
  {
    title: 'International Marketing',
    // link: 'Education',
  },
];

export const classesUNLCardData4 = [
  {
    title: 'Business Plan Dev & Decision Making',
    // link: 'Education',
  },
  {
    title: 'Legal Environment',
    // link: 'Education',
  },
  {
    title: 'Manage Growth & Change',
    // link: 'Education',
  },
  {
    title: 'Business Analytics & Info Analysis',
    // link: 'Education',
  },
  {
    title: 'Sales Communication',
    // link: 'Education',
  },
  {
    title: 'Business Policies',
    // link: 'Education',
  },
];

export const classesUNLCardData3 = [
  {
    title: 'Managing Behavior in Organizations',
    // link: 'Education',
  },
  {
    title: 'Finance',
    // link: 'Education',
  },
  {
    title: 'Business Writing',
    // link: 'Education',
  },
  {
    title: 'Accounting I',
    // link: 'Education',
  },
  {
    title: 'Accounting II',
    // link: 'Education',
  },
  {
    title: 'Entrepreneurship & Innovation',
    // link: 'Education',
  },
];

export const classesUNLCardData1 = [
  {
    title: 'Statistics',
    // link: 'Education',
  },
  {
    title: 'Macroeconomics',
    // link: 'Education',
  },
  {
    title: 'Microeconomics',
    // link: 'Education',
  },
  {
    title: 'Applied Calculus',
    // link: 'Education',
  },
  {
    title: 'College Algebra & Trigonometry ',
    // link: 'Education',
  },
  {
    title: 'Business Computer Applications',
    // link: 'Education',
  },
];

export const certificationCardData1 = [
  {
    title: 'CS50x: Computer Science',
    // link: 'Education',
  },
  {
    title: 'SoloLearn: Python 3',
    // link: 'Education',
  },
  {
    title: 'Google Analytics',
    // link: 'Education',
  },
  {
    title: 'Google Adwords',
    // link: 'Education',
  }
];

export const volunteeringCardData1 = [
  {
    title: 'Community CROPS',
    // link: 'Education',
  },
  {
    title: 'Royal Family Kids Camp',
    // link: 'Education',
  }
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#0ea5e9',
  },
  {
    name: 'Cyan-theme',
    color: '#06b6d4',
  },
  {
    name: 'purple-theme',
    color: '#8b5cf6',
  },
  {
    name: 'red-theme',
    color: '#f43f5e',
  },
  {
    name: 'indigo-theme',
    color: '#6366f1',
  },
  {
    name: 'orange-theme',
    color: '#f59e0b',
  },
];

export const userProfileData = [
  {
    icon: <FiSettings />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <AiOutlineMail />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <RiTodoLine />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(251, 200, 15)',
    iconBg: 'rgb(255, 246, 200)',
  },
];