import { MdLightMode, MdDarkMode } from "react-icons/md";

import useDarkMode from "../hooks/useDarkMode";

const TopNav = () => {
    return (
        <div className="top-nav">
            <ServerTitle />
            <ThemeIcon />
        </div>
    );
};

const ThemeIcon = () => {
    const [dark, set] = useDarkMode();
    const handleMode = () => set(!dark);
    return (
        <span onClick={handleMode}>
      {dark ? (
        <MdLightMode size='24' className='top-nav-icon' />
      ) : (
        <MdDarkMode size='24' className='top-nav-icon' />
      )}
    </span>
    )
}

const ServerTitle = () => <h5 className="title-text"># Shuva Narayan Gautam Portfolio</h5>

export default TopNav