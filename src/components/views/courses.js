import React from "react";
import Navbar from "../navbar";
import Card from "../card";
import data from "../../assets/data";
import styled from "styled-components";

function Courses() {
	return (
		<Wrapper>
			<Navbar />
			<div>
				<h1 className="course_heading">Our Courses</h1>
				<div className="container">
					{data.map((item) => {
						return <Card key={item.id} {...item} />;
					})}
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	position: relative;
	top: 5rem;
	text-align: center;

	.container {
		display: flex;
		flex-wrap: wrap;
		width: 75%;
		margin: auto;
	}
	.class_card {
		flex: 1 1 27%;
		padding: 2rem;
	}
`;

export default Courses;
