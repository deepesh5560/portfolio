// import Keeper from "../assets/portfolio/Keeper.PNG";
// import amazon from "../assets/portfolio/amazon.png";

import taskpad from "../assets/portfolio/taskpad.png";
import contactList from "../assets/portfolio/contactList.png";
import netflix from "../assets/portfolio/netflix.png";
import sing from "../assets/portfolio/sing.png";

export const portfolios = [
  {
    id: 1,
    image: netflix,
    demo: "https://teal-rugelach-77898d.netlify.app/",
    code: "https://github.com/deepesh5560/netflix",
    download: "",
    techStack: ["Next Js", "Next hooks", "Css"],
    description: ["Built Netflix-clone using Next js"],
    descriptionColor: "text-black",
    title: "Netflix",
    subtitle: "Netflix Demo Website",
  },
  {
    id: 2,
    image: taskpad,
    demo: "https://my-taskpad.netlify.app/",
    code: "https://github.com/deepesh5560/taskpad",
    download: "",
    techStack: ["React", "Node", "Express", "MongoDB"],
    description: [
      "• Website Built using React,Node,Express and MongoDB",
      "• Used React for front-end development",
      "• Used Node + Express for Backend",
      "• Used Mongodb for database",
      "• Used CSS for styling",
    ],
    descriptionColor: "text-black",
    title: "Taskpad",
    subtitle: "TaskPad Demo Website",
  },
  {
    id: 3,
    image: sing,
    demo: "https://the-sing-along.vercel.app/",
    code: "https://github.com/deepesh5560/singAlong",
    download: "",
    techStack: ["React", "TypeScript", "Redux", "TailWind"],
    description: [
      "• Website Built using React with TypeScript, Redux and TailWind",
      "• Used React with TypeScript for front-end development",
      "• Used Redux for state management",
      "• Used CSS and TailWind for styling",
    ],
    descriptionColor: "text-black",
    title: "Sing Along",
    subtitle: "Sing Along Demo Website",
  },

  {
    id: 4,
    image: contactList,
    demo: "https://my-contact-book.netlify.app/",
    code: "https://github.com/deepesh5560/redux-counter",
    download: "",
    techStack: ["React", "Redux", "Bootstrap"],
    description: [
      "• Website Built using React,Redux and Bootstrap",
      "• Used React for front-end development",
      "• Used Redux for state management",
      "• Used CSS and Bootstrap for styling",
    ],
    descriptionColor: "text-black",
    title: "Contact-list",
    subtitle: "contact-list Demo Website",
  },
  // {
  //   id: 5,
  //   image: amazon,
  //   demo: "https://clone-3a842.web.app/",
  //   code: "https://github.com/manikverma7/amazon-clone",
  //   download: "",
  //   techStack: ["React", "Context Api"],
  //   description: [
  //     "• Website Built using React",
  //     "• Used Context Api for global state management",
  //     "• Used Firebase for Backend and Authentication",
  //     "• Used Material-Ui for styling",
  //     "• Used Stripe for demo payment integration",
  //   ],
  //   descriptionColor: "text-black",
  //   title: "Amazon Clone",
  //   subtitle: "Amazon Clone Demo Website",
  // },
  // {
  //   id: 6,
  //   image: Keeper,
  //   demo: "https://beamish-sundae-f3f39c.netlify.app/",
  //   code: "https://github.com/manikverma7/Keeper-App-React",
  //   download: "",
  //   techStack: ["React", "Hooks"],
  //   description: ["A Todo List website built using React and Hooks"],
  //   descriptionColor: "text-black",
  //   title: "Keeper Website",
  //   subtitle: "A Todo List Demo Website",
  // },
];
