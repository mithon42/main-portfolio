import React from "react";
import { motion } from "framer-motion";

function ProfessionalSkills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex gap-20"
    >
      {/* design Skills */}
      <div className="w-1/2">
        <div className="flex flex-col gap-3 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className="text-4xl font-bold capitalize">design Skills</h2>
        </div>
        <div>
          <div className="w-full flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">photoshop</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-6 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">figma</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-6 right-0">85%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">psd</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-6 right-0">90%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">DESIGN</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[78%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-6 right-0">78%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Development SkillS */}
      <div className="w-1/2">
        <div className="flex flex-col gap-3 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className="text-4xl font-bold capitalize">Development SkillS</h2>
        </div>
        <div>
          <div className="w-full flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">React</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-6 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">javascript</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[88%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-6 right-0">88%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">tailwind css</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[92%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-6 right-0">92%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">bootstrap-5</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[93%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-6 right-0">93%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfessionalSkills;
