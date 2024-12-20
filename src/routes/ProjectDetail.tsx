import ReactMarkdown from "react-markdown";
import {useParams} from "react-router";
import {useEffect, useState} from "react";

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
		<div className="project-detail">
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	)
}