import logo from "./logo.svg";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Home, Contact, Gallary, Courses, About } from "./components/views";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact={true}>
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/gallary">
					<Gallary />
				</Route>
				<Route path="/courses">
					<Courses />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
