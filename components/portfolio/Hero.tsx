'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Disal Ransika
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-slate-600">
                <GraduationCap size={20} className="text-blue-600" />
                <p className="text-lg">Undergraduate at Uva Wellassa University</p>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <GraduationCap size={20} className="text-cyan-600" />
                <p className="text-lg">BSc. (Hons) Industrial Information Technology</p>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={20} className="text-green-600" />
                <p className="text-lg">Ambalangoda, Sri Lanka</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-slate-600 leading-relaxed space-y-4"
            >
              <p>
                 I'm Disal Ransika Rajapaksha, a dedicated and creative web developer with a strong passion for crafting responsive, user-friendly websites. I love transforming ideas into smooth digital experiences through clean coding and thoughtful design.
              </p>
              <p>
                My core skills include HTML, CSS, JavaScript, and PHP, and I'm constantly learning new technologies to stay updated with modern development trends. Whether I'm building a site from the ground up or enhancing an existing one, I always aim for high performance, quality, and usability.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new knowledge, keeping up with tech innovations, or drawing inspiration from nature and music. I'm always interested in new challenges and collaborations—feel free to connect anytime!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 shadow-2xl flex items-center justify-center"
              >
                <div className="w-[94%] h-[94%] rounded-full overflow-hidden relative border-4 border-white shadow-inner">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Disal Ransika"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
