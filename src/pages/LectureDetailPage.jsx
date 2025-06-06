import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { lectures_part1 } from '../data/lectures_part1';
import { lectures_part2 } from '../data/lectures_part2';

// Helper to recursively render content
const RenderContent = ({ data, level = 0 }) => {
  if (typeof data === 'string' || typeof data === 'number') {
    return <div className={`ml-${level * 4} mb-2`}>{data}</div>;
  }
  if (Array.isArray(data)) {
    return (
      <ul className={`ml-${level * 4} list-disc`}>
        {data.map((item, idx) => (
          <li key={idx}>
            <RenderContent data={item} level={level + 1} />
          </li>
        ))}
      </ul>
    );
  }
  if (typeof data === 'object' && data !== null) {
    return (
      <div className={`ml-${level * 4} mb-2`}>
        {Object.entries(data).map(([key, value], idx) => (
          <div key={idx} className="mb-2">
            <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong>
            <RenderContent data={value} level={level + 1} />
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Add the SectionedContent component above the LectureDetailPage component
const SectionedContent = ({ content }) => {
  if (!content) return null;

  return (
    <div className="space-y-8">
      {Object.entries(content).map(([sectionKey, sectionValue], idx) => (
        <div key={idx}>
          <h3 className="text-xl font-bold text-blue-700 mb-2 capitalize">
            {sectionKey.replace(/([A-Z])/g, ' $1')}
          </h3>
          <SectionContent value={sectionValue} />
        </div>
      ))}
    </div>
  );
};

const SectionContent = ({ value }) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return <p className="mb-2 text-gray-700">{value}</p>;
  }
  if (Array.isArray(value)) {
    return (
      <ul className="list-disc ml-6 space-y-1">
        {value.map((item, idx) => (
          <li key={idx}>
            <SectionContent value={item} />
          </li>
        ))}
      </ul>
    );
  }
  if (typeof value === 'object' && value !== null) {
    return (
      <div className="ml-4 space-y-2">
        {Object.entries(value).map(([k, v], idx) => (
          <div key={idx}>
            <span className="font-semibold capitalize">{k.replace(/([A-Z])/g, ' $1')}: </span>
            <SectionContent value={v} />
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const LectureDetailPage = () => {
  const { id } = useParams();
  const allLectures = [...lectures_part1, ...lectures_part2];
  const lecture = allLectures.find(lecture => lecture.id === id);
  const currentIndex = allLectures.findIndex(l => l.id === id);
  
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
        <div className="tag tag-blue mb-4">Part {lecture.part}</div>
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{lecture.title}</h1>
        <p className="text-gray-700 text-lg mb-6">{lecture.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Lecture Content</h2>
            <SectionedContent content={lecture.content} />
          </div>
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
        {currentIndex > 0 ? (
          <Link 
            to={`/lectures/${allLectures[currentIndex - 1].id}`}
            className="btn btn-outline"
          >
            Previous Lecture
          </Link>
        ) : (
          <div></div>
        )}
        
        {currentIndex < allLectures.length - 1 ? (
          <Link 
            to={`/lectures/${allLectures[currentIndex + 1].id}`}
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

