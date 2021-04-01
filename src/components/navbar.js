import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [navHeight, setNavHeight] = useState("6%");

	const customStyle = {
		height: navHeight,
	};

	useEffect(() => {
		if (isNavOpen) {
			setNavHeight("28.6%");
		} else {
			setNavHeight("6%");
		}
	}, [isNavOpen]);

	return (
		<Wrapper>
			<ul className="nav-container" style={customStyle}>
				<li className="nav-heading">
					<h1>
						<Link to="/">Home</Link>
					</h1>
					<div
						className="mobile-nav-container"
						onClick={() => setIsNavOpen(!isNavOpen)}
					>
						<div className="mobile-nav-btn"></div>
						<div className="mobile-nav-btn"></div>
						<div className="mobile-nav-btn"></div>
					</div>
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
		width: 10%;
		text-align: center;
		height: 99%;
	}

	.nav-item:nth-child(2) {
		margin-left: 15%;
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
	}

	.mobile-nav-container {
		display: hidden;
	}

	@media screen and (max-width: 767px) {
    .nav-container {
			display: flex;
			flex-direction: column;
			height: 55px;
			overflow: hidden;
			margin: auto;
			transition: all 0.2s ease-in;
		}

		.nav-heading {
			margin: 0.4rem auto;
		}

		.nav-heading, .nav-item {
			width:100%;
		}

		.nav-item:nth-child(2) {
			margin-left: auto;
		}

		.nav-item {
			padding: 0.25rem;
		}

		.nav-item a {
			border-bottom: none;
			padding: 0.5rem;
		}

		.nav-item a:hover {
			border-bottom: none;
		}

		.mobile-nav-container {
			position: relative;
			bottom: 40%;
			left: 40%;
			display: inline-block;
			cursor: pointer;
		}

		.mobile-nav-btn {
			width: 20px;
			height: 2px;
			background: white;
			margin-top: 5px;
			margin-bottom: 5px;
		}
}
	}
`;

export default Navbar;
