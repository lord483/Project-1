import React from "react";
import styled from "styled-components";

function Card({ id, std, price, curriculum }) {
	return (
		<Wrapper>
			<div className="card_head">Class: {std}th</div>
			<div className="card_body">{curriculum}</div>
			<div className="card_footer">Price: Rs.{price}</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	text-align: center;
	padding: 0.5rem;

	div {
		padding: 0.5rem;
		border: solid 1px grey;
	}

	.card_head {
		border-bottom: none;
		border-radius: 4px 4px 0 0;
	}

	.card_footer {
		border-top: none;
		border-radius: 0 0 4px 4px;
	}
`;

export default Card;
