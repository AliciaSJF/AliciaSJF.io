import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <h2 className="text-2xl text-blue-400 mb-6">Software Developer | AI Enthusiast</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Hello! I'm a passionate software developer with a keen interest in Artificial Intelligence. I love creating
          innovative solutions and exploring the cutting edge of technology. When I'm not coding, you can find me [Your
          Interests/Hobbies].
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <GitHub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

