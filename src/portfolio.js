/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ecson Hsu",
  title: "Hi There, Welcome! I'm Ecson Hsu",
  subTitle: emoji(
    "A passionate Software Developer 🚀 I specialize in ML and backend programming with Python / C++ / SQL / HTML Native and much more cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Uz7HerWL3WvZBSy8yPILXkFlJXyOUZFS/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ecsonh",
  linkedin: "http://www.linkedin.com/in/ecson-h-b285301ba",
  gmail: "ecsonhwk@gmail.com",
  medium: "https://medium.com/@ecsonhsu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE ML DEVELOPER WHO WANTS TO NEW TECHNOLOGY",
  skills: [
    emoji(
      "⚡ Develop highly functional and efficient ML algorithms to bring convenience to our lives. "
    ),
    emoji("⚡ Build backend systems that performs outstanding functionalities for application systems"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code" //change
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cornell University",
      logo: require("./assets/images/Cornell_University_Logo.png"), //change
      subHeader: "Master of Science in Computer & Information Science",
      duration: "July 2025 - June 2026",
      desc: "Specialize in Intelligence System & Data",
    },
    {
      schoolName: "University of California, Irvine",
      logo: require("./assets/images/uci.png"), //change
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - March 2024",
      desc: "Specialize in Intelligence System",
      descBullets: [
        "Participated in Machine Learning research at UCI Samuel Engineering School",
        "Participated in Data Analyzing research at UCI Donald Bren Computer Science School"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning/AI",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend/Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning & GenAI Engineer Intern",
      company: "Dell Technologies",
      companylogo: require("./assets/images/dell_technologies-logo.png"),
      date: "August 2025 – Present",
      desc: "",
      descBullets: [
        "Developing an AI-powered diagnostic system building ML models to analyze of test process fluctuations in Dell’s diagnostic pipelines.\n",
        "The objective of this project is to save 30% of Dell's engineers time and yearly of ~500K savings."
      ]
    },
    {
      role: "Software Engineer",
      company: "Rexgear",
      companylogo: require("./assets/images/rexgear.png"),
      date: "April 2024 – July 2025",
      desc: "",
      descBullets: [
        "Developed a multi-device management system with sub-3ms data transfer latency, deployed by leading companies including Tesla, Lucid, and SpaceX.\n",
        "Resdeigned website UI and Leverage leading SEO tools to strategically optimize web content, doubleing the oragnic traffic."
      ]
    },
    {
      role: "Machine Learning Engineering Intern",
      company: "nSpire AI",
      companylogo: require("./assets/images/nspire_ai_logo.jpg"),
      date: "Feb 2024 – April 2024",
      descBullets: ["Built a conversational AI language model using Langchain, capable of generating responses to user questions\
      and providing suggestions for user's daily tasks and schedule."]
    },
    {
      role: "Machine Learning Research Assistance",
      company: "UC Irvine",
      companylogo: require("./assets/images/uci.png"),
      date: "June 2023 – Sep 2023",
      descBullets: ["Developed the ML model for a wearable health device with the research team, resulting in an outstanding accuracy of 96%."]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Highlighted Projects",
  subtitle: "Some major projects that I developed",
  footerLink: "https://docs.google.com/presentation/d/15z3VXynQ6vqSq8BLKoKfXZynMWxcga62OJ8DxtHCx2A/edit#slide=id.p",
  projects: [
    {
      image: require("./assets/images/ai bot.png"),
      projectName: "Personalized AI Assistant",
      projectDesc: "A customized AI assistant tailored to each user, providing answers based on the documents they've input into the system, serving as a personal assistant.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://personalassistant-e8ll4penbhjuw3dckk6k4h.streamlit.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shopping platform.png"),
      projectName: "Fashion shopping with AI",
      projectDesc: "Integrate external API to generate color of shirts based on user’s mood, occasion, and scenarios. Recommend outwears to the user based on the generated color."
      ,
      footerLink: [
        {
          name: "Watch Video Demo",
          url: "https://youtu.be/NItLIyy791Q"
        }
      ]
    },
    {
      image: require("./assets/images/school logo.png"),
      projectName: "Interactive Math Learning Platform",
      projectDesc: "An interactive geometry platform that helps students visualize and explore mathematical concepts through dynamic, hands-on 3D simulations."
      ,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gdp.math.uci.edu/#/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true

};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: " Codazen Hackathon 2024",
      subtitle:
        "Won the second place and 3000 dollar price at the hackathon compeition by developing an innovative AI shopping platform.",
      image: require("./assets/images/codazen.png"),
      imageAlt: "Codazen Logo",
      footerLink: [
        {
          name: "Website",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        
      ]
    },
    {
      title: "MIT online MicroMaster Certificate",
      subtitle:
        "Earned a certificate from MITs micromaster Supply Chain Management course with oustanding academic performance. ",
      image: require("./assets/images/mit.png"),
      imageAlt: "MIT Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1sf3ghaKJPzLkQQi-up5xxrR1m-41Jaf_/view?usp=sharing"
        }
      ]
    },

    {
      title: "UCI Deans Honor List",
      subtitle: "Awarded with 5 UCI's deans honor list for outstanding academic performance in several quarters.",
      image: require("./assets/images/uci.png"),
      imageAlt: "UCI Logo",
      footerLink: [
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 562-268-2586",
  email_address: "ecsonhwk@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
