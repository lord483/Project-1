import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Slider from "../slider";
import styled from "styled-components";
import bgImage from "../../assets/class_img1.jpg";

function Home() {
	return (
		<Wrapper>
			<Navbar />

			<section className="intro_section">
				<div className="intro_text">
					<h1>Lorem ipsum dolor sit amet.</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
						aliquam est facilis tempora rerum vel quaerat optio deleniti itaque,
						quam iusto expedita nemo fugiat voluptate quis fugit tenetur neque
						eaque? Obcaecati, alias aperiam. Sint at sequi facilis nulla minima
						repellendus, nostrum debitis vitae fugit iure, nisi quo similique.
						Ad beatae voluptatem nam velit expedita iste quaerat provident autem
						adipisci odio. Voluptatem suscipit dicta Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Unde aliquam est facilis tempora rerum
						vel quaerat optio deleniti itaque, quam iusto expedita nemo fugiat
						voluptate quis fugit tenetur neque aboriosam architecto nulla
						nesciunt, quaerat tempora officia illo distinctio maiores quisquam
						nam consequatur ea sequi modi incidunt error fug
						<button className="intro_btn btn">Learn More</button>
					</p>
				</div>
			</section>
			<Slider />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.main`
	position: relative;
	top: 3.3rem;

	.intro_section {
		display: flex;
		flex-direction: column;
		display: -webkit flex;
		align-items: center;
		background: url(${bgImage});
		background-size: cover;
		height: 30rem;
	}

	.intro_text {
		position: relative;
		margin: auto;
		display: flex;
		padding: 3rem;
		justify-content: space-evenly;
		align-items: center;
	}

	.intro_text h1 {
		font-weight: 600;
		color: #deffff;
		margin-left: 5rem;
		font-size: 40px;
		width: 30%;
		line-height: 2;
	}

	.intro_text p {
		backdrop-filter: blur(5px);
		color: #ffffff;
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		width: 40%;
		min-width: 500px;
		padding: 2rem;
		box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.4);
	}

	.intro_btn {
		display: block;
		margin-top: 1rem;
		height: 40px;
		width: 125px;
		color: white;
		background-color: rgb(43, 122, 120);
		border: none;
		border-radius: 7px;
		font-size: 0.8rem;
		padding-bottom: 3px;
		cursor: pointer;
	}

	@media screen and (max-width: 767px) {
		position: relative;

		.intro_section {
			height: auto;
		}

		.intro_text {
			display: flex;
			flex-direction: column;
			padding: 1rem;
			width: 100%;
		}

		.intro_text h1 {
			width: 100%;
			padding: 1rem;
			margin: auto;
			text-align: center;
		}

		.intro_text p {
			width: 90%;
			min-width: 300px;
			padding: 1rem;
			margin: 2rem auto;
		}
	}
`;

export default Home;
