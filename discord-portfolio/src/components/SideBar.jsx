import { FaUserGraduate, FaHandPaper } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col shadow-lg bg-gray-50 dark:bg-gray-800 ">
        <SideBarIcon icon={<FaHandPaper size="36" />} text={"About me"} />
        <Divider />
        <SideBarIcon icon={<FaUserGraduate size="36" />} text={"Experience"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-hover group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />


export default SideBar;
