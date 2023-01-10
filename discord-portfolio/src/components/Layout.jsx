import { FaGraduationCap} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col shadow-lg bg-gray-50 dark:bg-gray-900 ">
        <SideBarIcon icon={<HiHome size="30" />} text={"Home"} path={"/" }/>
        <Divider />
        <SideBarIcon icon={<FaGraduationCap size="30" />} text={"Experience"} path = "/about" />
    </div>
  );
};

const SideBarIcon = ({ icon, text, path}) => (
  <div className="sidebar-icon group">
    <Link to={path}>{icon}</Link>
    {icon}
    <span class="sidebar-hover group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />


export default Layout;
