import { FaUserGraduate, FaHandPaper } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col shadow-lg bg-gray-900 text-secondary ">
        <SideBarIcon icon={<FaHandPaper size="30" />} />
        <SideBarIcon icon={<FaUserGraduate size="30" />} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon">
    {icon}
  </div>
);

export default SideBar;
