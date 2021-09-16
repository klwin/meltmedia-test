import Button from './Button';
import Form from './Form';
import ReactPlayer from 'react-player/lazy';
const Content = ({
	title,
	titlebold,
	text,
	cta,
	link,
	background,
	media,
	theme,
	textalign,
	form,
}) => {
	return (
		<div
			className={`content-container ${theme}`}
			style={{ background: background, textAlign: textalign }}
		>
			{title && (
				<h4>
					{title}
					<span>{titlebold}</span>
				</h4>
			)}
			{text}
			{cta ? (
				<Button
					color="white"
					backgroundColor="transparent"
					border="1px solid white"
					padding="10px 30px"
					text={cta}
					link={link}
					margin="15px 0px"
				/>
			) : null}
			{media &&
				(media.type === 'image' ? (
					<img src={media.url} alt={media.alt} />
				) : (
					<ReactPlayer
						className="video-wrapper"
						url={media.url}
						controls={true}
					/>
				))}
			{form ? <Form /> : null}
		</div>
	);
};

export default Content;
