import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Nav = ({ logoSrc, logoAlt }) => {
	const [clicked, setClicked] = useState(false);
	return (
		<div className="navBar">
			<a href="/" title="Home Page">
				<img className="logo" src={logoSrc} alt={logoAlt} />
			</a>
			<div className="menu" onClick={() => setClicked(!clicked)}>
				{clicked ? <FaTimes className="icon" /> : <FaBars className="icon" />}
				<nav className={clicked ? 'show' : ''}>
					<ul>
						<li>
							<NavLink exact activeClassName="active" to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName="active" to="/work">
								Work
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName="active" to="/culture">
								Culture
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName="active" to="/labs">
								Labs
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName="active" to="/thoughts">
								Thoughts
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName="active" to="/contact">
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Nav;
