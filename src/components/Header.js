import Nav from './Nav';
import Content from './Content';

const Header = () => {
	return (
		<header
			style={{
				background: `linear-gradient(0deg, rgba(108, 155, 200, 0.9), rgba(108, 155, 200, 0.9)), url("../media/hero-background.png")`,
				backgroundRepeat: `no-repeat`,
				backgroundSize: `cover`,
			}}
		>
			<Nav logoSrc="../media/logo.png" logoAlt="logo" />
			<div className="two-container">
				<div className="item">
					<Content
						title="Heroic websites and apps "
						titlebold="for all viewports."
						text={
							<p>
								We’re meltmedia and we’re on a mission. Quite simply, it’s to
								make our clients’ lives easier. We create an environment where
								business, technology, and design experts join forces to deliver
								innovative and sustainable digital solutions. And we have plenty
								of geeky fun along the way.
							</p>
						}
						cta="See Our Work"
						theme="white"
						link="/see-our-work"
					/>
				</div>
				<div className="item">
					<div className="image-stack">
						<div className="image-stack-bottom">
							<img src="../media/iPad Air Silver.png" alt="iPad" />
						</div>
						<div className="image-stack-top">
							<img src="../media/iPhone 5S White.png" alt="iPhone" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
