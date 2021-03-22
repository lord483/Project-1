import React from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { studentsData } from "../assets/data";

const Slider = () => {
	return (
		<Wrapper>
			<div className="mian-title">
				<h1>What people say about us ?</h1>
			</div>
			<div className="carousel-container">
				<div className="carousel-slide">
					{studentsData.map((person, personIndex) => {
						const { id, name, title, review, image } = person;

						return (
							<article key={id} id={id} className="slide-container">
								<img src={image} alt={name} className="person-img" />
								<h3>{name}</h3>
								<h4 className="title">{title}</h4>
								<p className="text">{review}</p>
							</article>
						);
					})}
				</div>
			</div>
			<button id="prevBtn">
				<AiOutlineLeft />
			</button>
			<button id="nextBtn">
				<AiOutlineRight />
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	position: relative;
	* {
		padding: 0px;
		margin: 0px;
		box-sizing: border-box;
	}

	.carousel-container {
		width: 80%;
		margin: auto;
		overflow: hidden;
	}

	.carousel-slide {
		display: flex;
		margin: auto;
		width: 100%;
	}

	.person-img {
		margin-left: 36%;
		margin-bottom: 1rem;
		margin-top: 1rem;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		padding: 1rem;
		box-shadow: 4px 15px 18px rgba(0, 0, 0, 0.5);
	}

	.slide-container {
		min-width: 80%;
		max-width: 80%;
		margin: auto;
	}

	.slide-container:first-child {
		margin-left: 12.5%;
	}

	.slide-container:last-child {
		margin-right: 12.5%;
	}

	.slide-container h3 {
		margin-left: 39.5%;
		margin-bottom: 0.5rem;
	}

	.slide-container p,
	h4 {
		margin-left: 9.5%;
		text-align: center;
		width: 70%;
		margin-top: 0.5rem;
		padding: 0.5rem;
		line-height: 1.5;
	}

	#prevBtn,
	#nextBtn {
		font-size: 2rem;
		opacity: 0.6;
		background: rgba(0, 0, 0, 0);
		border: none;
	}

	#prevBtn {
		position: absolute;
		top: 50%;
		left: 3%;
	}

	#nextBtn {
		position: absolute;
		top: 50%;
		right: 3%;
	}
`;

window.onload = () => {
	const carouselContainer = document.querySelector(".carousel-container");
	const carouselSlide = document.querySelector(".carousel-slide");
	const carouselArticle = document.querySelectorAll(".slide-container");

	// Buttons
	const prevBtn = document.querySelector("#prevBtn");
	const nextBtn = document.querySelector("#nextBtn");

	// Slide Counter
	let counter = 0;
	const size = carouselArticle[0].clientWidth;

	// Event Handlers

	const slideEvent = () => {
		if (counter > carouselArticle.length - 1) return;
		carouselSlide.style.transition = "transform 0.4s ease-in-out";
		counter++;
		carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
	};

	const slideInterval = setInterval(slideEvent, 3000);

	// Stop carousel on MouseOver event
	carouselContainer.addEventListener("mouseenter", () => {
		clearInterval(slideInterval);
	});

	// Button eventListeners
	nextBtn.addEventListener("click", () => {
		if (counter > carouselArticle.length - 1) return;
		carouselSlide.style.transition = "transform 0.4s ease-in-out";
		counter++;
		carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
	});

	prevBtn.addEventListener("click", () => {
		if (counter < 0) return;
		carouselSlide.style.transition = "transform 0.4s ease-in-out";
		counter--;
		carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
	});

	// Transition end Listener for removing wierd animation
	carouselSlide.addEventListener("transitionend", () => {
		if (counter < 0) {
			carouselSlide.style.transition = "none";
			counter = carouselArticle.length - 1;
			carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
		} else if (counter > carouselArticle.length - 1) {
			carouselSlide.style.transition = "none";
			counter = carouselArticle.length - counter;
			carouselSlide.style.transform = "translateX(-" + -size * counter + "px)";
		}
	});
};

export default Slider;
