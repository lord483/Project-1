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
	.nav-container {
		-webkit-backdrop-filter: blur(6px);
		backdrop-filter: blur(6px);

		/* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
		@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
			background-color: rgba(222, 242, 241 0.9);
		}

		position: fixed;
		width: 100%;
		background-color: rgba(43, 122, 120, 0.7);

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

	.nav-item {
		list-style-type: none;
		flex: 1 1 30px;
	}

	.nav-item a {
		color: #def2f1;
	}

	.nav-heading {
		list-style-type: none;
		margin-left: 0;
		width: 50%;
	}
`;

export default Navbar;
