export default function Footer() {
    return (
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    )
  }
  
  