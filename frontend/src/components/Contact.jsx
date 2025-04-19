import { useState } from "react";
import { Button } from "./ui/button"; // Adjust path if needed

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here (e.g., send to backend)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-16">
      <h2 className="text-purple-400 uppercase text-xl mb-6 text-center">Get In Touch</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="md:w-1/2">
          {submitted ? (
            <p className="text-green-400 text-center">Thanks for your message! We'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
              />
              <Button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl">
                Send Message
              </Button>
            </form>
          )}
        </div>

        {/* Google Map */}
        <div className="md:w-1/2 h-[350px] rounded-xl overflow-hidden">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.678710445884!2d77.49060237507115!3d13.0945483121246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae24cf216bdb91%3A0xa82cf5be0d33e70!2sPresidency%20University!5e0!3m2!1sen!2sin!4v1713516809816!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
