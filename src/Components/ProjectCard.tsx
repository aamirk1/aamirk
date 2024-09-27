import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Indicator,
  Text,
  useMatches,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModel from "./FullProjectModel";
const ProjectCard = (props: any) => {
  const badge = useMatches({
    xsm:'sm',
    md:'md',
    lg:'lg'
  })
  const btn = useMatches({
    xs:'xs',
    sm:'sm',
    md:'md',
    lg:'lg'
  })
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="w-[32%] lg-mx:w-[46%] md-mx:w-[48%] sm-mx:w-full xs-mx:w-full" data-aos="fade-up" data-aos-duration="800">
      <Card
        onClick={open}
        className="bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.03] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA] !border-primaryColor border-2"
        w="340px"
        shadow="lg"
        padding="sm"
        radius="lg"
        withBorder
      >
        <Card.Section className="p-3">
          <Image
            className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
            src={props.image}
            alt={props.image}
          />
        </Card.Section>

        <Group justify="space-between" mt="xs" mb="xs">
          <Text className="!text-2xl !font-bold gap-2 !text-white flex items-center sm-mx:!text-xl">
            {props.title}

            {props.live === true && (
              <Badge className="!px-1"
                variant="outline"
                color="#64FFDA"
                rightSection={
                  <Indicator className="!mr-0.5"
                    color="#64FFDA"
                    position="middle-end"
                    size={7}
                    processing
                  ></Indicator>
                }
              >
                Live
              </Badge>
            )}
          </Text>
        </Group>
        <Group mb="sm"  className="!gap-2">
          {props.technologies.map(
            (tech: string, index: number) =>
              index < 3 && (
                <Badge key={index} size={badge} variant="light" color="#64FFDA">
                  {tech}
                </Badge>
              )
          )}
        </Group>
        <Text className="!text-justify !text-sm xs-mx:!text-xs" lineClamp={5} size="sm" c="dimmed">
          {props.desc}
        </Text>

        <Button
          onClick={open}
          className=""
          variant="outline"
          color="#64FFDA"
          mt="md"
          size={btn}
          radius="md"
        >
          Show More
        </Button>
      </Card>
      <FullProjectModel
        opened={opened}
        close={close}
        title={props.title}
        desc={props.desc}
        image={props.image}
        live={props.live}
        link={props.link}
        github={props.github}
        technologies={props.technologies}
      />
    </div>
  );
};

export default ProjectCard;
