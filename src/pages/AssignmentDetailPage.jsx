import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Award, Download, CheckCircle } from 'lucide-react';
import { assignments } from '../data/assignments';

const AssignmentDetailPage = () => {
  const { id } = useParams();
  const assignmentId = parseInt(id);
  const assignment = assignments.find(a => a.id === assignmentId);
  
  if (!assignment) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={64} className="mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-medium text-gray-600 mb-2">Assignment Not Found</h2>
        <p className="text-gray-500 mb-6">The assignment you're looking for doesn't exist or has been moved.</p>
        <Link to="/assignments" className="btn btn-primary">
          Back to Assignments
        </Link>
      </div>
    );
  }
  
  return (
    <div className="fade-in">
      <Link to="/assignments" className="inline-flex items-center text-green-600 hover:text-green-800 mb-6">
        <ArrowLeft size={16} className="mr-1" />
        <span>Back to Assignments</span>
      </Link>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-t-4 border-green-600">
        <div className="tag tag-green mb-4">Assignment {assignment.id}</div>
        <h1 className="text-3xl font-bold text-green-800 mb-4">{assignment.title}</h1>
        <p className="text-gray-700 text-lg mb-6">{assignment.objective}</p>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6 text-gray-600">
          <div className="flex items-center">
            <Calendar size={18} className="mr-2 text-green-600" />
            <span>Due: {assignment.dueDate}</span>
          </div>
          <div className="flex items-center">
            <Award size={18} className="mr-2 text-green-600" />
            <span>Weight: 10% of final grade</span>
          </div>
          <div className="flex items-center">
            <Clock size={18} className="mr-2 text-green-600" />
            <span>Estimated time: 10-15 hours</span>
          </div>
        </div>
        
        <div className="flex justify-end">
          <a href="#" className="btn btn-outline flex items-center">
            <Download size={16} className="mr-2" />
            <span>Download Assignment PDF</span>
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Instructions</h2>
            <ol className="space-y-4">
              {assignment.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="font-bold text-green-700 mr-3">{index + 1}.</span>
                  <span className="text-gray-700">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Deliverables</h2>
            <ul className="space-y-3">
              {assignment.deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-green-600 mr-3 flex-shrink-0">•</div>
                  <span className="text-gray-700">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Evaluation Criteria</h2>
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Criterion</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {assignment.evaluationCriteria.map((criterion, index) => (
                    <tr key={index}>
                      <td>{criterion.criterion}</td>
                      <td>{criterion.percentage}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-green-50 rounded-lg p-6 border border-green-200 sticky top-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Resources & References</h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-green-700 mb-2">References</h3>
              <ul className="space-y-2">
                {assignment.references.map((reference, index) => (
                  <li key={index} className="list-item text-sm">{reference}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium text-green-700 mb-2">Submission Instructions</h3>
              <ul className="space-y-2">
                <li className="list-item">Submit through the course LMS</li>
                <li className="list-item">Use the file naming convention: SE301_A{assignment.id}_LastName_FirstName</li>
                <li className="list-item">Submit all deliverables in a single ZIP file</li>
                <li className="list-item">Include a README file with any special instructions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-green-700 mb-2">Need Help?</h3>
              <p className="text-gray-600 text-sm mb-4">
                If you have questions about this assignment, please contact the instructor during office hours or post in the course forum.
              </p>
              <a href="#" className="text-green-600 hover:underline text-sm">
                View FAQ for this assignment
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        {assignmentId > 1 ? (
          <Link 
            to={`/assignments/${assignmentId - 1}`}
            className="btn btn-outline"
          >
            Previous Assignment
          </Link>
        ) : (
          <div></div>
        )}
        
        {assignmentId < assignments.length ? (
          <Link 
            to={`/assignments/${assignmentId + 1}`}
            className="btn btn-primary"
          >
            Next Assignment
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default AssignmentDetailPage;

