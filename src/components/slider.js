import React, { useRef, useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { studentsData } from "../assets/data";
import "./slider.css";

const Slider = () => {
	const carouselContainer = useRef();
	const carouselSlide = useRef();
	const carouselArticle = useRef();

	// Slide Counter
	let counter = 0;
	const size = carouselArticle[0].clientWidth;

	const nextSlide = () => {
		if (counter > carouselArticle.current.length - 1) return;
		carouselSlide.current.style.transition = "transform 0.4s ease-in-out";
		counter++;
		carouselSlide.current.style.transform =
			"translateX(" + -size * counter + "px)";
	};

	const prevSlide = () => {
		if (counter < 0) return;
		carouselSlide.current.style.transition = "transform 0.4s ease-in-out";
		counter--;
		carouselSlide.current.style.transform =
			"translateX(" + -size * counter + "px)";
	};

	useEffect(() => {
		const slideInterval = setInterval(nextSlide, 3000);
		return () => {
			carouselSlide.current.addEventListener("mouseenter", () => {
				clearInterval(slideInterval);
			});
		};
	}, []);

	useEffect(() => {
		carouselSlide.current.addEventListener("transitionend", () => {
			if (counter < 0) {
				carouselSlide.style.transition = "none";
				counter = carouselArticle.length - 1;
				carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
			} else if (counter > carouselArticle.length - 1) {
				carouselSlide.style.transition = "none";
				counter = carouselArticle.length - counter;
				carouselSlide.style.transform =
					"translateX(-" + -size * counter + "px)";
			}
		});
	}, []);

	return (
		<main className="wrapper">
			<div className="mian-title">
				<h1>What people say about us ?</h1>
			</div>
			<div className="carousel-container" ref={carouselContainer}>
				<div className="carousel-slide" ref={carouselSlide}>
					{studentsData.map((person, personIndex) => {
						const { id, name, title, review, image } = person;

						return (
							<article
								key={id}
								id={id}
								className="slide-container"
								ref={carouselArticle}
							>
								<img src={image} alt={name} className="person-img" />
								<h3>{name}</h3>
								<h4 className="title">{title}</h4>
								<p className="text">{review}</p>
							</article>
						);
					})}
				</div>
			</div>
			<button id="prevBtn" onClick={prevSlide()}>
				<AiOutlineLeft />
			</button>
			<button id="nextBtn" onClick={nextSlide()}>
				<AiOutlineRight />
			</button>
		</main>
	);
};

export default Slider;
