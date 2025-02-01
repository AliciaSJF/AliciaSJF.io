import { Brain, Code, Database, Server } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Education</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            icon={<Code className="w-8 h-8" />}
            title="Languages"
            items={["JavaScript", "Python", "TypeScript", "C++"]}
          />
          <SkillCard
            icon={<Server className="w-8 h-8" />}
            title="Backend"
            items={["Node.js", "Express", "Django", "FastAPI"]}
          />
          <SkillCard
            icon={<Database className="w-8 h-8" />}
            title="Databases"
            items={["PostgreSQL", "MongoDB", "Redis"]}
          />
          <SkillCard
            icon={<Brain className="w-8 h-8" />}
            title="AI/ML"
            items={["TensorFlow", "PyTorch", "Scikit-learn"]}
          />
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Education & Experience</h3>
          <Timeline />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ icon, title, items }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function Timeline() {
  const events = [
    {
      year: "2023",
      title: "Learning AI and Machine Learning",
      description: "Focusing on deep learning and natural language processing",
    },
    { year: "2022", title: "Software Developer at Tech Co", description: "Working on full-stack web applications" },
    { year: "2021", title: "BS in Computer Science", description: "Graduated from University XYZ" },
    // Add more events as needed
  ]

  return (
    <div className="relative">
      {events.map((event, index) => (
        <div key={index} className="mb-8 flex justify-between items-center w-full">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">{event.year}</h1>
          </div>
          <div className="order-1 bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">{event.title}</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

