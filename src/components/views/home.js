import React from "react";
import Navbar from "../navbar";
// import Footer from "../footer";
// import Card from "../card";
// import class_img from "/images/class_img.jpg";
import styled from "styled-components";
import { IoPersonCircle } from "react-icons/io5";

function Home() {
	return (
		<Wrapper>
			<Navbar />
			{/* <Card />
			<Footer /> */}
			<div className="home-container">
				<section className="intro_section">
					<div className="intro_text">
						<h1>Lorem ipsum dolor sit amet.</h1>
						<button className="intro_btn btn">Learn More</button>
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

				<section className="testimonials_container">
					<div className="students">
						<IoPersonCircle className="student_icon" />
					</div>
					<div className="testimonials">
						<h1>What Our Students say about Us?</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius
							accusamus facilis eveniet, cupiditate expedita, ex voluptas autem
							nobis voluptates ut facere molestiae maiores consequatur rem
							consequuntur eaque. Culpa, unde! Esse culpa architecto eos
							adipisci! Quibusdam laboriosam architecto nulla nesciunt, quaerat
							tempora officia illo distinctio maiores quisquam nam consequatur
							ea sequi modi incidunt error fugit optio recusandae maxime!
							Expedita, cum!
						</p>
					</div>
				</section>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	position: relative;
	top: 4rem;

	.intro_section {
		padding: 1.5rem 16.25%;
		display: flex;
		display: -webkit flex
		align-items: center;
		background: url("/images/class_img1.jpg");
		background-size: cover;
		height: 30rem;
	}

	.intro_text {
		margin: auto;
		display: flex;
	}

	.intro_text h1 {
		font-weight: 600;
		color: #deffff;
		margin: auto;
		font-size: 40px;
		width: 40%;
		line-height: 2;
		padding: 1rem;
	}

	.intro_text p {
		backdrop-filter: blur(5px);
		margin: auto;
		color: #ffffff;
		background-color: rgba(240,240,240, 0.3);
		border-radius: 10px;
		width: 35%;
		padding: 1rem;
		box-shadow: 5px 10px 18px rgba(0,0,0,0.4);
	}

	.intro_btn {
		position: absolute;
		top: 50%;
		left: 20.5%;
		height: 40px;
		width: 125px;
		color: white;
		background-color: rgba(43, 122, 120, 0.8);
		border: none;
		border-radius: 7px;
		font-size: 0.8rem;
		padding-bottom: 3px;
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
