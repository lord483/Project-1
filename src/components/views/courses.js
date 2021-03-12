import React from "react";
import Navbar from "../navbar";
import Card from "../card";
import data from "../../assets/data";
import styled from "styled-components";
function Courses() {
	return (
		<Wrapper>
			<Navbar />
			<h1>Our Courses</h1>
			<div className="container">
				{data.map((item) => {
					return <Card className="class_card" key={item.id} {...item} />;
				})}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	.container {
		display: flex;
		flex-wrap: wrap;
	}
	.class_card {
		flex: 1 1 200px;
	}
`;

export default Courses;
