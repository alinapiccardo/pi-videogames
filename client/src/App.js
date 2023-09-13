import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Form, About } from "./views";
import { getGenres, getVideogames } from "./redux/actions";
import NavBar from "./components/NavBar/NavBar";

function App() {
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		dispatch(getGenres());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getVideogames());
	}, [dispatch]);

	const fetchedGenres = useSelector((state) => state.genres);
	const [currentPage, setCurrentPage] = useState(1); //seguimiento de la current page

	return (
		<div className="App">
			{location.pathname !== "/" && <NavBar />}
			<Route exact path="/" render={() => <Landing />} />
			<Route
				path="/home"
				render={() => (
					<Home
						fetchedGenres={fetchedGenres}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				)}
			/>
			<Route path="/form" render={() => <Form />} />
			<Route path="/detail/:id" render={() => <Detail />} />
			<Route path="/about" render={() => <About />} />
		</div>
	);
}

export default App;
