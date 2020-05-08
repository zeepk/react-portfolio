import React from 'react';
import twitterIcon from '../../twitterIcon.png';
import linkedinIcon from '../../linkedinIcon.png';
import githubIcon from '../../githubIcon.svg';

export default function Contact() {
	return (
		<div id="contactClass">
			<br></br>
			<br></br>
			<h1>Matt Hughes</h1>
			<h3>(925) 963 3487</h3>
			<a href="mailto:matt@matthughes.dev?Subject=Hello%20there!" target="_top">
				<h3>matt@matthughes.dev</h3>
			</a>
			<a
				href="https://twitter.com/matthughes2112"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img src={twitterIcon} width="50" alt="Twitter" />
			</a>
			<a
				href="https://github.com/zeepk"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img className="social" src={githubIcon} width="60" alt="Github" />
			</a>

			<a
				href="https://www.linkedin.com/in/matthughes-dev/"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img src={linkedinIcon} width="50" alt="LinkedIn" />
			</a>
			{/* <a
        href="https://drive.google.com/file/d/1ox_k2bmHy-TqKIaXwmysbkN0rrDTlkFF/view?usp=sharing"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h3>click here for my resume</h3>
      </a> */}
			<br />
			<br />
			<p>
				Feel free to contact me in regards to website building, code analysis,
				or other questions.
			</p>
			<p>I look forward to hearing from you!</p>
			<form
				name="contact"
				method="post"
				netlify
				netlify-honeypot="bot-field"
				data-netlify={true}
			>
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
