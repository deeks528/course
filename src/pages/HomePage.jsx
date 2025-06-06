import { Link } from 'react-router-dom';
import { BookOpen, FileText, ClipboardCheck, Award, FolderGit2 } from 'lucide-react';
import { syllabus } from '../data/syllabus';

const HomePage = () => {
  return (
    <div className="fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">{syllabus.courseTitle}</h1>
        <p className="text-xl text-gray-600">B.Tech 2nd Year Course | {syllabus.courseCode} | {syllabus.credits} Credits</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Course Overview</h2>
        <p className="text-gray-700 mb-6">{syllabus.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-blue-600 mb-3">Learning Objectives</h3>
            <ul className="space-y-2">
              {syllabus.objectives.map((objective, index) => (
                <li key={index} className="list-item">{objective}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-blue-600 mb-3">Prerequisites</h3>
            <ul className="space-y-2">
              {syllabus.prerequisites.map((prerequisite, index) => (
                <li key={index} className="list-item">{prerequisite}</li>
              ))}
            </ul>
            
            <h3 className="text-xl font-medium text-blue-600 mb-3 mt-6">Required Textbooks</h3>
            <ul className="space-y-3">
              {syllabus.textbooks.map((book, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-medium">{book.title}</span><br />
                  <span className="text-sm">{book.author} ({book.year})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Course Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link to="/syllabus" className="card hover:border-l-4 hover:border-blue-500 group">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors">
              <FileText className="text-blue-600" />
            </div>
            <h3 className="text-xl font-medium text-blue-700">Syllabus</h3>
          </div>
          <p className="text-gray-600">Detailed course structure, units, and assessment methods.</p>
        </Link>

        <Link to="/lectures" className="card hover:border-l-4 hover:border-blue-500 group">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors">
              <BookOpen className="text-blue-600" />
            </div>
            <h3 className="text-xl font-medium text-blue-700">Lectures</h3>
          </div>
          <p className="text-gray-600">Comprehensive lecture materials for all course units.</p>
        </Link>

        <Link to="/assignments" className="card hover:border-l-4 hover:border-green-500 group">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4 group-hover:bg-green-200 transition-colors">
              <ClipboardCheck className="text-green-600" />
            </div>
            <h3 className="text-xl font-medium text-green-700">Assignments</h3>
          </div>
          <p className="text-gray-600">Practical assignments to apply course concepts.</p>
        </Link>

        <Link to="/assessments" className="card hover:border-l-4 hover:border-amber-500 group">
          <div className="flex items-center mb-4">
            <div className="bg-amber-100 p-3 rounded-full mr-4 group-hover:bg-amber-200 transition-colors">
              <Award className="text-amber-600" />
            </div>
            <h3 className="text-xl font-medium text-amber-700">Assessments</h3>
          </div>
          <p className="text-gray-600">Examination details and previous year questions.</p>
        </Link>

        <Link to="/project" className="card hover:border-l-4 hover:border-purple-500 group">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors">
              <FolderGit2 className="text-purple-600" />
            </div>
            <h3 className="text-xl font-medium text-purple-700">Term Project</h3>
          </div>
          <p className="text-gray-600">Comprehensive project to apply software engineering and DevOps practices.</p>
        </Link>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">Course Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-blue-700 mb-2">Software Engineering</h3>
            <ul className="space-y-1">
              <li className="list-item">Process Models and Methodologies</li>
              <li className="list-item">Requirements Engineering</li>
              <li className="list-item">Software Quality and Testing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-blue-700 mb-2">DevOps</h3>
            <ul className="space-y-1">
              <li className="list-item">CI/CD Pipelines</li>
              <li className="list-item">Tool Suites and Orchestration</li>
              <li className="list-item">Cloud Integration and Deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

