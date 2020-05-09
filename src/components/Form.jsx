import React, { Component } from 'react';
import '../styles/Form.css';
class Form extends Component {
	render() {
		return (
			<div className="form-container">
				<form name="contact" method="post">
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<label>
							Your Name: <input type="text" name="name" />
						</label>
					</p>
					<p>
						<label>
							Your Email: <input type="email" name="email" />
						</label>
					</p>
					<p>
						<label>
							Message: <textarea name="message"></textarea>
						</label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		);
	}
}

export default Form;
