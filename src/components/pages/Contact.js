import React from 'react';
import twitterIcon from '../../twitterIcon.png';
import linkedinIcon from '../../linkedinIcon.png';

export default function Contact() {
	return (
		<div id="contactClass">
			<br></br>
			<br></br>
			<h1>Matthew Hughes</h1>
			<h3>(925) 963 3487</h3>
			<a
				href="mailto:mhughes.ipod@gmail.com?Subject=Hello%20there!"
				target="_top"
			>
				<h3>mhughes.ipod@gmail.com</h3>
			</a>
			<a
				href="https://twitter.com/matthughes2112"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img src={twitterIcon} width="50" alt="Twitter" />
			</a>

			<a
				href="https://www.linkedin.com/in/matthew-hughes-62795594/"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img src={linkedinIcon} width="50" alt="LinkedIn" />
			</a>
			<a
				href="https://docs.google.com/document/d/1LPr_gMxdj0CbRf6HNA6ULWlNbkv954gObCgyODMJtCM/edit?usp=sharing"
				rel="noopener noreferrer"
				target="_blank"
			>
				<h3>click here for my resume</h3>
			</a>
			<br />
			<br />
			<p>
				Feel free to contact me in regards to website building, code analysis,
				or other questions.
			</p>
			<p>I look forward to hearing from you!</p>
		</div>
	);
}
