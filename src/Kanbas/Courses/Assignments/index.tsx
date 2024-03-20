import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {db} from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <>
      <div className="d-flex align-items-center">
       
        <div className="input-group" style={{ width: '300px',  marginRight: "100px"}}>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignment"
            aria-label="Search for Assignment"
            aria-describedby="search-addon"
            
          />
          </div>
        
        <div>
          <button className="btn btn-secondary me-1">+Group</button>
          <button className="btn btn-danger me-1">+Assignment</button>
          <button className="btn btn-secondary me-1"><FaEllipsisV /></button>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <div>
                  <FaEllipsisV className="me-2" />
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </div>
                <div>
                  Due Date: {assignment.dueDate}
                </div>
                <div>
                  Availability: {assignment.availability}
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Assignments;
