import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";
import cross_icon from "./cross_icon.svg";
import menu_icon from "./menu_icon.svg";
import star_icon from "./star_icon.svg";
import left_arrow from "./left_arrow.svg";
import right_arrow from "./right_arrow.svg";
import brand_img from "./brand_img.png";
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import project_img_5 from "./project_img_5.jpg";
import project_img_6 from "./project_img_6.jpg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  left_arrow,
  right_arrow,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  project_img_5,
  project_img_6,
  profile_img_1,
  profile_img_2,
  profile_img_3,
};

export const projectsData = [
  {
    title: "Baheria Haven",
    price: "20,00,00000",
    location: "Islamabad",
    image: project_img_1,
  },
  {
    title: "DHA",
    price: "2,50,0000",
    location: "Karachi",
    image: project_img_2,
  },
  {
    title: "Gulshan e Iqbal",
    price: "3,50,0000",
    location: "Karachi",
    image: project_img_3,
  },
  {
    title: "Wapta Town phase I",
    price: "5,50,0000",
    location: "Multan",
    image: project_img_4,
  },
  {
    title: "MDA",
    price: "32,50,000",
    location: "Faisalabad",
    image: project_img_5,
  },
  {
    title: "DHA",
    price: "32,50,000",
    location: "Karachi",
    image: project_img_6,
  },
];

export const testimonialsData = [
  {
    name: "Ali Hussain",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Ali Hussain ",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Alex Carey",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Alex Carey",
    rating: 4,
    text: "From the moment we connected, they instinctively understood my vision and led me to the perfect property. Their meticulous attention to every detail and relentless focus on ensuring my satisfaction made the entire experience exceptional.",
  },
  {
    name: "Arif Ali",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of Arif Ali",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];

const data = {
  assets,
  projectsData,
  testimonialsData,
};

export default data;
