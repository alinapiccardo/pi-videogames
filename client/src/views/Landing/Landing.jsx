import React from "react";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<div className={styles.landingDiv}>
			<div className={styles.content}>
				<h1 className={styles.title}>
					HENRY <br />
					VIDEOGAMES
				</h1>
				<h2 className={styles.subtitle}>
					Tu sitio
					<br /> preferido
					<br /> de videojuegos.
				</h2>
				<Link to="/home">
					<button className={styles.button}>INGRESAR</button>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
