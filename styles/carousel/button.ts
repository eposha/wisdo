import styled from 'styled-components';

export const ButtonSlider = styled.button<{ $isRightButton?: boolean }>`
	position: absolute;
	top: 11px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border: solid 1px rgba(64, 61, 55, 0.16);
	background-color: #fff;
	border-radius: 50%;
	outline: 0;
	cursor: pointer;
	touch-action: manipulation;
	z-index: 1;

	${({ $isRightButton }) =>
		$isRightButton ? 'right: -60px; transform: rotate(180deg);' : 'left: -60px;'}

	${({ disabled }) => disabled && '  cursor: default; opacity: 0.3;'};
`;
