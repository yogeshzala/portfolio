import Logo from "./images/logo.svg";
import AboutMeVector from "./images/aboutMe.svg";
import ContactMeVector from "./images/contactMe.svg";

import {
  faBriefcase,
  faCircleArrowLeft,
  faCircleInfo,
  faCircleNotch,
  faCode,
  faEnvelope,
  faEnvelopeCircleCheck,
  faFileInvoice,
  faHouse,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithubSquare,
  faSquareXTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const IMAGES = {
  Logo,
  AboutMeVector,
  ContactMeVector,
};

export const ICONS = {
  Home: faHouse,
  AboutMe: faCircleInfo,
  Skills: faCode,
  Resume: faFileInvoice,
  Portfolio: faBriefcase,
  ContactMe: faEnvelope,
  LinkedIn: faLinkedin,
  GitHub: faGithubSquare,
  X: faSquareXTwitter,
  Instagram: faSquareInstagram,
  Spinner: faCircleNotch,
  Close: faXmark,
  messageSuccess: faEnvelopeCircleCheck,
  arrowLeft: faCircleArrowLeft,
};
