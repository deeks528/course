import { project } from '../data/project';
import { Calendar, CheckSquare, Users, Layers, Server } from 'lucide-react';

const ProjectPage = () => {
  return (
    <div className="fade-in">
      <h1 className="page-title">Term Project</h1>
      
      <div className="project-card mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">{project.title}</h2>
        <p className="text-gray-700 mb-6">{project.overview}</p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium text-purple-600 mb-3">Project Objectives</h3>
          <ul className="space-y-2">
            {project.objectives.map((objective, index) => (
              <li key={index} className="list-item">{objective}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <h2 className="section-title">Project Requirements</h2>
          
          {project.requirements.map((requirement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                {index === 0 ? (
                  <Users className="text-purple-600 mr-3" />
                ) : (
                  <CheckSquare className="text-purple-600 mr-3" />
                )}
                <h3 className="text-xl font-medium text-purple-700">{requirement.title}</h3>
              </div>
              
              <ul className="space-y-3 mb-4">
                {requirement.details.map((detail, detailIndex) => {
                  if (typeof detail === 'string') {
                    return (
                      <li key={detailIndex} className="list-item">{detail}</li>
                    );
                  } else {
                    return (
                      <li key={detailIndex} className="mb-4">
                        <div className="font-medium text-purple-600 mb-2">{detail.option}</div>
                        <ul className="space-y-1 pl-6">
                          {detail.description.map((desc, descIndex) => (
                            <li key={descIndex} className="list-item">{desc}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          ))}
          
          <h2 className="section-title">Project Phases</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-purple-200"></div>
            
            {project.phases.map((phase, index) => (
              <div key={index} className="relative mb-8 pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-medium text-purple-700 mb-3">{phase.title}</h3>
                  
                  <h4 className="font-medium text-purple-600 mb-2">Deliverables:</h4>
                  <ul className="space-y-2 mb-4">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="list-item">{deliverable}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="sticky top-6">
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 mb-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">Important Dates</h3>
              <ul className="space-y-3">
                {project.importantDates.map((date, index) => (
                  <li key={index} className="flex items-start">
                    <Calendar size={16} className="text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{date.event}:</span>
                      <span className="text-gray-700 ml-1">{date.deadline}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-700 mb-4">Evaluation Criteria</h3>
              <ul className="space-y-2">
                {project.evaluationCriteria.map((criterion, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">{criterion.criterion}</span>
                    <span className="font-medium text-purple-700">{criterion.percentage}%</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-purple-700 mb-4">Resources</h3>
              <ul className="space-y-2">
                {project.resources.map((resource, index) => (
                  <li key={index} className="list-item">{resource}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {project.technicalRequirements.map((requirement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {index === 0 ? (
                <Layers className="text-purple-600 mr-3" />
              ) : index === 1 ? (
                <Server className="text-purple-600 mr-3" />
              ) : (
                <CheckSquare className="text-purple-600 mr-3" />
              )}
              <h3 className="text-xl font-medium text-purple-700">{requirement.category}</h3>
            </div>
            
            {requirement.requirements && (
              <ul className="space-y-2">
                {requirement.requirements.map((req, reqIndex) => (
                  <li key={reqIndex} className="list-item">{req}</li>
                ))}
              </ul>
            )}
            
            {requirement.description && (
              <p className="text-gray-700 mb-4">{requirement.description}</p>
            )}
            
            {requirement.options && (
              <div className="space-y-4">
                {requirement.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <h4 className="font-medium text-purple-600 mb-2">{option.category}:</h4>
                    <ul className="space-y-1">
                      {option.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="list-item">{tech}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Submission Guidelines</h2>
        <ul className="space-y-2">
          {project.submissionGuidelines.map((guideline, index) => (
            <li key={index} className="list-item">{guideline}</li>
          ))}
        </ul>
      </div>
      
      <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
        <h2 className="text-xl font-semibold text-purple-800 mb-4">Academic Integrity</h2>
        <ul className="space-y-2">
          {project.academicIntegrity.map((item, index) => (
            <li key={index} className="list-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;

