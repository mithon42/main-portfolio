import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import ProfessionalSkills from "./ProfessionalSkills";
import Expreience from "./Experience";
import Achievements from "./Achievements";



function Resume() {
  const [educationData, setEducationData] = useState(true);
  const [professionalSkillsData, setProfessionalSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementsData, setAchievementsData] = useState(false);

  function handleEducation() {
    return (
      setEducationData(true) &
      setProfessionalSkillsData(false) &
      setExperienceData(false) &
      setAchievementsData(false)
    )
  };

  function handlePeofessionalSkills() {
    return (
      setProfessionalSkillsData(true) &
      setEducationData(false) &
      setExperienceData(false) &
      setAchievementsData(false)
    )
  };

  function handleExperience () {
    return (
      setExperienceData(true) &
      setProfessionalSkillsData(false) &
      setEducationData(false) &
      setAchievementsData(false)
    )
  };

  function handleAchievements() {
    return (
      setAchievementsData(true) &
      setProfessionalSkillsData(false) &
      setEducationData(false) &
      setExperienceData(false)
    )
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCEk" subTitle="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li onClick={handleEducation} className={`${educationData ? "resumeLiActive" : "resumeLiNotActive"} resumeLi`}>education</li>
          <li onClick={handlePeofessionalSkills} className={`${professionalSkillsData ? "resumeLiActive" : "resumeLiNotActive"} resumeLi`}>professional skills</li>
          <li onClick={handleExperience} className={`${experienceData ? "resumeLiActive" : "resumeLiNotActive"} resumeLi`}>experience</li>
          <li onClick={handleAchievements} className={`${achievementsData ? "resumeLiActive" : "resumeLiNotActive"} resumeLi`}>achievements</li>
        </ul>
      </div>

      {educationData && <Education />}
      {professionalSkillsData && <ProfessionalSkills />}
      {experienceData && <Expreience />}
      {achievementsData && <Achievements />}
    </section>
  );
}
export default Resume;
