import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download } from 'lucide-react';
import { assessments } from '../data/assessments';

const PreviousYearQuestionsPage = () => {
  return (
    <div className="fade-in">
      <Link to="/assessments" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-6">
        <ArrowLeft size={16} className="mr-1" />
        <span>Back to Assessments</span>
      </Link>
      
      <h1 className="page-title">Previous Year Questions</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-amber-700 mb-4">{assessments.previousYear.title}</h2>
        <p className="text-gray-700 mb-6">{assessments.previousYear.description}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <a href="#regular-exams" className="tag tag-amber hover:bg-amber-200 transition-colors">Regular Examinations</a>
          <a href="#model-papers" className="tag tag-amber hover:bg-amber-200 transition-colors">Model Papers</a>
          <a href="#mid-exams" className="tag tag-amber hover:bg-amber-200 transition-colors">Mid Examinations</a>
        </div>
      </div>
      
      <div id="regular-exams" className="mb-12">
        <h2 className="section-title">Regular Examinations</h2>
        
        <div className="assessment-card">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-3">B.Tech. II Year II Sem. Regular Examinations June - 2024</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600">
                <div className="flex items-center">
                  <FileText size={16} className="mr-1 text-amber-600" />
                  <span>60 Marks</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-600 mr-1">•</span>
                  <span>3 Hours</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-md font-medium text-amber-600 mb-2">Part A: Short Answer Questions (10 marks)</h4>
                <ul className="space-y-1">
                  <li className="list-item">Define software.</li>
                  <li className="list-item">Give examples of user requirements.</li>
                  <li className="list-item">Write a short note on interface specification.</li>
                  <li className="list-item">What are the Metrics for Software Quality?</li>
                  <li className="list-item">Define Validation Testing.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-amber-600 mb-2">Part B: Long Answer Questions (50 marks)</h4>
                <ul className="space-y-1">
                  <li className="list-item">What is a process model in software engineering? Demonstrate the Waterfall Model. What is legacy software? Why legacy software need to be evolved.</li>
                  <li className="list-item">Give an overview of various steps in requirements engineering process.</li>
                  <li className="list-item">What are the principles and practices of DevOps? Explain. What are the test strategies for object-oriented software?</li>
                </ul>
              </div>
            </div>
            
            <a href="#" className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
              <Download size={16} className="mr-1" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
      
      <div id="model-papers" className="mb-12">
        <h2 className="section-title">Model Papers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="assessment-card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-amber-700 mb-3">B.Tech. II Year II Sem. Exam Model Paper-I</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <FileText size={16} className="mr-1 text-amber-600" />
                    <span>40 Marks</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-600 mr-1">•</span>
                    <span>3 Hours</span>
                  </div>
                </div>
                
                <a href="#" className="text-amber-600 hover:underline">View sample questions</a>
              </div>
              
              <a href="#" className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
                <Download size={16} className="mr-1" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
          
          <div className="assessment-card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-amber-700 mb-3">B.Tech. II Year II Sem. Regular Examinations Model Paper-II</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <FileText size={16} className="mr-1 text-amber-600" />
                    <span>60 Marks</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-600 mr-1">•</span>
                    <span>3 Hours</span>
                  </div>
                </div>
                
                <a href="#" className="text-amber-600 hover:underline">View sample questions</a>
              </div>
              
              <a href="#" className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
                <Download size={16} className="mr-1" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div id="mid-exams" className="mb-12">
        <h2 className="section-title">Mid Examinations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="assessment-card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-amber-700 mb-3">B.Tech. II Year II Sem. I Mid Examinations, February, 2025</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <FileText size={16} className="mr-1 text-amber-600" />
                    <span>40 Marks</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-600 mr-1">•</span>
                    <span>2 Hours</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-md font-medium text-amber-600 mb-2">Topics Covered:</h4>
                  <ul className="space-y-1">
                    <li className="list-item">The Nature of Software, Software Engineering</li>
                    <li className="list-item">The Software Process</li>
                    <li className="list-item">Software Requirements</li>
                  </ul>
                </div>
              </div>
              
              <a href="#" className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
                <Download size={16} className="mr-1" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
          
          <div className="assessment-card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-amber-700 mb-3">B.Tech. II Year II Sem. II Mid Examinations, April, 2025</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <FileText size={16} className="mr-1 text-amber-600" />
                    <span>40 Marks</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-amber-600 mr-1">•</span>
                    <span>2 Hours</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-md font-medium text-amber-600 mb-2">Topics Covered:</h4>
                  <ul className="space-y-1">
                    <li className="list-item">Quality, Testing, DevOps</li>
                    <li className="list-item">Tool Suits</li>
                    <li className="list-item">DevOps with Cloud</li>
                  </ul>
                </div>
              </div>
              
              <a href="#" className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
                <Download size={16} className="mr-1" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
        <h2 className="text-xl font-semibold text-amber-800 mb-3">Examination Preparation Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-amber-700 mb-2">Study Strategies</h3>
            <ul className="space-y-1">
              <li className="list-item">Review all previous year questions to understand the pattern</li>
              <li className="list-item">Create a study schedule focusing on all units</li>
              <li className="list-item">Practice writing answers within the time constraints</li>
              <li className="list-item">Focus on understanding concepts rather than memorizing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-amber-700 mb-2">Important Topics</h3>
            <ul className="space-y-1">
              <li className="list-item">Software Process Models (frequently asked)</li>
              <li className="list-item">Requirements Engineering Process</li>
              <li className="list-item">DevOps Principles and Practices</li>
              <li className="list-item">Tool Suits and their features</li>
              <li className="list-item">Cloud Integration with DevOps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousYearQuestionsPage;

