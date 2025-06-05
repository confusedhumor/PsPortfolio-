import { motion } from 'framer-motion';
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconBrandBehance,
  IconBrandLinkedin
} from "@tabler/icons-react";
import { FloatingDock } from "../floatingDock";

export default function Hero() {
  const links = [
    {
      title: "Twitter",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },
    {
      title: "Behance",
      icon: (
        <IconBrandBehance className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center h-[35rem] w-full"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <FloatingDock
          mobileClassName="translate-y-20"
          items={links}
        />
      </motion.div>
    </motion.div>
  );
}