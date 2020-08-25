import React, { Component } from 'react';
import '../styles/Form.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Linkedin from '../images/linkedinIcon.png';
class Form extends Component {
	render() {
		return (
			<div className="form-container">
				<Card className="card-container">
					<CardContent>
						<h1 className="form-title" style={{ textAlign: 'center' }}>
							Get in touch!
						</h1>

						<form name="contact" method="post">
							<input type="hidden" name="form-name" value="contact" />
							<div className="form-item">
								<label>
									<Input placeholder="Your Name" name="name" />
								</label>
							</div>
							<div className="form-item">
								<label>
									<Input placeholder="Your Email" name="email" />
								</label>
							</div>
							<div className="form-item">
								<TextField
									id="standard-multiline-flexible"
									// label="Multiline"
									multiline
									rowsMax={10}
									name="message"
									placeholder="Message"
								/>
							</div>

							<div className="form-item" style={{ textAlign: 'center' }}>
								<Button
									type="submit"
									variant="contained"
									className="submit-button"
									style={{ color: 'white' }}
								>
									Send
									<span
										role="img"
										aria-label="send"
										style={{ paddingLeft: '5px' }}
									>
										📬
									</span>
								</Button>
							</div>
						</form>
						<div className="form-item" style={{ textAlign: 'center' }}>
							<Button
								className="linkedin-button"
								variant="contained"
								component="a"
								href="https://www.linkedin.com/in/matthughes-dev/"
								target="_blank"
							>
								Or, connect with me on
								<img
									src={Linkedin}
									alt="linkedin logo"
									className="linkedin-icon"
								/>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default Form;
