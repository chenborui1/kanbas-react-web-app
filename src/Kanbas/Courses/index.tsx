import { courses } from "../../Kanbas/Database";
import {Navigate, Route, Routes, useParams,  useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Assignments from "./Assignments";
import Home from "./Home";

import Modules from "./Modules";
function Courses() {
    const navStyle = {
        color: 'black',
        fontSize: '25px'
        
        
      };
    const courseNameStyle = {
        color: 'red',
        fontSize: '25px'
        
        
      };
    
      const iconStyle = {
        color: 'red',
        fontSize: '30px',
        marginLeft: '10px'
      };

      const location = useLocation();
    
      const path = location.pathname.split('/');

// Filter out any empty strings that might result from leading/trailing slashes
        const filteredPath = path.filter(part => part !== '');
       
        // Add more conditions for other routes as needed
      
      
    
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
        <div className= "p-4">
      <h1><HiMiniBars3  style={iconStyle} /> <span style={courseNameStyle}>Course {course?.name} |</span>  <span style={navStyle}>{filteredPath[3]}</span></h1>  <hr /> </div>
      <CourseNavigation />
       <div>
         <div
           className="overflow-y-scroll position-fixed bottom-0 end-0"
           style={{ left: "240px", top: "100px" }} >
           <Routes>
             <Route path="/" element={<Navigate to="Home" />} />
             <Route path="Home" element={<Home/>} />

             <Route path="Modules" element={<Modules/>} />
             <Route path="Piazza" element={<h1>Piazza</h1>} />
             <Route path="Assignments" element={<Assignments/>} />

             <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
             <Route path="Grades" element={<h1>Grades</h1>} />
           </Routes>
         </div>
       </div>
    </div>
      
 
  );
}
export default Courses;