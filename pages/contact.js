// pages/contact.js
import Header from '../components/Header';

export default function Contact() {
  return (
    <div>
      <Header title="Contact Group15" />
      <main className="container mx-auto px-4">
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Subject Field */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject of Your Message"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Other Ways to Reach Me</h3>
            <p>Email: <a href="mailto:your.email@example.com" className="text-blue-500 hover:text-blue-700">dipak3001patel.gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-blue-500 hover:text-blue-700">+123 456 7890</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="text-blue-500 hover:text-blue-700">dipak3001patel</a></p>
          </div>
        </section>
      </main>
    </div>
  );
}
