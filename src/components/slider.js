import React, { useEffect, useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { studentsData } from "../assets/data";
import "./slider.css";

const Slider = () => {
	const [index, setIndex] = useState(0);
	const [size, setSize] = useState(0);
	const slideContainer = useRef();

	// Custom CSS for sliding animation
	const customStyle = {
		transform: `translateX(${-size * index}px)`,
		transition: "transform 0.4s ease-in-out",
	};

	const prevSlide = () => {
		index <= 0 ? setIndex(studentsData.length - 1) : setIndex(index - 1);
	};

	const nextSlide = () => {
		index >= studentsData.length - 1 ? setIndex(0) : setIndex(index + 1);
	};

	/* 
	Get container width,
	setInterval for auto sliding,
	and clear interval at the end to avoid glitches and bugs
	*/
	useEffect(() => {
		setSize(slideContainer.current.clientWidth);
		const slideInterval = setInterval(nextSlide, 5000);
		return () => clearInterval(slideInterval);
	}, [nextSlide]);

	return (
		<main className="wrapper">
			<div className="main-title">
				<h1>What people say about us ?</h1>
			</div>
			<div className="carousel-container">
				<div className="carousel-slide" style={customStyle}>
					{studentsData.map((person, personIndex) => {
						const { id, name, title, review, image } = person;

						return (
							<article
								key={id}
								id={id}
								className="slide-container"
								ref={slideContainer}
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
			<button id="prevBtn" onClick={prevSlide}>
				<AiOutlineLeft />
			</button>
			<button id="nextBtn" onClick={nextSlide}>
				<AiOutlineRight />
			</button>
		</main>
	);
};

export default Slider;
