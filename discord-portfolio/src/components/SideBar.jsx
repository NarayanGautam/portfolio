import { FaGraduationCap} from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col shadow-lg bg-gray-50 dark:bg-gray-900 ">
        <SideBarIcon icon={<HiHome size="30" />} text={"Home"} path={"/" }/>
        <Divider />
        <SideBarIcon icon={<FaGraduationCap size="30" />} text={"Experience"} path = {"/experience"} />
        <Socials />
    </div>
  );
};

const SideBarIcon = ({ icon, text, path}) => (
  <div className="sidebar-icon group">
    <Link to={path}>{icon}</Link>
    <span class="sidebar-hover group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Socials = () => (
  <>
    <hr className="sidebar-hr" />
    <div className="sidebar-icon ">
      <a href="https://github.com/NarayanGautam" target="_blank">{<BsGithub size="30" />}</a>
    </div>
    <div className="sidebar-icon">
      <a href="https://www.linkedin.com/in/shuva-narayan-gautam-1365b217a/" target="_blank">{<BsLinkedin size="30" />}</a>
    </div>
  </>
);

const Divider = () => <hr className="sidebar-hr" />


export default SideBar;
