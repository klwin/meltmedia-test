import React from 'react';
import { useState } from 'react';
import { FaTimes, FaAddressBook } from 'react-icons/fa';
const Map = ({ title, titlebold, background }) => {
	const [showAddressInfo, setShowAddressInfo] = useState(true);
	return (
		<div className="mapcontainer">
			<div
				className="addressInfo"
				onClick={() => setShowAddressInfo(!showAddressInfo)}
			>
				{showAddressInfo ? (
					<FaTimes className="icon" />
				) : (
					<FaAddressBook className="icon" />
				)}
				<div className={showAddressInfo ? 'show' : 'close'}>
					<div className="title section">
						<h4>
							{title}
							<span>{titlebold}</span>
						</h4>
					</div>
					<div className="address section">
						<p className="bold">Address:</p>
						<p>
							1255 W Rio Salado Pkwy
							<br />
							Suite 209
							<br />
							Tempe, AZ 85281
						</p>
					</div>
					<div className="phone section">
						<p className="bold">Phone:</p>
						<p>602-340-9440</p>
					</div>
					<div className="social section">
						<p className="bold">Let's be friends:</p>
						<img
							style={{ margin: '10px 0px' }}
							src="../media/social-icons.png"
							alt="social icons"
						/>
					</div>
				</div>
			</div>
			<div className="map">
				<iframe
					title="Meltmedai Map"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13318.789441044482!2d-111.8971277!3d33.4311337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x911fa4b39b591145!2smeltmedia!5e0!3m2!1sen!2sus!4v1631726218245!5m2!1sen!2sus"
					style={{ border: '0', width: '100%', height: '450px' }}
					loading="lazy"
				></iframe>
			</div>
		</div>
	);
};

export default Map;
