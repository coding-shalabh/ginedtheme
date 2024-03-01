import React, { useEffect, useState } from "react";
import TextEditor from "./course/addCourse/editor";
import CourseHeader from "./course/header";

const AddCategory = () => {
  
    const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://api.gined.in/api/colleges/');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const saveCategory = (event) => {
    event.preventDefault();
    alert("College saved!");
  };


  return (
    <>
      <div>
        <CourseHeader />
        <fieldset style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="first">
          <div style={{ width: '50%' }} className="add-course-info">
            <div className="add-course-form">
              <form action="#" onSubmit={saveCategory}>
                <div className="form-group">
                  <label className="add-course-label">College Name</label>
                  <input type="text" className="form-control" placeholder="College Name" />
                </div>
                <div className="form-group">
                  <label className="add-course-label">About the College</label>
                  <div id="editor">
                  <TextEditor />
                </div>
                </div>
                <div className="form-group">
                  <label className="add-course-label">Short Description</label>
                  <textarea className="form-control" placeholder="Short Description for College"></textarea>
                </div>
                <div className="form-group">
                  <label className="add-course-label">Virtual Tour Link</label>
                  <input type="text" className="form-control" placeholder="Virtual Tour Link" />
                </div>
                <div className="form-group">
                  <label className="add-course-label">Review for College</label>
                  <input type="number" className="form-control" placeholder="Review for College" />
                </div>
                <div className="form-group">
                  <label className="add-course-label">Placement Companies</label>
                  <input type="text" className="form-control" placeholder="Placement Companies" />
                </div>
                <div className="form-group">
                  <label className="add-course-label">Highest Package</label>
                  <input type="text" className="form-control" placeholder="Highest Package" />
                </div>
                <div className="form-group">
                  <label className="add-course-label">Average Package</label>
                  <input type="text" className="form-control" placeholder="Average Package" />
                </div>
                <div className="form-group">
                  <label className="add-course-label">Percentage Placed</label>
                  <input type="number" className="form-control" placeholder="Percentage Placed" />
                </div>
                <div className="form-group">
                  <label className="add-course-label">Select Course</label>
                  <select
                    className="form-control"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Repeat for other fields as necessary */}
                <div className="widget-btn">
                  <button type="submit" className="btn btn-info-light">
                    Save College
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p>Testing</p>
        </fieldset>
      </div>
    </>
  );
};

export default AddCategory;
