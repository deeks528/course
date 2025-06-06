import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { lectures } from '../data/lectures';

const LectureDetailPage = () => {
  const { id } = useParams();
  const lecture = lectures.find(lecture => lecture.id === id);
  
  if (!lecture) {
    return (
      <div className="text-center py-12">
        <BookOpen size={64} className="mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-medium text-gray-600 mb-2">Lecture Not Found</h2>
        <p className="text-gray-500 mb-6">The lecture you're looking for doesn't exist or has been moved.</p>
        <Link to="/lectures" className="btn btn-primary">
          Back to Lectures
        </Link>
      </div>
    );
  }
  
  return (
    <div className="fade-in">
      <Link to="/lectures" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft size={16} className="mr-1" />
        <span>Back to Lectures</span>
      </Link>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-t-4 border-blue-600">
        <div className="tag tag-blue mb-4">Unit {lecture.unit}</div>
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{lecture.title}</h1>
        <p className="text-gray-700 text-lg mb-6">{lecture.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Topics Covered</h2>
            <ul className="space-y-3">
              {lecture.topics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Key Points</h2>
            <ul className="space-y-3">
              {lecture.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-blue-600 mr-3 flex-shrink-0">•</div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 sticky top-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Lecture Resources</h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-blue-700 mb-2">Related Readings</h3>
              <ul className="space-y-2">
                <li className="list-item">Pressman, Chapter {lecture.unit * 2 - 1}</li>
                <li className="list-item">Pressman, Chapter {lecture.unit * 2}</li>
                {lecture.unit >= 3 && (
                  <li className="list-item">Gaikwad & Thakkar, Chapter {lecture.unit - 2}</li>
                )}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-blue-700 mb-2">Additional Resources</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2">•</div>
                  <a href="#" className="text-blue-600 hover:underline">Lecture Slides</a>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2">•</div>
                  <a href="#" className="text-blue-600 hover:underline">Practice Questions</a>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2">•</div>
                  <a href="#" className="text-blue-600 hover:underline">Supplementary Materials</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        {lectures.findIndex(l => l.id === id) > 0 ? (
          <Link 
            to={`/lectures/${lectures[lectures.findIndex(l => l.id === id) - 1].id}`}
            className="btn btn-outline"
          >
            Previous Lecture
          </Link>
        ) : (
          <div></div>
        )}
        
        {lectures.findIndex(l => l.id === id) < lectures.length - 1 ? (
          <Link 
            to={`/lectures/${lectures[lectures.findIndex(l => l.id === id) + 1].id}`}
            className="btn btn-primary"
          >
            Next Lecture
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default LectureDetailPage;

