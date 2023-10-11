import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

function Experience() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: .5}}} className="flex gap-20">
      <div>
        <div className="flex flex-col gap-3 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold capitalize">Job Experience</h2>
        </div>
        <div>
          <div className="mt-10 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="science & information"
              subTitle="CSE (2020 - 2024)"
              result="running"
              des="secondary education or post-primary education covers two phases on the international standard classification of education scalle."
            />
            <ResumeCard
              title="Secondary School Education"
              subTitle="philipnagar secondary school (2014 - 2019)"
              result="4.89"
              des="secondary education or post-primary education covers two phases on the international standard classification of education scalle."
            />
            <ResumeCard
              title="Primary School Education"
              subTitle="philipnagar primary school (2009 - 2013)"
              result="5.00"
              des="secondary education or post-primary education covers two phases on the international standard classification of education scalle."
            />
          </div>
        </div>
      </div>

      {/* Trainer Experience */}
      <div>
        <div className="flex flex-col gap-3 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold capitalize">Trainer Experience</h2>
        </div>
        <div>
          <div className="mt-10 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="science & information"
              subTitle="CSE (2020 - 2024)"
              result="running"
              des="secondary education or post-primary education covers two phases on the international standard classification of education scalle."
            />
            <ResumeCard
              title="Secondary School Education"
              subTitle="philipnagar secondary school (2014 - 2019)"
              result="4.89"
              des="secondary education or post-primary education covers two phases on the international standard classification of education scalle."
            />
            <ResumeCard
              title="Primary School Education"
              subTitle="philipnagar primary school (2009 - 2013)"
              result="5.00"
              des="secondary education or post-primary education covers two phases on the international standard classification of education scalle."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
