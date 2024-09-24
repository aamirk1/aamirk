import { Button, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import Typewriter from "typewriter-effect";
import { Info } from "../User";
import ResumeViewer from "./ResumeViewer";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import Particles from "./magicui/particles";
const About = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const btn = useMatches({
    xs:'xs',
    sm:'sm',
    md:'md',
    lg:'lg'
  })
  return (
    <>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="800"
        className="mt-28 flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6"
        id="bg"
      >
        <Particles
          className="absolute -z-20 inset-0"
          quantity={1200}
          ease={80}
          vx={0.1}
          vy={0.1}
          color="#64FFDA"
          refresh
        />
        <div className="ml-10 sm-mx:ml-0 xs-mx:ml-0 xsm-mx:ml-0 w-3/5 flex flex-col lg-mx:gap-3 bs-mx:items-center ">
          <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
            Hi, I'm
          </div>
          <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">
            {Info.name}
          </div>
          <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
            I'm a &nbsp;
            <span className="text-primaryColor">
              <Typewriter
                options={{
                  strings: Info.stack,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>{" "}
          </div>
          <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">
            {Info.bio}
          </div>
          <div className="flex gap-3">
            <Button
              onClick={open}
              className="!text-bgColor !w-fit"
              size={btn}
              variant="filled"
              color="#64FFDA"
            >
              Resume
            </Button>
            <Button
              component="a"
              href={`${process.env.PUBLIC_URL}/pyResume.pdf`}
              download={Info.name}
              className="!text-primaryColor !w-fit"
              size={btn}
              variant="outline"
              color="#64FFDA"
              rightSection={<IconDownload size={20} />}
            >
              Download
            </Button>
          </div>
        </div>

        <div
          className="h-fit flex justify-center items-center  rounded-full bs:mr-10 w-fit"
          id="photo"
        >
          <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
            <img
              src={`${process.env.PUBLIC_URL}/Icons/pic.png`}
              className="w-full h-full rounded-full "
              alt="profile"
            />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
