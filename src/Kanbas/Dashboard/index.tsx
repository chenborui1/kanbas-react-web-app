import { Link } from "react-router-dom";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; }) {
 
  



  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h5>Add New Course</h5>
      <input placeholder={course.name} className="form-control"  
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input placeholder={course.number} className="form-control" 
      onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input placeholder={course.startDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
      <input placeholder={course.endDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <input placeholder={course.description} className="form-control"
      onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>


      <h2>Published Courses (3)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text">{course.description}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go  </Link>
                    <button onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}className="btn btn-secondary">
              Edit
            </button>

                    <button onClick={() => deleteCourse(course._id)} className="btn btn-danger"
                     >
      Delete
    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;