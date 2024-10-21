import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion";


function Profile() {

  // const experiences = [
  //   { company: "", role: "", period: "", responsibilities: ["", ""] },
  // ]

  const education = [
    {
      institution: "Dr APJ Abdul Kalam Technical University (AKTU)", degree: "Bachelor Of Technology in Artificial Intelligence", year: "2021 - present",
      achievements: []
    },
    {
      institution: "Central Board of Secondary Education", degree: "Higher Senior Secondary (12th)", year: "2019 - 2021",
      achievements: []
    }
  ];

  const skills = ["React", "Node.js", "Express", "Javascript", "MongoDB", "TypeScript", "Python", "Redux", "Next.js", "Tailwind CSS"]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Profile
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>{exp.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company} | {exp.period}</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div> */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution} | {edu.year}</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 pt-3">
                      {edu.achievements.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Skills</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile