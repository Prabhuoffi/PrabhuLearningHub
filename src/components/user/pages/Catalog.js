// Catalog.js
import React from 'react';
import { Link } from 'react-router-dom';
import Webdevelopment from '../../../assets/webdevelopment.jpg';
import Datascience from '../../../assets/datascience.jpg';
import Digitalmarketing from '../../../assets/digitalmarketing.jpg';
import Graphicdesign from '../../../assets/graphicdesign.jpg';
import Cybersecurity from '../../../assets/cybersecurity.jpg';
import Machinelearning from '../../../assets/machinelearning.jpg';

export const courses = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Build and deploy modern web applications using the latest technologies.',
    image: Webdevelopment,
  },
  {
    id: 2,
    title: 'Data Science',
    description: 'Analyze and interpret complex data to make informed decisions.',
    image: Datascience,
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Master the art of online marketing and grow your business.',
    image: Digitalmarketing,
  },
  {
    id: 4,
    title: 'Graphic Design',
    description: 'Create visually stunning graphics and designs for various media.',
    image: Graphicdesign,
  },
  {
    id: 5,
    title: 'Machine Learning',
    description: 'Understand and implement machine learning algorithms and models.',
    image: Machinelearning,
  },
  {
    id: 6,
    title: 'Cybersecurity',
    description: 'Learn how to protect systems and networks from cyber threats.',
    image: Cybersecurity,
  },
];

const Catalog = () => {
  return (
    <div>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-12">Course Catalog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <div
                key={course.id}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-105"
                />
                <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <Link
                  to={`/course/${course.id}`}
                  className="inline-block px-6 py-3 text-white bg-yellow-500 hover:bg-yellow-400 rounded-lg transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
