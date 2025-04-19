import { motion } from "framer-motion";

const services = [
  {
    name: "UX/UI Design",
    icon: "https://img.icons8.com/?size=100&id=X-WB1cntO5xU&format=png&color=000000",
    description:
      "Crafting intuitive and beautiful interfaces for maximum user delight.",
  },
  {
    name: "Branding",
    icon: "https://img.icons8.com/?size=100&id=CPQdntaEpJVC&format=png&color=000000",
    description:
      "Building unforgettable brand identities that speak your story.",
  },
  {
    name: "Web Development",
    icon: "https://img.icons8.com/3d-fluency/94/source-code.png",
    description:
      "Clean, modern websites with performance and scalability in mind.",
  },
  {
    name: "Prototyping",
    icon: "https://img.icons8.com/3d-fluency/94/prototype.png",
    description:
      "Rapid mockups to test ideas fast and iterate smarter.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-black px-6 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
    >
      {services.map((service, index) => (
        <motion.div
          key={service.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl transition duration-300 hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.4)]">
            <div className="rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="rounded-2xl bg-zinc-900 text-white p-6 h-full flex flex-col items-center justify-center text-center hover:bg-zinc-800 transition duration-300">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-20 h-20 mb-4"
                />
                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm text-zinc-400">{service.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Section divider/liner */}
      <div className="col-span-full flex justify-center mt-12">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400 text-black text-sm font-semibold shadow-md">
          <span>✨</span>
          <span>LOOKING FOR SOMETHING ELSE? WE MIGHT HELP!</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
