import React from "react";
import { Link } from "react-router-dom";
import TextEditor from "./course/addCourse/editor";
import CourseHeader from "./course/header";


// eslint-disable-next-line react/prop-types
const addCategory = () => {

  const saveCategory =()=> {
      alert("");
  }

  return (
    <>
    <div>
      <CourseHeader/>
      <fieldset style={{marginTop: '20px', width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center'}} id="first">
        <div style={{width: '50%'}} className="add-course-info">
          <div className="add-course-form">
            <form action="#">
              <div className="form-group">
                <label className="add-course-label">Category Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course Title"
                />
              </div>
              <div className="form-group mb-0">
                <label className="add-course-label">Category Description</label>
                <div id="editor">
                  <TextEditor />
                </div>
              </div>
            </form>
          </div>
          <div className="widget-btn">
            <Link to="#" className="btn btn-info-light next_btn" onClick={saveCategory}>
              Save Category
            </Link>
          </div>
        </div>
      </fieldset>
      </div>
    </>
  );
};

export default addCategory;
