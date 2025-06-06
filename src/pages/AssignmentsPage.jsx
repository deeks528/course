import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, Award } from 'lucide-react';
import { assignments } from '../data/assignments';

const AssignmentsPage = () => {
  return (
    <div className="fade-in">
      <h1 className="page-title">Assignments</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Assignment Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-blue-600 mb-2">Submission Requirements</h3>
            <ul className="space-y-2">
              <li className="list-item">All assignments must be submitted through the course learning management system</li>
              <li className="list-item">Submit files in the required format (PDF, ZIP, etc.) as specified in each assignment</li>
              <li className="list-item">Include your name, student ID, and assignment number in all submissions</li>
              <li className="list-item">Follow the naming convention: SE301_A#_LastName_FirstName</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-blue-600 mb-2">Late Submission Policy</h3>
            <ul className="space-y-2">
              <li className="list-item">Assignments submitted late will incur a 10% penalty per day</li>
              <li className="list-item">No submissions will be accepted after 3 days past the deadline</li>
              <li className="list-item">Extensions may be granted for valid reasons if requested before the deadline</li>
              <li className="list-item">Technical issues are not considered valid reasons for late submissions</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {assignments.map(assignment => (
          <div key={assignment.id} className="assignment-card slide-in">
            <div className="flex justify-between items-start">
              <div>
                <div className="tag tag-green">Assignment {assignment.id}</div>
                <h2 className="text-xl font-semibold text-green-700 mb-2">{assignment.title}</h2>
                <p className="text-gray-600 mb-4">{assignment.objective}</p>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1 text-green-600" />
                    <span>Due: {assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Award size={16} className="mr-1 text-green-600" />
                    <span>Weight: 10% of final grade</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1 text-green-600" />
                    <span>Estimated time: 10-15 hours</span>
                  </div>
                </div>
                
                <h3 className="text-md font-medium text-green-600 mb-2">Deliverables:</h3>
                <ul className="space-y-1">
                  {assignment.deliverables.slice(0, 2).map((deliverable, index) => (
                    <li key={index} className="list-item">{deliverable}</li>
                  ))}
                  {assignment.deliverables.length > 2 && (
                    <li className="text-gray-500 italic">...and {assignment.deliverables.length - 2} more items</li>
                  )}
                </ul>
              </div>
              
              <Link 
                to={`/assignments/${assignment.id}`}
                className="flex items-center text-green-600 hover:text-green-800 transition-colors"
              >
                <span className="mr-1">View Details</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsPage;

