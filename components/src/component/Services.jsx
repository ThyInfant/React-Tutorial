import { calcChildStagger, motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Services() {
  const services = [
    "Technology Consulting",
    "Market Analysis",
    "Product Development",
  ];
  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Services</h1>

      <motion.ul variants={container} initial="hidden" animate="visible">
        {services.map((service) => (
          <motion.li
            key={service}
            variants={item}
            initial="hidden"
            animate="visible"
          >
            {service}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Services;
