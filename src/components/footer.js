import React from "react";
import styled from "styled-components";
import {
	FaFacebookSquare,
	FaInstagram,
	FaTwitter,
	FaPhoneSquareAlt,
} from "react-icons/fa";

function Footer() {
	return (
		<Wrapper>
			<h1 className="footer-logo">LOGO</h1>
			<div className="contact-form-container">
				<form className="contact-form">
					<input type="text" name="name" id="name" placeholder="Your Name" />
					<input type="email" name="email" id="email" placeholder="Email" />
					<textarea
						name="message"
						id="msg"
						placeholder="Write your query here..."
						rows="7"
						cols="40"
					/>
				</form>
				<button type="submit" className="form-btn">
					Submit
				</button>
			</div>

			<div className="sitemap-social">
				<div className="sitemap-container">
					<h4>Site Map</h4>
					<ul className="sitemap-list">
						<li className="sitemap-item">About Us</li>
						<li className="sitemap-item">Our Courses</li>
						<li className="sitemap-item">Contact Us</li>
						<li className="sitemap-item">Gallery</li>
						<li className="sitemap-item">More Link</li>
					</ul>
				</div>

				<div className="social-container">
					<h4>Connect to us:</h4>
					<ul className="social-list">
						<li className="social-item facebook">
							<a href="#">
								<FaFacebookSquare className="social-icon fb-icon" /> Facebook
							</a>
						</li>
						<li className="social-item instagram">
							<a href="#">
								<FaInstagram className="social-icon in-icon" /> Instagram
							</a>
						</li>
						<li className="social-item twitter">
							<a href="#">
								<FaTwitter className="social-icon tw-icon" /> Twitter
							</a>
						</li>
						<li className="social-item phone">
							<a href="tel:555-555-1212">
								<FaPhoneSquareAlt className="social-icon" /> 555-555-1212
							</a>
						</li>
					</ul>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	background: #17252a;
	color: #def2f1;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 1rem;

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
	}

	.contact-form input,
	.contact-form textarea {
		margin-top: 0.5rem;
		border-radius: 4px;
		border: none;
		padding: 0.25rem;
	}

	.contact-form input {
		height: 25px;
		width: 75%;
	}

	.contact-form textarea {
		margin-top: 1.5rem;
	}

	.form-btn {
		margin-top: 1rem;
		width: 25%;
		height: 25px;
		border-radius: 5px;
		background-color: rgb(43, 122, 120);
		color: #def2f1;
		border: none;
		padding: 0.25rem;
	}

	.sitemap-container,
	.social-container {
		width: 50%;
		list-type: none;
		height: 100%;
	}

	.sitemap-container h4,
	.social-container h4 {
		margin-bottom: 1rem;
		margin-left: 0;
		padding: 0.5rem;
		text-align: left;
	}

	.sitemap-social {
		display: flex;
		justify-content: space-evenly;
		width: 30%;
	}

	ul {
		display: flex;
		flex-direction: column;
	}

	.social-item,
	.sitemap-item {
		list-style-type: none;
		margin: 0.25rem auto;
		margin-left: 0;
		padding: 0.25rem;
	}

	a {
		text-decoration: none;
		color: #def2f1;
	}

	.social-icon {
		margin-right: 6px;
	}

	.facebook:hover .fb-icon {
		color: #4267b2;
	}
	.in-icon {
		border-radius: 5px;
	}

	.instagram:hover .in-icon {
		background: linear-gradient(
			135deg,
			#405de6,
			#5b51d8,
			#833ab4,
			#c13584,
			#e1306c,
			#fd1d1d,
			#f56040,
			#f77737,
			#fcaf45,
			#ffdc80
		);
	}

	.twitter:hover .tw-icon {
		color: #1da1f2;
	}

	@media screen and (max-width: 767px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;

		.sitemap-social {
			display: flex;
			justify-content: space-evenly;
			width: 90%;
			margin: 3rem auto;
			margin-left: 10%;
		}

		.footer-logo {
			margin: 5rem auto;
			margin-left: 10%;
			padding: 1rem;
		}
		.contact-form-container {
			margin: auto;
			margin-left: 12%;
		}
	}
`;

export default Footer;
