import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
	const [sent, setSent] = useState(false);
	const [sending, setSending] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		setSending(true);
		setSent(false);
		setError("");

		try {
			await emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				e.target,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);

			setSent(true);
			e.target.reset();
		} catch (err) {
			console.error("EmailJS error:", err);
			setError(
				"Sorry, your message couldn't be sent. Please try again or contact me directly by email."
			);
		} finally {
			setSending(false);
		}
	};

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
								<small>Email</small>
								katiek2128@gmail.com
							</a>

							<a href="tel:+16066881018">
								<small>Phone</small>
								606-688-1018
							</a>

							<a
								href="https://github.com/DarkRose2021"
								target="_blank"
								rel="noreferrer"
							>
								<small>GitHub</small>
								github.com/DarkRose2021
							</a>

							<a
								href="https://www.linkedin.com/in/kathrine-katie-king/"
								target="_blank"
								rel="noreferrer"
							>
								<small>LinkedIn</small>
								LinkedIn
							</a>
						</div>
					</div>

					<form onSubmit={handleSubmit}>
						<label>
							Name
							<input required name="name" type="text" />
						</label>

						<label>
							Email
							<input required name="email" type="email" />
						</label>

						<label>
							Subject
							<input required name="subject" type="text" />
						</label>

						<label>
							Message
							<textarea required name="message" rows="7" />
						</label>

						{sent && (
							<p className="success">
								Thanks for reaching out! Your message has been sent.
							</p>
						)}

						{error && <p className="error">{error}</p>}

						<button type="submit" className="button" disabled={sending}>
							{sending ? "Sending..." : "Send Message"}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
