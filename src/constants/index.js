import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    abps,
    jss,
    talk,
    promptpeller,
    sellista,
    next
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Page-Turner",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name:"Next.js",
      icon:next
    }
  ];
  
  const experiences = [
    {
      title: "Higher Secondary Education",
      company_name: "The Aditya Birla Public School, Jagdishpur",
      icon: abps,
      
      iconBg: "#E6DEDD",
      date: "April 2016 - March 2017",
      score:"8.4 CGPA",
    },
    {
      title: "Senior Secondary Education",
      company_name: "The Aditya Birla Public School, Jagdishpur",
      icon: abps,
      iconBg: "#E6DEDD",
      date: "April 2018 - March 2019",
      score:"83.4%",
    },
    {
      title: "B.Tech in Computer Science Engineering",
      company_name: "JSS Academy of Technical Education, Noida",
      icon: jss,
      iconBg: "#E6DEDD",
      date: "July 2019 - August 2023",
      score:"8.81 CGPA",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Kashan's collaborative work style, attention to detail, and problem-solving skills were instrumental in creating the real-time chat application 'Conversate' - a pleasure to work with!",
      name: "Nikunj Garg",
      designation: "SDE intern",
      company: "CSG",
      image: "https://i.ibb.co/sHDtBDL/IMG-2525-2-removebg-preview.png",
    },
  ];
  
  const projects = [
    
    {
      name: "Promptpeller.ai",
      description:
        "Introducing a Next.js based web app for sharing AI-generated prompts. Empowering content creators with new ideas, users can easily filter prompts by category or keyword. With a streamlined and intuitive interface, the platform is accessible on desktop and mobile.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "react.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: promptpeller,
      source_code_link: "https://github.com/kashanhz999/promptpeller.ai",
      live_link:"https://promptpeller-ai-kashanhz999.vercel.app/"
    },
    {
      name: "Sellista Dashboard",
      description:
        "This ecommerce website dashboard, created using React.js and Syncfusion, offers a customizable experience with light and dark mode options and various themes. Its components include sales analytics, order management, and customer insights, providing retailers with valuable data to make informed decisions. The intuitive and user-friendly interface allows for easy navigation and use of the dashboard.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "syncfusion",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: sellista,
      source_code_link: "https://github.com/",
      live_link:"https://sellista-dashboard.netlify.app/"
    },
    {
      name: "Conversate",
      description:
        "This real-time chat application built using the MERN stack incorporates socket.io for real-time communication and encryption to secure user data. It features a user-friendly interface allowing users to create and join chat rooms, view a list of users, and send and receive messages in real-time. User authentication and authorization are implemented to ensure that only authorized users can access the chat rooms and user data.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: talk,
      source_code_link: "https://github.com/kashanhz999/Talk_RTCA",
      live_link:""
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };