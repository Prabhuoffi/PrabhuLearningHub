import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-800 h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Prabhu's Learning Hub</h1>
          <p className="text-xl mb-8">Your one-stop solution for online learning</p>
          <Link to="/catalog" className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300">Explore Courses</Link>
        </div>
      </section>

      {/* Introductory Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Prabhu's Learning Hub, we offer top-notch education and training for a variety of subjects. Our platform is designed to cater to the needs of learners of all ages and backgrounds.
          </p>
          <p className="text-lg text-gray-700">
            With our flexible learning options, expert instructors, and certification programs, you can advance your skills and career at your own pace.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Expert Instructors</h3>
              <p className="text-gray-700">Learn from industry experts with real-world experience.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Flexible Learning</h3>
              <p className="text-gray-700">Access courses anytime, anywhere, and at your own pace.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Certification</h3>
              <p className="text-gray-700">Receive certificates upon completion of courses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-700">Build and deploy modern web applications using the latest technologies.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Data Science</h3>
              <p className="text-gray-700">Analyze and interpret complex data to make informed decisions.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-700">Master the art of online marketing and grow your business.</p>
            </div>
          </div>
          <Link to="/catalog" className="inline-block mt-8 bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300">View All Courses</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-gray-700 mb-4">"The courses are well-structured and the instructors are very knowledgeable. I've learned so much!"</p>
              <p className="text-yellow-500 font-bold">- Student A</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-gray-700 mb-4">"Flexible learning at its best! I could study at my own pace and get certified."</p>
              <p className="text-yellow-500 font-bold">- Student B</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-gray-700 mb-4">"Great platform with a variety of courses to choose from. Highly recommend!"</p>
              <p className="text-yellow-500 font-bold">- Student C</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-yellow-500 text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Learning?</h2>
          <p className="text-lg mb-8">Join Prabhu's Learning Hub today and unlock a world of knowledge.</p>
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

export default Home;
