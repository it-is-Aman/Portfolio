import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Link } from "react-router-dom"

function Projects() {
  const proj_git_1 = import.meta.env.VITE_GITHUB_PROJECT1
  const proj_demo_1 = import.meta.env.VITE_DEMO_PROJECT1
  const projectImg1 = "../assets/images/project-image1.png"
  const proj_git_2 = import.meta.env.VITE_GITHUB_PROJECT2
  const proj_demo_2 = import.meta.env.VITE_DEMO_PROJECT2
  const projectImg2 = "../assets/images/project-image2.png"

  const projects = [
    {
      id: 1, title: "Fit-Track: A fitness tracking app with Firebase",
      description: "Fit-Track helps users log workouts, track fitness progress, and access a workout guide. Built with Firebase for authentication and real-time data storage, it offers an intuitive interface to visualize workout history and stay motivated",
      image: new URL(projectImg1, import.meta.url).href, // Updated to use URL constructor
      github: proj_git_1, demo: proj_demo_1,
      tech: ["Firebase", "JavaScript", "React", "Chart.js", "Tailwind CSS", "React-Router", "Shadcn"]
    },
    {
      id: 2, title: "Personal Portfolio Website",
      description: "A modern and responsive portfolio website to showcase my projects, skills, and resume. This website is designed with a focus on clean UI, intuitive navigation, and smooth user experience, allowing potential employers or collaborators to learn more about my work and professional background",
      image: new URL(projectImg2, import.meta.url).href,
      github: proj_git_2, demo: proj_demo_2,
      tech: ["JavaScript", "React", "Tailwind", "Shadcn", "React-Router", "Framer-Motion"]
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col transition-transform duration-300 hover:scale-105 ">
                <img src={project.image} alt={project.title} className="w-full h-62 object-cover" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex justify-between w-full">
                    <Button variant="outline" asChild>
                      <Link to={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link to={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  )
}

export default Projects