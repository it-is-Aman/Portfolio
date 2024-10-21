import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

function Footer() {
  const name=import.meta.env.VITE_NAME
  const github = import.meta.env.VITE_GITHUB
  const linkedin = import.meta.env.VITE_LINKEDIN
  const twitter = import.meta.env.VITE_TWITTER
  const mail = import.meta.env.VITE_MAIL

  const handleEmailClick = () => {
    window.location.href = `mailto:${mail}`;
  }
  
  return (
    <footer className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">&copy; 2024 {name}. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href={github} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={linkedin} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={twitter} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href={mail} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <Mail className="h-6 w-6" onClick={handleEmailClick}/>
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer