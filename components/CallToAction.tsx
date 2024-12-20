import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const data = [
  {
    title: "Call Now",
    link: "tel:01722-865987",
    icon: <FaPhoneAlt />,
  },
  // email
  {
    title: "Email Us",
    link: "mailto:info@oliacademybd.com",
    icon: <FaEnvelope />,
  },
  //   facebok
  {
    title: "Facebook Page",
    link: "https://www.facebook.com/oliacademyofficial",
    icon: <FaFacebook />,
  },
  // instagram
  {
    title: "Instagram",
    link: "https://www.instagram.com/oliacademyofficial",
    icon: <FaInstagram />,
  },
  //   location
  {
    title: "Radhabollov, Rangpur",
    link: "https://maps.app.goo.gl/FQRDF2EiYPLdPx2H6",
    icon: <FaLocationDot />,
  },
];

export default function CallToAction() {
  return (
    <div>
      <div className="flex flex-col p-5 mt-5 w-full justify-center items-center gap-5">
        {data.map((item, index: number) => (
          <Link
            key={index}
            href={item.link}
            className="border w-full p-3 border-theme-primary-color font-medium capitalize bg-theme-primary-color text-white hover:text-theme-primary-color hover:bg-white transition-all duration-300 ease-in rounded-xl flex flex-row justify-center items-center gap-2"
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
