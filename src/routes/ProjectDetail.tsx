import ReactMarkdown from "react-markdown";
import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";
import Layout from '../components/Layout.tsx';
import Sidebar from '../components/Sidebar.tsx';

import '../styles/project-detail.css'

export default function ProjectDetail() {
	const { slug } = useParams()
	const [content, setContent] = useState('')

	const projects = [
		{ title: "MoCalc", slug: "mocalc" },
		{ title: "Team Fantasy", slug: "team-fantasy" }
	]

	const sidebarContent = (
		<ul>
			{projects.map(project => (
				<li key={project.slug}>
					<Link 
						to={`/projects/${project.slug}`}
						className={slug === project.slug ? 'active' : ''}
					>
						{project.title}
					</Link>
				</li>
			))}
		</ul>
	)

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
		<Layout sidebar={<Sidebar>{sidebarContent}</Sidebar>}>
			<section className="section">
				<div className="project-detail__container">
						<ReactMarkdown>{content}</ReactMarkdown>
						<Link to="/projects" className="card__link card__detail-link back">
							<span className="icon">&larr;</span>
							Go back
						</Link>
				</div>
			</section>
		</Layout>
	)
}