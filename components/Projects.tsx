import Image from "next/image"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A smart task management app that uses NLP to categorize and prioritize tasks.",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/yourusername/ai-task-manager",
      demo: "https://ai-task-manager-demo.com",
    },
    {
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology.",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/yourusername/blockchain-voting",
      demo: "https://blockchain-voting-demo.com",
    },
    // Add more projects as needed
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, image, github, demo }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <Image src={image || "/placeholder.svg"} alt={title} width={300} height={200} className="w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300"
          >
            <GitHub className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-400 hover:text-green-300"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

