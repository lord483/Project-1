import React from "react";
import styled from "styled-components";

function Navbar() {
	return (
		<React.Fragment>
			<h1>Icon</h1>
			<ul>
				<li>About Us</li>
				<li>Our Courses</li>
				<li>Contact Us</li>
				<li>Gallary</li>
			</ul>
		</React.Fragment>
	);
}

const Wrapper = styled.nav``;

export default Navbar;
