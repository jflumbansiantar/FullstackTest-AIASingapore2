import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #f3f3f3;
	padding: 10px;
	width: 550px;
	box-shadow: 0 0 8px 8px #d0d0d0;
	border-radius: 10px;
`;

export const ButtonLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.5rem;

	&:hover {
		color: #0467fb;
		transition: 0.3s ease-out;
	}
`;