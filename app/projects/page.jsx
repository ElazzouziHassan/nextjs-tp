'use client'
import { useState } from 'react';
const projects = [
  {
    id: '1',
    title: "AI-powered image manipulation SaaS platform ",
    description: "AI-powered image manipulation SaaS platform designed to provide users with advanced tools for editing and enhancing their images.",
    technologies: "Next.js, MongoDB, Cloudinary, Clerk, Vercel",
    duration: "2 mois",
    link: "https://github.com/ElazzouziHassan/ImageEditor"
  },
  {
    id: '2',
    title: "Application de Gestion des Tâches",
    description: "Une application de gestion des tâches avec React.js et Firebase.",
    technologies: "Next.js, MongoDB, JavaScript",
    duration: "10 Jours",
    link: "https://github.com/ElazzouziHassan/TP-NextJS"
  },
  {
    id: '3',
    title: "API RESTful avec Node.js",
    description: "Une API RESTful pour gérer les produits d'un magasin, développée avec Node.js et Express.",
    technologies: "Node.js, Express, MongoDB",
    duration: "1,5 mois",
    link: "https://github.com/ElazzouziHassan/OFPPT-NetWork"
  }
];

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Mes Projets</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#007BFF',
                cursor: 'pointer',
                fontSize: '18px',
                textAlign: 'left',
                padding: '10px',
                width: '100%',
                textDecoration: 'underline'
              }}
              onClick={() => handleProjectClick(project)}
            >
              {project.title}
            </button>

            {selectedProject?.id === project.id && (
              <div style={{ marginTop: '10px', paddingLeft: '20px' }}>
                <p><strong>Description :</strong> {project.description}</p>
                <p><strong>Technologies :</strong> {project.technologies}</p>
                <p><strong>Durée :</strong> {project.duration}</p>
                <p><strong>Voir sur GitHub :</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
