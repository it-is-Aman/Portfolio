import { motion } from 'framer-motion'
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Github, Linkedin, Mail, Twitter } from 'lucide-react'

function Contact() {

  const github = import.meta.env.VITE_GITHUB
  const linkedin = import.meta.env.VITE_LINKEDIN
  const twitter = import.meta.env.VITE_TWITTER
  const mail = import.meta.env.VITE_MAIL


  const socialLinks = [
    { name: 'GitHub', icon: Github, url: github },
    { name: 'LinkedIn', icon: Linkedin, url: linkedin },
    { name: 'Twitter', icon: Twitter, url: twitter },
  ]

  const handleEmailClick = () => {
    window.location.href = `mailto:${mail}`;
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-10">
                <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4">
                  I'm always excited to connect, collaborate, and discuss new opportunities.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                Feel free to reach out! I'd love to hear from you!
                </p>
              </div>
              <div className="flex justify-center items-center space-x-6 mb-8">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="lg"
                      className="rounded-full p-3"
                      asChild
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                      >
                        <link.icon className="h-6 w-6" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleEmailClick}
                    size="lg"
                    className="rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send me an email
                  </Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 text-center"
              >
                <a
                  href="resume-path"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  View my resume
                </a>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact