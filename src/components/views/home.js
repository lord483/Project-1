import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Card from "../card";
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
						<h1>Intro</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
							fugit quasi illo numquam omnis, voluptas autem quia, esse tenetur
							suscipit placeat officiis earum veritatis dolores nihil assumenda
							eos, quas adipisci? Voluptates et eveniet, non, recusandae
							repellendus sunt molestias tempore nesciunt nemo quis ipsum
							consectetur quae facere harum incidunt iste quaerat quam! Incidunt
							mollitia, assumenda minus modi doloribus doloremque harum nisi?
							Odit nam assumenda, adipisci aliquid recusandae doloribus harum
							amet perferendis neque ipsa magnam, exercitationem quasi beatae,
							placeat molestias tenetur quidem laudantium sunt ad minima animi!
							Et necessitatibus animi veritatis officia. Repellendus, porro?
							Ipsam odio, aliquam omnis rem maiores eaque quis exercitationem
							recusandae tempore enim quo ab incidunt saepe iste atque inventore
							ad fugiat non voluptates assumenda, quasi illo voluptatum quaerat.
						</p>
					</div>
					<div className="intro_image">
						<img src="/images/class_img.jpg" alt="class" />
					</div>
				</section>

				<section className="info_section">
					<h1>Info</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
						aliquam est facilis tempora rerum vel quaerat optio deleniti itaque,
						quam iusto expedita nemo fugiat voluptate quis fugit tenetur neque
						eaque? Obcaecati, alias aperiam. Sint at sequi facilis nulla minima
						repellendus, nostrum debitis vitae fugit iure, nisi quo similique.
						Ad beatae voluptatem nam velit expedita iste quaerat provident autem
						adipisci odio. Voluptatem suscipit dicta sint et laudantium libero
						fugit sunt ipsam a quia tempora nostrum quidem veritatis modi ipsum
						maxime culpa minima nemo, numquam deserunt saepe? Ducimus magnam
						incidunt eligendi dolore! Explicabo sunt a esse quam quod similique
						recusandae. Nemo accusamus laborum aliquid tenetur magnam nisi quasi
						tempore optio, aperiam repellat fugiat expedita repellendus numquam
						voluptates deserunt nam sapiente commodi nobis! Sit, aspernatur at
						iure, provident molestiae atque ab, distinctio placeat quis illum
						sed eum aperiam consequatur optio accusamus in aliquam. Voluptas
						nobis explicabo culpa, voluptatibus omnis atque porro eaque facere?
					</p>
				</section>

				<section className="testimonials_container">
					<div className="students">
						<IoPersonCircle className="student_icon" />
					</div>
					<div className="testimonials">
						<h1>Slider</h1>
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
	top: 64px;
	.intro_section {
		padding: 1.5rem 16.25%;
		display: flex;
		align-items: center;
		background-color: #3aafa9;
	}

	.intro_image img {
		width: 100%;
		padding: 0.5rem;
	}

	.intro_image {
		width: 50%;
		margin-left: 6.85rem;
	}

	.intro_text {
		width: 40%;
		margin-right: 1rem;
	}

	.intro_text h1 {
		margin-bottom: 1rem;
	}

	.info_section {
		padding: 1.5rem 16.25%;
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
