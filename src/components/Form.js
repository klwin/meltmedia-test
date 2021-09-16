import React, { useState } from 'react';
import Button from './Button';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [superpower, setSuperpower] = useState('');
	const [mission, setMission] = useState('');
	const [errors, setErrors] = useState([]);

	const change = (e) => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'superpower':
				setSuperpower(value);
				break;
			default:
				setMission(value);
				break;
		}
	};

	const submit = (e) => {
		e.preventDefault();
		setErrors(() => []);
		if (name || email || superpower || mission === '') {
			setErrors((oldErrors) => [
				...oldErrors,
				'Please fill out all the fields.',
			]);
		}
		if (!validateEmail(email)) {
			setErrors((oldErrors) => [...oldErrors, 'Please enter a valid email.']);
		}
	};

	const validateEmail = (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	return (
		<React.Fragment>
			{errors.length !== 0 && (
				<div className="error-container">
					<h2 className="validation-errors-label">Validation errors</h2>
					<div className="validation-errors">
						<ul>
							{errors.map((error, i) => (
								<li key={i}>{error}</li>
							))}
						</ul>
					</div>
				</div>
			)}
			<form onSubmit={submit}>
				<div className="one-container">
					<input
						id="name"
						name="name"
						type="text"
						placeholder="What is your name?"
						className="name"
						value={name}
						onChange={change}
					/>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="What is your email address?"
						className="email"
						value={email}
						onChange={change}
					/>
					<input
						id="superpower"
						name="superpower"
						type="text"
						placeholder="What is your superpower?"
						className="superpower"
						value={superpower}
						onChange={change}
					/>
					<textarea
						id="mission"
						name="mission"
						type="text"
						placeholder="What is your mission?"
						className="mission"
						value={mission}
						onChange={change}
					></textarea>
				</div>
				<Button
					color="black"
					backgroundColor="transparent"
					border="1px solid black"
					padding="10px 30px"
					text="See Our Message"
					margin="15px 0px"
					type="submit"
				/>
			</form>
		</React.Fragment>
	);
};

export default Form;
