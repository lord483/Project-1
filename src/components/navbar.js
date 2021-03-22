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
	box-sizing: border-box;
	.nav-container {
		z-index: 2;
		// -webkit-backdrop-filter: blur(6px);
		// backdrop-filter: blur(6px);

		// /* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
		// @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		// 	background-color: rgba(222, 242, 241 0.9);
		// }

		position: fixed;
		width: 100%;
		background-color: rgb(43, 122, 120);

		top: 0px;
		display: flex;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		align-items: center;
		height: 3.3rem;
	}

	.nav-item {
		list-style-type: none;
		width: 200px;
		text-align: center;
		height: 99%;
	}

	.nav-item:nth-child(2) {
		margin-left: 10%;
	}

	.nav-item a,
	.nav-heading a {
		color: #def2f1;
	}

	.nav-item a {
		display: inline-block;
		height: 100%;
		padding-top: 15px;
		width: 100%;
		border-bottom: solid 2px rgba(255, 255, 255, 0);
		transition: all 0.1s ease-in;
	}

	.nav-item a:hover {
		border-bottom: solid 2px #def2f1;
		
	}

	.nav-heading {
		list-style-type: none;
		margin-left: 0;
		width: 34.5%;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	
	}
`;

export default Navbar;
