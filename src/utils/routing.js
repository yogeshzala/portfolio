import { ICONS } from "../assets";
import AboutMe from "../containers/AboutMe";
import ContactMe from "../containers/ContactMe";
import Home from "../containers/Home";
import Portfolio from "../containers/Portfolio";
import Resume from "../containers/Resume";
import Skills from "../containers/Skills";

export const URLS = {
  HOME: { title: "Home", url: "/" },
  ABOUT_ME: { title: "About Me", url: "/aboutMe" },
  SKILLS: { title: "Skills", url: "/skills" },
  RESUME: { title: "Resume", url: "/resume" },
  PORTFOLIO: { title: "Portfolio", url: "/portfolio" },
  CONTACT_ME: { title: "Contact Me", url: "/contactMe" },
  PAGE_NOT_FOUND: { title: "Page Not found", url: "/*" },
};

export const ROUTES = [
  { id: 1, path: URLS.HOME.url, element: <Home /> },
  { id: 2, path: URLS.ABOUT_ME.url, element: <AboutMe /> },
  { id: 3, path: URLS.SKILLS.url, element: <Skills /> },
  { id: 4, path: URLS.RESUME.url, element: <Resume /> },
  { id: 5, path: URLS.PORTFOLIO.url, element: <Portfolio /> },
  { id: 6, path: URLS.CONTACT_ME.url, element: <ContactMe /> },
];

export const MENU_ITEMS = [
  { id: 1, icon: ICONS.Home, path: URLS.HOME.url },
  { id: 2, icon: ICONS.AboutMe, path: URLS.ABOUT_ME.url },
  { id: 3, icon: ICONS.Skills, path: URLS.SKILLS.url },
  // { id: 4, icon: ICONS.Resume, path: URLS.RESUME.url },
  // { id: 5, icon: ICONS.Portfolio, path: URLS.PORTFOLIO.url },
  { id: 6, icon: ICONS.ContactMe, path: URLS.CONTACT_ME.url },
];
