import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaArchive, FaInbox, FaClock, FaTv, FaArrowRight } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
   
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 account-icon" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 icon-color"/>   },
    { label: "Courses",   icon: <FaBook className="fs-2 icon-color" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 icon-color" /> },
    { label: "Inbox",   icon: <FaInbox className="fs-2 icon-color" />  },
    { label: "History", icon: <FaClock className="fs-2 icon-color"/>   },
    { label: "Studio",   icon: <FaTv className="fs-2 icon-color" />           },
    { label: "Commons",  icon: <FaArrowRight className="fs-2 icon-color" /> },
  
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
       <li> <a href="http://northeastern.edu" style={{ color: 'red' }} className="n-label"  >N</a></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
            </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;