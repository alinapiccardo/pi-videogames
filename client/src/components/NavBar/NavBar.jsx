import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={styles.navBarContainer}>
			<div className={styles.containerLogo}>
				<Link to="/home" className={styles.links}>
					<h1 className={styles.logoNavBar}>HenryGames</h1>
				</Link>
			</div>
			<div className={styles.containerLinks}>
				<Link to="/home" className={styles.links}>
					Home
				</Link>
				<Link to="/about" className={styles.links}>
					About
				</Link>
				<Link to="/form" className={styles.createLink}>
					Create
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
