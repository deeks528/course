import { Link } from 'react-router-dom';
import { FileText, Clock, Calendar, ChevronRight, Download } from 'lucide-react';
import { assessments } from '../data/assessments';

const AssessmentsPage = () => {
  return (
    <div className="fade-in">
      <h1 className="page-title">Assessments</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Assessment Overview</h2>
        <p className="text-gray-700 mb-6">
          This course includes various assessment methods to evaluate your understanding of software engineering principles and DevOps practices. The assessments include assignments, a midterm examination, a term project, and a final examination.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-blue-600 mb-2">Assessment Breakdown</h3>
            <ul className="space-y-2">
              <li className="list-item">Assignments (3): 30% (10% each)</li>
              <li className="list-item">Midterm Examination: 20%</li>
              <li className="list-item">Term Project: 30%</li>
              <li className="list-item">Final Examination: 20%</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-blue-600 mb-2">Grading Scale</h3>
            <ul className="space-y-2">
              <li className="list-item">A: 90-100%</li>
              <li className="list-item">B: 80-89%</li>
              <li className="list-item">C: 70-79%</li>
              <li className="list-item">D: 60-69%</li>
              <li className="list-item">F: Below 60%</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2 className="section-title">Examinations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="assessment-card">
          <div className="flex justify-between items-start">
            <div>
              <div className="tag tag-amber">Midterm Examination</div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">{assessments.midterm.title}</h3>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1 text-amber-600" />
                  <span>Time: {assessments.midterm.timeAllowed}</span>
                </div>
                <div className="flex items-center">
                  <FileText size={16} className="mr-1 text-amber-600" />
                  <span>Total Marks: {assessments.midterm.totalMarks}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1 text-amber-600" />
                  <span>Date: Week 6</span>
                </div>
              </div>
              
              <h4 className="text-md font-medium text-amber-600 mb-2">Sections:</h4>
              <ul className="space-y-1">
                {assessments.midterm.sections.map((section, index) => (
                  <li key={index} className="list-item">
                    {section.title} ({section.marks} marks)
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="#" className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
              <Download size={16} className="mr-1" />
              <span>Sample Paper</span>
            </a>
          </div>
        </div>
        
        <div className="assessment-card">
          <div className="flex justify-between items-start">
            <div>
              <div className="tag tag-amber">Final Examination</div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">{assessments.final.title}</h3>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1 text-amber-600" />
                  <span>Time: {assessments.final.timeAllowed}</span>
                </div>
                <div className="flex items-center">
                  <FileText size={16} className="mr-1 text-amber-600" />
                  <span>Total Marks: {assessments.final.totalMarks}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1 text-amber-600" />
                  <span>Date: Week 12</span>
                </div>
              </div>
              
              <h4 className="text-md font-medium text-amber-600 mb-2">Sections:</h4>
              <ul className="space-y-1">
                {assessments.final.sections.map((section, index) => (
                  <li key={index} className="list-item">
                    {section.title} ({section.marks} marks)
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="#" className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
              <Download size={16} className="mr-1" />
              <span>Sample Paper</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="assessment-card mb-8">
        <div className="flex justify-between items-start">
          <div>
            <div className="tag tag-amber">Previous Year Questions</div>
            <h3 className="text-xl font-semibold text-amber-700 mb-2">{assessments.previousYear.title}</h3>
            <p className="text-gray-600 mb-4">{assessments.previousYear.description}</p>
            
            <h4 className="text-md font-medium text-amber-600 mb-2">Available Papers:</h4>
            <ul className="space-y-1">
              {assessments.previousYear.examPapers.map((paper, index) => (
                <li key={index} className="list-item">
                  {paper.title} ({paper.type}, {paper.marks} marks, {paper.duration})
                </li>
              ))}
            </ul>
          </div>
          
          <Link 
            to="/assessments/previous-year"
            className="flex items-center text-amber-600 hover:text-amber-800 transition-colors"
          >
            <span className="mr-1">View All</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
      
      <h2 className="section-title">Examination Guidelines</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-3">General Instructions</h3>
            <ul className="space-y-2">
              <li className="list-item">Arrive at least 15 minutes before the examination starts</li>
              <li className="list-item">Bring your student ID card for verification</li>
              <li className="list-item">Only blue or black pens are allowed for writing</li>
              <li className="list-item">No electronic devices are permitted except for approved calculators</li>
              <li className="list-item">Read all questions carefully before answering</li>
              <li className="list-item">Manage your time effectively to complete all sections</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-blue-700 mb-3">Preparation Tips</h3>
            <ul className="space-y-2">
              <li className="list-item">Review all lecture materials and assigned readings</li>
              <li className="list-item">Practice with previous year questions</li>
              <li className="list-item">Form study groups to discuss complex topics</li>
              <li className="list-item">Create summary notes for quick revision</li>
              <li className="list-item">Focus on understanding concepts rather than memorizing</li>
              <li className="list-item">Attend review sessions conducted before examinations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentsPage;

