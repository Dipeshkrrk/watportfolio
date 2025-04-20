import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Discussion",
    desc: "We meet customers in set place to discuss the details about needs and demands before proposing plan.",
  },
  {
    number: "2",
    title: "Ideas & Concepts",
    desc: "We brainstorm ideas and concepts with our clients to bring innovative solutions to life.",
  },
  {
    number: "3",
    title: "Development",
    desc: "Our team Develops accordingly before launching to ensure they meet the client's requirements.",
  },
  {
    number: "4",
    title: "Testing & Trying",
    desc: "Our team tests ideas thoroughly before launching to ensure they meet the client's goals.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black text-white py-16 px-4 md:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Image + Title Side */}
        <div className="lg:w-1/2 w-full space-y-6 text-center lg:text-left">
          <img
            // src="https://i.postimg.cc/ryvrn1Wt/your-image.jpg"
            src="https://i.postimg.cc/Hx4nxYrC/digital-art-style-illustration-graphic-designer.jpg"
            alt="Process"
            className="w-full h-auto rounded-3xl object-cover shadow-lg"
          />
          <div>
            <p className="text-purple-500 text-sm uppercase tracking-widest">// Work Process</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Proven Process for a <br />
              <span className="text-gray-300 font-normal">Growing Your Business</span>
            </h2>
            <p className="text-gray-400 mt-4 text-sm md:text-base">
              Our objective is to reach the firm to a level where we can create opportunities
              for young professionals to excel in the web design world.
            </p>
          </div>
        </div>

        {/* Steps Side */}
        <div className="lg:w-1/2 w-full space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-zinc-700 text-white font-bold flex items-center justify-center text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
