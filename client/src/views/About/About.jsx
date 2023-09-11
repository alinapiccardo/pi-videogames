import React from "react";
import styles from "./About.module.css";

export default function About() {
	return (
		<div className={styles.aboutDiv}>
			<h1 className={styles.titleAbout}>ABOUT</h1>
			<h2 className={styles.subTitleAbout}>
				Henry Labs - Proyecto Individual: Videogames
			</h2>
			<p className={styles.information}>
				El proyecto consiste en crear una aplicación en la cual se puedan
				visualizar videojuegos, buscarlos, filtrarlos y ordenarlos por
				diferentes criterios. La información de los videojuegos se obtiene de la
				API externa RAWG y se almacena en una base de datos PostgreSQL. La
				aplicación fue desarrollada con React, Redux, Node.js, Express y
				Sequelize.{" "}
			</p>
			<div className={styles.divCreator}>
				<div>
					<h2 className={styles.subTitleAbout}>CREATOR: ALINA PICCARDO</h2>
					<p className={styles.information}>
						Estudiante de programacion FullStack en soyHENRY y de Ingenieria
						Informatica.
					</p>
					<p className={styles.information}>
						<a
							className={styles.link}
							href="https://www.linkedin.com/in/alinapiccardo/"
							target="_blank"
							rel="noreferrer"
						>
							My LinkedIn
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
