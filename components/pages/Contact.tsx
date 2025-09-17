"use client"
import React from "react"

const ContactForm = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">Contact Us</h2>
          <p className="text-gray-300 mt-2">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-md">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First name */}
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                placeholder="Bonnie"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Last name */}
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Green"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2">Your email</label>
              <input
                type="email"
                placeholder="name@flowbite.com"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+12 345 6789"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm mb-2">Your message</label>
              <textarea
                rows={4}
                placeholder="Leave a comment..."
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-400 md:col-span-2">
              By submitting this form you agree to our{" "}
              <a href="#" className="text-blue-400 underline">
                terms and conditions
              </a>{" "}
              and our{" "}
              <a href="#" className="text-blue-400 underline">
                privacy policy
              </a>{" "}
              which explains how we may collect, use and disclose your personal
              information including to third parties.
            </p>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-3 rounded-lg"
              >
                Send message
              </button>
            </div>
          </form>
        </div>

        {/* Footer Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="block font-semibold mb-2">Email us:</span>
            <p className="text-gray-400 text-sm">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <a
              href="mailto:hello@flowbite.com"
              className="text-blue-400 block mt-2"
            >
              hello@flowbite.com
            </a>
          </div>

          <div>
            <span className="block font-semibold mb-2">Call us:</span>
            <p className="text-gray-400 text-sm">
              Call us to speak to a member of our team. We are always happy to
              help.
            </p>
            <a href="tel:+16467865060" className="text-blue-400 block mt-2">
              +1 (646) 786-5060
            </a>
          </div>

          <div>
            <span className="block font-semibold mb-2">Support</span>
            <p className="text-gray-400 text-sm">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <a href="#" className="text-blue-400 block mt-2">
              Support center
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
