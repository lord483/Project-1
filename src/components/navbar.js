import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Navbar() {
	return (
		<Wrapper>
			<ul className="nav-container">
				<li className="nav-heading">
					<h1>
						<Link to="/">Home</Link>
					</h1>
				</li>
				<li className="nav-item">
					<Link to="/about">About Us</Link>
				</li>
				<li className="nav-item">
					<Link to="/courses">Our Courses</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact">Contact Us</Link>
				</li>
				<li className="nav-item">
					<Link to="/gallary">Gallary</Link>
				</li>
			</ul>
		</Wrapper>
	);
}

const Wrapper = styled.nav`
	* {
		margin: 0;
		padding: 0;
	}
	border: solid 1px black;

	.nav-container {
		display: flex;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		border-bottom: solid 1px black;
		align-items: center;
		justify-content: flex-end;
		padding: 1rem;
	}

	.nav-container > .nav-item {
		list-style-type: none;

		flex: 1;
	}

	.nav-heading {
		display: inline-block;

		flex: 1;
		justify-content: center;
		flex: 5;
	}
`;

export default Navbar;
