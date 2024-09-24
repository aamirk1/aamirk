import { SkillInfo } from "../User";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="px-16 my-10 font-mono md-mx:px-6" id="Skills">
      <h1 className="text-4xl font-bold sm-mx:text-3xl xs-mx:text-2xl text-center mb-5 text-white">
        <span className="text-primaryColor">03. &nbsp;</span>Skills
      </h1>
      <div className="flex flex-wrap justify-around gap-4 md-mx:gap-2 md-mx:justify-between sm-mx:justify-center">
        {SkillInfo.map((skill: any, index: number) => (
          <SkillCard key={index} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
