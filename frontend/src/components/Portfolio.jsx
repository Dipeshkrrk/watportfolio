import { motion } from "framer-motion";

const portfolioItems = [
  {
    image: "https://i.ibb.co/vCX2Nyq7/a5motors.png",
    title: "A5 Motors",
    link: "https://www.a5motors.in/",
  },
  {
    image: "https://i.ibb.co/Y4gZWDTs/nvfithub.png",
    title: "NV Fit Hub",
    link: "https://www.nvfithub.com/",
  },
  {
    image: "https://i.ibb.co/qYz72tV8/b4tutorial.png",
    title: "B4 Tutorial",
    link: "https://www.b4tutorial.in/",
  },
  {
    image: "https://i.ibb.co/4Rd8X7qh/jhgroup.png",
    title: "JH Groups",
    link: "https://www.jhgroups.in/",
  },
  {
    image: "https://i.ibb.co/F4qqTTfD/k2kvacations.png",
    title: "K2K Vacations",
    link: "https://k2kvacations.in",
  },
  {
    image: "https://i.ibb.co/NgqcKLN6/thelearningbuds.png",
    title: "The Learning Buds",
    link: "https://www.thelearningbuds.com",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 md:px-16 py-16 bg-black overflow-hidden">
      <h2 className="text-4xl font-bold mb-8 text-purple-300">Portfolio</h2>

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 45, // slower scroll
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...portfolioItems, ...portfolioItems].map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden group w-87 h-92 flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/50"
            >
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
                View Project
              </button>
            </a>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
