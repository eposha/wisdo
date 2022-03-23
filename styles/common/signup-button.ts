export const LinkButton = styled.a<{ $isSignUp?: boolean }>`
	margin-left: 10px;
	padding: 5px 20px;
	height: 40px;
	font-size: 15px;
	font-weight: 700;
	color: #8b5fff;
	border-radius: 20px;
	border: solid 2px #8b5fff;

	${({ $isSignUp }) => $isSignUp && `color: #fff; background-color: #8b5fff;`};
`;

import styled from 'styled-components';
