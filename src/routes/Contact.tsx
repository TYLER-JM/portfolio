import '../styles/contact.css'

const Contact = function() {
	return (
		<article className="section contact" id="contact">
			<div className="contact__container">
				<div className='contact__social'>
					<a className="social github" href="https://github.com/TYLER-JM" target="blank">
						<svg className="github">
							<use xlinkHref="images/sprite.svg#icon-github"></use>
						</svg>
					</a>
					<a className="social linkedin" href="https://www.linkedin.com/in/tyler-martin-670020198/" target="blank">
						<svg className="linkedin">
							<use xlinkHref="images/sprite.svg#icon-linkedin-with-circle"></use>
						</svg>
					</a>
					<a className="social mail" href="mailto:tyler.j.a.martin@gmail.com" target="_blank" rel="noopener noreferrer">
						<svg className="mail">
							<use xlinkHref="images/sprite.svg#icon-mail"></use>
						</svg>
					</a>
				</div>
				<p>I'm always happy to chat about what I'm working on, what I'm reading, what I'm playing, or what I'm listening to.</p>
			</div>
		</article>
	)
}

export default Contact;