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

			<div className="home-container">
				<section className="intro_section">
					<div className="intro_text">
						<div className="intro-top">
							<h1 className="intro-heading">Lorem ipsum dolor sit amet.</h1>
							<button className="intro_btn btn">Learn More</button>
						</div>

						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
							aliquam est facilis tempora rerum vel quaerat optio deleniti
							itaque, quam iusto expedita nemo fugiat voluptate quis fugit
							tenetur neque eaque? Obcaecati, alias aperiam. Sint at sequi
							facilis nulla minima repellendus, nostrum debitis vitae fugit
							iure, nisi quo similique. Ad beatae voluptatem nam velit expedita
							iste quaerat provident autem adipisci odio. Voluptatem suscipit
							dicta Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Unde aliquam est facilis tempora rerum vel quaerat optio deleniti
							itaque, quam iusto expedita nemo fugiat voluptate quis fugit
							tenetur neque aboriosam architecto nulla nesciunt, quaerat tempora
							officia illo distinctio maiores quisquam nam consequatur ea sequi
							modi incidunt error fug
						</p>
					</div>
				</section>
				<Slider />
			</div>
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.main`
	position: relative;
	top: 3.3rem;

	.intro_section {
		display: flex;
		display: -webkit flex
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
		width: 30rem;
		line-height: 2;
	}

	.intro_text p {
		backdrop-filter: blur(5px);
		color: #ffffff;
		background-color: rgba(0,0,0, 0.1);
		border-radius: 10px;
		width: 40%;
		min-width: 500px;
		padding: 2rem;
		box-shadow: 5px 10px 15px rgba(0,0,0,0.4);
	}

	.intro_btn {
		position: relative;
		top: 35%;
		left: 14%;
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

	.testimonials_container {
		display: flex;
		align-items: center;
		padding: 1rem;
		margin: 1rem auto 1rem auto;
		height: auto;
		background-color: #2b7a78;
	}

	.students {
		flex: 1;
		text-align: center;
	}

	.testimonials {
		flex: 2;
		justify-content: center;
	}

	.student_icon {
		font-size: 6rem;
		flex: 1;
	}
`;

export default Home;
