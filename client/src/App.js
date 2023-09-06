import React from "react";
import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Form, About } from "./views";
import NavBar from "./components/NavBar/NavBar";

function App() {
	const location = useLocation();
	return (
		<div className="App">
			{location.pathname !== "/" && <NavBar />}
			<Route exact path="/" render={() => <Landing />} />
			<Route path="/home" render={() => <Home />} />
			<Route path="/form" render={() => <Form />} />
			<Route path="/detail/:id" render={() => <Detail />} />
			<Route path="/about" render={() => <About />} />
		</div>
	);
}

export default App;
