import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
	@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
		.nav-container {
			-webkit-backdrop-filter: blur(7px);
			backdrop-filter: blur(7px);
		}
	}

	/* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
	@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		.nav-container {
			background-color: rgba(0, 0, 0, 0.9);
		}
	}

	.nav-container {
		position: fixed;
		width: 100%;

		top: 0px;
		display: flex;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		border-bottom: solid 2px black;
		align-items: center;
		padding: 1rem;
		text-align: center;
	}

	.nav-container > .nav-item {
		list-style-type: none;
		flex: 1 1 30px;
	}

	.nav-heading {
		list-style-type: none;
		margin-left: 0;
		width: 50%;
	}
`;

export default Navbar;
