"use client";
import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Indicator,
  Text,
  useMatches,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModel from "./FullProjectModel";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectCard = (props: any) => {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  const badgeSize = useMatches({
    xsm: 'xs',
    sm: 'sm',
    md: 'md',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="md:w-[48%] lg:w-[31%] xl:w-[31%] group w-full"
    >
      <Card
        withBorder
        onClick={open}
        className="h-full bg-card-bg cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl !border-border rounded-2xl group overflow-hidden"
        shadow="md"
        padding="lg"
      >
        <Card.Section className="overflow-hidden relative p-4">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              className="!rounded-xl h-[230px] border border-border group-hover:shadow-[0_0_20px_0_rgba(100,255,218,0.2)]"
              src={props.image}
              fit="contain"
              fallbackSrc="https://placehold.co/600x400?text=Project+Coming+Soon"
              alt={props.title}
            />
          </motion.div>
          {props.live && (
            <div className="absolute top-8 right-8">
              <Badge
                variant="filled"
                color="teal"
                size="sm"
                className="!bg-primaryColor !text-bgColor font-black tracking-tighter"
                rightSection={<Indicator color="white" processing size={6} />}
              >
                LIVE
              </Badge>
            </div>
          )}
        </Card.Section>

        <div className="mt-4 space-y-4">
          <Group justify="space-between" align="start">
            <Text component="div" className="text-xl font-black text-foreground group-hover:text-primaryColor transition-colors">
              {props.title}
            </Text>
          </Group>

          <Group gap={6}>
            {(props.technologies || []).slice(0, 3).map((tech: string, index: number) => (
              <Badge
                key={index}
                size={badgeSize}
                variant="outline"
                color="teal"
                className="!border-primaryColor/30 !text-primaryColor/80 !text-[10px]"
              >
                {tech}
              </Badge>
            ))}
            {props.technologies && props.technologies.length > 3 && (
              <Badge size="xs" variant="transparent" color="gray" className="!text-[10px]">
                +{props.technologies.length - 3}
              </Badge>
            )}
          </Group>

          <Text className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {props.desc}
          </Text>

          <Button
            fullWidth
            onClick={open}
            variant="light"
            color="teal"
            className="!bg-primaryColor/10 !text-primaryColor hover:!bg-primaryColor transition-all duration-300 hover:!text-bgColor rounded-xl font-bold h-11"
          >
            Explore Project
          </Button>
        </div>
      </Card>

      <FullProjectModel
        opened={opened}
        close={close}
        {...props}
      />
    </motion.div>
  );
};

export default ProjectCard;
