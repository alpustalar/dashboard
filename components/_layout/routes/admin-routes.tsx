import { BiMailSend } from "react-icons/bi";
import { FaPerson } from "react-icons/fa6";
import { FaBlog, FaRegCalendarAlt } from "react-icons/fa";
import { SiFormspree } from "react-icons/si";
import { FcDocument } from "react-icons/fc";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineNotifications } from "react-icons/md";

const adminRoutes = [
  {
    label: "Yönetici",
    icon: <GrUserAdmin />,
    route: "/yonetici",
    children: [
      {
        label: "Üyeler",
        icon: <FaPerson />,
        route: "/uyeler",
      },
      {
        label: "Randevular",
        icon: <FaRegCalendarAlt />,
        route: "/randevular",
      },
      {
        label: "Formlar",
        icon: <SiFormspree />,
        route: "/formlar",
      },
      {
        label: "E-Postalar",
        icon: <BiMailSend />,
        route: "/mailler",
      },
      {
        label: "Dökümanlar",
        icon: <FcDocument />,
        route: "/dokumanlar",
      },
      {
        label: "Bildirimler",
        icon: <MdOutlineNotifications />,
        route: "/bildirimler",
      },
      {
        label: "Blog",
        icon: <FaBlog />,
        route: "/blog",
      },
    ],
  },
];

export default adminRoutes;
