'use client';

import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { certificates } from '@/lib/data';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Certificates
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional certifications and achievements demonstrating continuous learning
            and expertise across various technologies.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600">{cert.issuer}</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
