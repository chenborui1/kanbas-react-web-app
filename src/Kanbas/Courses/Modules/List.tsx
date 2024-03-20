import React, { useState } from "react";
import "./index.css";
import { db } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
      <li className="list-group-item unique-list-item">
  <div className="unique-module-form">
    <input
      className="unique-module-name-input"
      placeholder="New Module"
      value={module.name}
      onChange={(e) =>
        dispatch(setModule({ ...module, name: e.target.value }))
      }
    />
    <textarea
      className="unique-module-description-textarea"
      placeholder="New Description"
      value={module.description}
      onChange={(e) =>
        dispatch(setModule({ ...module, description: e.target.value }))
      }
    />
    <button
      className="unique-module-add-btn"
      onClick={() => dispatch(addModule({ ...module, course: courseId }))}
    >
      Add
    </button>
    <button
      className="unique-module-update-btn"
      onClick={() => dispatch(updateModule(module))}
    >
      Update
    </button>
  </div>
</li>

        {moduleList.filter((module) => module.course === courseId).

        map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
           
              {module.name}
              <button  className="unique-module-add-btn"
              onClick={() => dispatch(setModule(module))} >
              Edit
            </button>

            <button className="unique-module-delete-btn"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

              <span className="float-end">
            
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;