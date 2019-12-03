import React from "react";
import twitterIcon from "../../twitterIcon.png";
import linkedinIcon from "../../linkedinIcon.png";

export default function Contact() {
  return (
    <div id="contactClass">
      <br></br>
      <br></br>
      <h1>Matthew Hughes</h1>
      <h3>(925) 963 3487</h3>
      <a
        href="mailto:matthew.lhCA@gmail.com?Subject=Hello%20there!"
        target="_top"
      >
        <h3>matthew.lhCA@gmail.com</h3>
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
      <br />
      <br />
      <p>
        Feel free to contact me in regards to website building, code analysis,
        or other questions.
      </p>
    </div>
  );
}
