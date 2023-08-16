import { ICONS } from "../assets";

export const emailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const SocialLinks = [
  {
    id: 1,
    icon: ICONS.LinkedIn,
    href: "https://www.linkedin.com/in/yogeshzala",
  },
  { id: 2, icon: ICONS.GitHub, href: "https://github.com/yogeshzala" },
  { id: 3, icon: ICONS.X, href: "https://twitter.com/yogeshzala1511" },
  {
    id: 4,
    icon: ICONS.Instagram,
    href: "https://www.instagram.com/yogeshzala1511",
  },
];

export const FrontEndSkills = [
  { id: 1, title: "HTML / CSS", value: 90 },
  { id: 2, title: "JavaScript", value: 80 },
  { id: 3, title: "React.js", value: 80 },
  { id: 4, title: "Tailwind CSS", value: 75 },
  { id: 5, title: "Material UI", value: 75 },
  { id: 6, title: "Next.js", value: 60 },
  { id: 7, title: "Angular", value: 40 },
];

export const BackEndSkills = [
  { id: 1, title: "Node.js", value: 60 },
  { id: 2, title: "Express.js", value: 60 },
  { id: 3, title: "MySql", value: 50 },
  { id: 4, title: "Sequelize (ORM)", value: 50 },
  { id: 5, title: "MongoDB", value: 40 },
  { id: 6, title: "Mongoose", value: 40 },
];
