import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-800 h-64 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4 text-center">
            At Prabhu's Learning Hub, our mission is to provide accessible and high-quality education to learners of all backgrounds. We aim to empower individuals by offering a diverse range of courses designed to enhance skills and knowledge.
          </p>
          <p className="text-lg text-gray-700 mb-4 text-center">
            We believe that education should be flexible, affordable, and available to everyone. Our platform is built to support learners in achieving their personal and professional goals.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Prabhu</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">John Doe</h3>
              <p className="text-gray-700">Lead Instructor</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Jane Smith</h3>
              <p className="text-gray-700">Marketing Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-yellow-500 text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join Us Today</h2>
          <p className="text-lg mb-8">Become part of our learning community and start your journey towards success.</p>
          <Link to="/signup" className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition duration-300">Get Started</Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Prabhu's Learning Hub. All rights reserved.</p>
          <div className="mt-4">
            <Link to="/about" className="text-gray-400 hover:text-white mx-2">About Us</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white mx-2">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
