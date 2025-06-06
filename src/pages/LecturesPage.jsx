import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Filter } from 'lucide-react';
import { lectures_part1 } from '../data/lectures_part1';
import { lectures_part2 } from '../data/lectures_part2';

const LecturesPage = () => {
  const [activeUnit, setActiveUnit] = useState(0); // 0 means all units
  
  const units = [
    { id: 0, name: 'All Units' },
    { id: 1, name: 'Unit I: The Nature of Software, Software Engineering, The Software Process' },
    { id: 2, name: 'Unit II: Software Requirements' },
    { id: 3, name: 'Unit III: Quality, Testing, DevOps' },
    { id: 4, name: 'Unit IV: Tool Suits' },
    { id: 5, name: 'Unit V: DevOps with Cloud' }
  ];
  
  const allLectures = [...lectures_part1, ...lectures_part2];
  const filteredLectures = activeUnit === 0 
    ? allLectures 
    : allLectures.filter(lecture => lecture.unit === activeUnit);
  
  return (
    <div className="fade-in">
      <h1 className="page-title">Lecture Materials</h1>
      
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Filter className="mr-2 text-blue-600" />
          <h2 className="text-lg font-medium">Filter by Unit</h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {units.map(unit => (
            <button
              key={unit.id}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeUnit === unit.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveUnit(unit.id)}
            >
              {unit.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredLectures.map(lecture => (
          <div key={lecture.id} className="lecture-card slide-in">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex gap-2 mb-4">
                  <div className="tag tag-blue">Unit {lecture.unit}</div>
                  <div className="tag tag-blue">Part {lecture.part}</div>
                </div>
                <h2 className="text-xl font-semibold text-blue-700 mb-2">{lecture.title}</h2>
                <p className="text-gray-600 mb-4">{lecture.description}</p>
                
                <h3 className="text-md font-medium text-blue-600 mb-2">Key Topics:</h3>
                <ul className="space-y-1 mb-4">
                  {lecture.topics.slice(0, 3).map((topic, index) => (
                    <li key={index} className="list-item">{topic}</li>
                  ))}
                  {lecture.topics.length > 3 && (
                    <li className="text-gray-500 italic">...and {lecture.topics.length - 3} more topics</li>
                  )}
                </ul>
              </div>
              
              <Link 
                to={`/lectures/${lecture.id}`}
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span className="mr-1">View Lecture</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        ))}
        
        {filteredLectures.length === 0 && (
          <div className="text-center py-12">
            <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-600">No lectures found for this unit</h3>
            <p className="text-gray-500">Please select a different unit or check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LecturesPage;

