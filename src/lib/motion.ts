import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const defaultViewport = { once: true, amount: 0.2 } as const;

export const fadeUpProps = {
  variants: fadeUp,
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: defaultViewport,
};

export const staggerContainerProps = {
  variants: staggerContainer,
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: defaultViewport,
};
