import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Content
					title="What We "
					titlebold="Do"
					theme="black"
					textalign="center"
					text={
						<p>
							We create a experiences that transform business for your brand and
							your users <br /> across all devices for the digital economy.
						</p>
					}
					media={{ type: 'image', url: '../media/icons.png', alt: 'icons' }}
				/>
				<Content
					title="Call for "
					titlebold="Superheroes"
					theme="white"
					textalign="center"
					cta="See Our Openings"
					link="/see-our-openings"
					background='linear-gradient(0deg, rgba(103, 103, 103, 0.9), rgba(103, 103, 103, 0.9)), url("../media/superheroes.png")'
				/>
				<Content
					textalign="center"
					media={{ type: 'video', url: 'https://youtu.be/STts1GjRrzI' }}
				/>
				<Map title="Get in " titlebold="touch" />
				<Content
					textalign="center"
					title="Contact "
					titlebold="Us"
					text={
						<p>
							Fill out the form below and someone will get back to you faster
							than a speeding bullet.
						</p>
					}
					theme="black"
					form={true}
				/>
				<Footer
					text={
						<p>
							meltmedia &copy; copyright 2014 - Interactive{' '}
							<span>Superheroes</span>
						</p>
					}
				/>
			</div>
		</Router>
	);
}

export default App;
