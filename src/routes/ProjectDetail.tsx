import ReactMarkdown from "react-markdown";
import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";

import '../styles/project-detail.css'

export default function ProjectDetail() {
	const { slug } = useParams()
	const [content, setContent] = useState('')

	useEffect(() => {
		import(`../content/${slug}.md`)
			.then(module => {
				fetch(module.default)
					.then(res => res.text())
					.then(text => setContent(text))
			})
			.catch(err => console.error(err));
	}, [slug])

	return (
		<article className="section">
			<div className="project-detail__container">
					<ReactMarkdown>{content}</ReactMarkdown>
					<Link to="/projects" className="card__link card__detail-link back">
						<span className="icon">&larr;</span>
						Go back
					</Link>
			</div>
		</article>
	)
}