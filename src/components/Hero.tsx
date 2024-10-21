import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

// import Spline from '@splinetool/react-spline';


function Hero() {
  const name = import.meta.env.VITE_NAME

  return (
    <div className='relative'>
      {/* <Spline
        scene="https://prod.spline.design/DoDGkRRu8gL7Fvvc/scene.splinecode"
        className=' absolute '
      /> */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="text-center">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6"
          >
            {name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Full Stack Developer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="text-lg px-8 py-6" asChild>
              <Link to="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Hero
