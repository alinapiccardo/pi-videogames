import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={styles.navBarContainer}>
			<Link to="/home">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/form">Create</Link>
		</div>
	);
};

export default NavBar;
