import React, { Component } from 'react';
import '../styles/Form.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
class Form extends Component {
	myFunction = (e) => {
		alert('submitted');
		e.preventDefault();
	};
	render() {
		return (
			<div className="form-container">
				<Card className="card-container">
					<CardContent>
						<form name="contact" method="post" onSubmit={this.myFunction}>
							<input type="hidden" name="form-name" value="contact" />
							<p>
								<label>
									Your Name: <input type="text" name="name" />
								</label>
							</p>
							<p>
								{/* <label>
									Your Email: <input type="email" name="email" />
								</label> */}
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
					</CardContent>
					{/* <CardActions>
						<Button size="small">Learn More</Button>
					</CardActions> */}
				</Card>
			</div>
			//     <Card >
			// 	<CardContent>
			// 	<form name="contact" method="post">
			// 		<input type="hidden" name="form-name" value="contact" />
			// 		<p>
			// 			<label>
			// 				Your Name: <input type="text" name="name" />
			// 			</label>
			// 		</p>
			// 		<p>
			// 			<label>
			// 				Your Email: <input type="email" name="email" />
			// 			</label>
			// 		</p>
			// 		<p>
			// 			<label>
			// 				Message: <textarea name="message"></textarea>
			// 			</label>
			// 		</p>
			// 		<p>
			// 			<button type="submit">Send</button>
			// 		</p>
			// 	</form>
			// 	</CardContent>
			// 	<CardActions>
			// 	  <Button size="small">Learn More</Button>
			// 	</CardActions>
			//   </Card>
		);
	}
}

export default Form;
