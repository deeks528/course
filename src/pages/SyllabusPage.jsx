import { syllabus } from '../data/syllabus';

const SyllabusPage = () => {
  return (
    <div className="fade-in">
      <h1 className="page-title">Course Syllabus</h1>
      
      <div className="card">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">{syllabus.courseTitle}</h2>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div><span className="font-medium">Course Code:</span> {syllabus.courseCode}</div>
            <div><span className="font-medium">Credits:</span> {syllabus.credits}</div>
            <div><span className="font-medium">Semester:</span> {syllabus.semester}</div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="subsection-title">Course Description</h3>
          <p className="text-gray-700">{syllabus.description}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="subsection-title">Course Objectives</h3>
          <ul className="space-y-2">
            {syllabus.objectives.map((objective, index) => (
              <li key={index} className="list-item">{objective}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="subsection-title">Prerequisites</h3>
          <ul className="space-y-2">
            {syllabus.prerequisites.map((prerequisite, index) => (
              <li key={index} className="list-item">{prerequisite}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <h2 className="section-title">Required Textbooks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {syllabus.textbooks.map((book, index) => (
          <div key={index} className="card">
            <h3 className="text-lg font-medium text-blue-700 mb-2">{book.title}</h3>
            <p className="text-gray-700 mb-1">{book.author}</p>
            <p className="text-gray-600 text-sm">{book.edition}, {book.publisher}, {book.year}</p>
          </div>
        ))}
      </div>
      
      <h2 className="section-title">Recommended References</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {syllabus.references.map((book, index) => (
          <div key={index} className="card">
            <h3 className="text-lg font-medium text-blue-700 mb-2">{book.title}</h3>
            <p className="text-gray-700 mb-1">{book.author}</p>
            <p className="text-gray-600 text-sm">{book.edition ? `${book.edition}, ` : ''}{book.publisher}, {book.year}</p>
          </div>
        ))}
      </div>
      
      <h2 className="section-title">Course Schedule</h2>
      {syllabus.units.map((unit, index) => (
        <div key={index} className="card">
          <h3 className="text-lg font-medium text-blue-700 mb-2">
            Unit {index + 1}: {unit.title}
            <span className="text-sm font-normal text-gray-500 ml-2">(Weeks {unit.weeks})</span>
          </h3>
          <ul className="space-y-2">
            {unit.topics.map((topic, topicIndex) => (
              <li key={topicIndex} className="list-item">{topic}</li>
            ))}
          </ul>
        </div>
      ))}
      
      <h2 className="section-title">Assessment Methods</h2>
      <div className="card">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Assessment</th>
                <th>Percentage</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {syllabus.assessment.map((item, index) => (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.percentage}%</td>
                  <td>{item.details || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <h3 className="subsection-title">Assignment Details</h3>
        <ul className="space-y-2">
          {syllabus.assignments.map((assignment, index) => (
            <li key={index} className="list-item">
              <span className="font-medium">Assignment {index + 1}:</span> {assignment.title} (Due: {assignment.due})
            </li>
          ))}
        </ul>
      </div>
      
      <h2 className="section-title">Grading Scale</h2>
      <div className="card">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Grade</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              {syllabus.gradingScale.map((grade, index) => (
                <tr key={index}>
                  <td>{grade.grade}</td>
                  <td>{grade.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <h2 className="section-title">Course Policies</h2>
      <div className="card">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-blue-700 mb-2">Attendance</h3>
          <p className="text-gray-700">{syllabus.policies.attendance}</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium text-blue-700 mb-2">Late Submissions</h3>
          <p className="text-gray-700">{syllabus.policies.lateSubmissions}</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium text-blue-700 mb-2">Academic Integrity</h3>
          <p className="text-gray-700">{syllabus.policies.academicIntegrity}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-blue-700 mb-2">Communication</h3>
          <p className="text-gray-700">{syllabus.policies.communication}</p>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;

