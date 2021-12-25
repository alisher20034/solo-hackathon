import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

export const Header = ({ isLoggedIn, setIsLoggedIn, userName, setIsAdmin }) => {
  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userName')
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <header className={styles.mainHeader}>

      {
      
        isLoggedIn ?
        <nav>
          Добро пожаловать, 	&#128293;<strong>{userName}</strong> 	&#128293;
          <NavLink
            onClick={handleLogOut}
            exact
            to="/login"
          >
            <MeetingRoomIcon />
            Выход
          </NavLink>
        </nav>

        : 'Добро пожаловать, читатель Makers News!!'
      
      }

    </header>
  );
};
