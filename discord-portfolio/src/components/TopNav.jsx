import { MdLightMode, MdDarkMode } from "react-icons/md";

import useDarkMode from "../hooks/useDarkMode";

const TopNav = () => {
    return (
        <div className="top-nav">
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
        <MdLightMode size='24' className='top-navigation-icon' />
      ) : (
        <MdDarkMode size='24' className='top-navigation-icon' />
      )}
    </span>
    )
}