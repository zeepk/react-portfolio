import React from 'react';

const Footer = () => {
	return (
		<div>
			<div
				className="p-grid"
				style={{
					textAlign: 'center',
					// height: '50px',
					backgroundColor: 'black',
					color: 'white',
					margin: 0,
					padding: '0 10vw 2vh 10vw',
					fontSize: '20px',
				}}
			>
				<div className="p-md-2 p-col-12">connect with me:</div>
				<div className="p-md-2 p-col-12">
					<a
						href="https://twitter.com/matthughes2112"
						className="footer-link"
						style={{ color: 'cyan' }}
					>
						twitter
					</a>
				</div>
				<div className="p-md-2 p-col-12">
					<a
						href="https://github.com/zeepk"
						className="footer-link"
						style={{ color: 'white' }}
					>
						github
					</a>
				</div>
				<div className="p-md-2 p-col-12">
					<a
						href="https://www.linkedin.com/in/matthughes-dev/"
						className="footer-link"
						style={{ color: '#7882ad' }}
					>
						linkedin
					</a>
				</div>
				<div className="p-md-2 p-col-12">
					<a
						href="https://www.twitch.tv/zee_pk"
						className="footer-link"
						style={{ color: '#a165b5' }}
					>
						twitch
					</a>
				</div>
				<div className="p-md-2 p-col-12">
					<a
						href="mailto:matt@matthughes.dev"
						className="footer-link"
						style={{ color: '#a165b5' }}
					>
						matt<code>@</code>matthughes.dev
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
