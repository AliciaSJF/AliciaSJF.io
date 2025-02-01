import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed w-full bg-gray-800 bg-opacity-90 z-10">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

