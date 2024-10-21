import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Code, Rocket } from 'lucide-react'

function About() {
  const name = import.meta.env.VITE_NAME
  const skills = ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python']
  const interests = ['Exploring new technologies', 'Photographing', 'Weight lifting and fitness']

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Sparkles className="mr-2 h-6 w-6 text-blue-500" />
                  Hey! I'm {name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  As a software engineer, I enjoy creating scalable and user-friendly solutions.
                  I love learning new things every day and am constantly excited about contemporary web technology.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  When I'm not coding, you can find me lifting weights, photographing,
                  or playing with my cat :)
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-8"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Code className="mr-2 h-6 w-6 text-green-500" />
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Rocket className="mr-2 h-6 w-6 text-purple-500" />
                  Interests
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About