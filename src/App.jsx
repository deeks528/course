import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, BookOpen, FileText, ClipboardCheck, Award, FolderGit2, Menu, X } from 'lucide-react';
import './App.css';

// Pages
import HomePage from './pages/HomePage';
import SyllabusPage from './pages/SyllabusPage';
import LecturesPage from './pages/LecturesPage';
import LectureDetailPage from './pages/LectureDetailPage';
import AssignmentsPage from './pages/AssignmentsPage';
import AssignmentDetailPage from './pages/AssignmentDetailPage';
import AssessmentsPage from './pages/AssessmentsPage';
import ProjectPage from './pages/ProjectPage';
import PreviousYearQuestionsPage from './pages/PreviousYearQuestionsPage';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-800 text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold flex items-center" onClick={closeMobileMenu}>
              <BookOpen className="mr-2" />
              <span>SE & DevOps Course</span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden flex items-center" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="flex items-center hover:text-blue-200 transition-colors">
                <Home className="mr-1" size={18} />
                <span>Home</span>
              </Link>
              <Link to="/syllabus" className="flex items-center hover:text-blue-200 transition-colors">
                <FileText className="mr-1" size={18} />
                <span>Syllabus</span>
              </Link>
              <Link to="/lectures" className="flex items-center hover:text-blue-200 transition-colors">
                <BookOpen className="mr-1" size={18} />
                <span>Lectures</span>
              </Link>
              <Link to="/assignments" className="flex items-center hover:text-blue-200 transition-colors">
                <ClipboardCheck className="mr-1" size={18} />
                <span>Assignments</span>
              </Link>
              <Link to="/assessments" className="flex items-center hover:text-blue-200 transition-colors">
                <Award className="mr-1" size={18} />
                <span>Assessments</span>
              </Link>
              <Link to="/project" className="flex items-center hover:text-blue-200 transition-colors">
                <FolderGit2 className="mr-1" size={18} />
                <span>Project</span>
              </Link>
            </nav>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden bg-blue-700 px-4 py-2">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="flex items-center hover:text-blue-200 transition-colors py-2" onClick={closeMobileMenu}>
                  <Home className="mr-2" size={18} />
                  <span>Home</span>
                </Link>
                <Link to="/syllabus" className="flex items-center hover:text-blue-200 transition-colors py-2" onClick={closeMobileMenu}>
                  <FileText className="mr-2" size={18} />
                  <span>Syllabus</span>
                </Link>
                <Link to="/lectures" className="flex items-center hover:text-blue-200 transition-colors py-2" onClick={closeMobileMenu}>
                  <BookOpen className="mr-2" size={18} />
                  <span>Lectures</span>
                </Link>
                <Link to="/assignments" className="flex items-center hover:text-blue-200 transition-colors py-2" onClick={closeMobileMenu}>
                  <ClipboardCheck className="mr-2" size={18} />
                  <span>Assignments</span>
                </Link>
                <Link to="/assessments" className="flex items-center hover:text-blue-200 transition-colors py-2" onClick={closeMobileMenu}>
                  <Award className="mr-2" size={18} />
                  <span>Assessments</span>
                </Link>
                <Link to="/project" className="flex items-center hover:text-blue-200 transition-colors py-2" onClick={closeMobileMenu}>
                  <FolderGit2 className="mr-2" size={18} />
                  <span>Project</span>
                </Link>
              </div>
            </nav>
          )}
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/syllabus" element={<SyllabusPage />} />
            <Route path="/lectures" element={<LecturesPage />} />
            <Route path="/lectures/:id" element={<LectureDetailPage />} />
            <Route path="/assignments" element={<AssignmentsPage />} />
            <Route path="/assignments/:id" element={<AssignmentDetailPage />} />
            <Route path="/assessments" element={<AssessmentsPage />} />
            <Route path="/assessments/previous-year" element={<PreviousYearQuestionsPage />} />
            <Route path="/project" element={<ProjectPage />} />
          </Routes>
        </main>

        <footer className="bg-blue-800 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">Software Engineering and DevOps</h3>
                <p className="text-sm text-blue-200">B.Tech 2nd Year Course</p>
              </div>
              <div className="text-sm text-blue-200">
                <p>&copy; {new Date().getFullYear()} - All Rights Reserved</p>
                <p>Last Updated: June 2025</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

