import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div className={styles.errorPageBg}>
			<h1>404 - Page Not Found</h1>
			<p>Sorry, the page you are looking for could not be found.</p>
			<Link to="/">
				<button>GO TO HOME</button>
			</Link>
		</div>
	);
}
