import { useState } from "react";
export default function Contact() {
	const [sent, setSent] = useState(false);
	return (
		<section className="section page">
			<div className="container">
				<div className="page-intro">
					<p className="eyebrow">Contact</p>
					<h1>Let's connect.</h1>
					<p>
						Have an opportunity, project, or question? I'd love to hear from
						you.
					</p>
				</div>
				<div className="contact">
					<div>
						<h2>Get in touch</h2>
						<p>
							The easiest way to reach me is by email. You can also find me
							through GitHub and LinkedIn.
						</p>
						<div className="contact-links">
							<a href="mailto:katiek2128@gmail.com">
								<small>Email</small>katiek2128@gmail.com
							</a>
							<a href="tel:+16066881018">
								<small>Phone</small>606-688-1018
							</a>
							<a
								href="https://github.com/DarkRose2021"
								target="_blank"
								rel="noreferrer"
							>
								<small>GitHub</small>github.com/DarkRose2021
							</a>
							<a
								href="https://www.linkedin.com"
								target="_blank"
								rel="noreferrer"
							>
								<small>LinkedIn</small>LinkedIn
							</a>
						</div>
					</div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							setSent(true);
						}}
					>
						<label>
							Name
							<input required name="name" />
						</label>
						<label>
							Email
							<input required type="email" name="email" />
						</label>
						<label>
							Subject
							<input required name="subject" />
						</label>
						<label>
							Message
							<textarea required name="message" rows="7" />
						</label>
						{sent && (
							<p className="success">
								Thanks! Connect this form to EmailJS before publishing.
							</p>
						)}
						<button className="button">Send Message</button>
					</form>
				</div>
			</div>
		</section>
	);
}
