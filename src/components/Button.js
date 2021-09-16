import { Link } from 'react-router-dom';
const Button = ({
	border,
	color,
	padding,
	radius,
	backgroundColor,
	margin,
	text,
	type,
	link,
}) => {
	return (
		<button
			style={{
				border: border,
				color: color,
				padding: padding,
				radius: radius,
				backgroundColor: backgroundColor,
				margin: margin,
			}}
			type={type}
		>
			{link ? (
				<Link className="button-link" style={{ color: color }} to={link}>
					{text}
				</Link>
			) : (
				text
			)}
		</button>
	);
};

export default Button;
