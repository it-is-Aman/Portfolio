import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Button } from './ui/button'
import { Download } from 'lucide-react'
import resumePath from "/assets/pdf/resume.pdf"

function Header() {
    const name = import.meta.env.VITE_NAME

    const headerSection = ['profile', 'projects', 'about', 'contact']

    return (
        <header className="sticky top-0 bg-white dark:bg-gray-800 shadow z-50">
            <nav className="container mx-auto px-7 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold text-gray-800 dark:text-white">
                        <NavLink to="/" >
                            {name}
                        </NavLink>
                    </div>
                    <div className="flex space-x-4">
                        {headerSection.map((section) => (
                            <motion.p key={section} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0 }}>
                                <NavLink
                                    key={section}
                                    to={section}
                                    className={({ isActive }) =>
                                        `text-lg text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white capitalize ${isActive ? "font-bold" : ""}`
                                    }
                                >
                                    {section}
                                </NavLink>
                            </motion.p>
                        ))}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button asChild variant="outline" className="flex items-center">
                                <a href={resumePath} download={`${name}_Resume.pdf`}>
                                    <Download className="mr-2 h-4 w-4" /> Download Resume
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header