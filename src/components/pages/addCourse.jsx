import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CourseHeader from "./course/header";

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const saveCourse = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Prepare the course data
    const courseData = {
      title: courseTitle,
      description: courseDescription,
    };

    try {
      // Make a POST request to your backend API to save the course
      const response = await axios.post("https://api.gined.in/api/courses/", courseData);
      console.log("Course Saved Successfully:", response.data);
      alert('Course Saved Successfully');
      // Optionally, reset the form fields or handle success (e.g., show success message, redirect)
    } catch (error) {
      console.error("Error saving course:", error.response ? error.response.data : error.message);
      // Optionally, handle errors (e.g., show error message)
    }
  };



  return (
    <>
      <div>
        <CourseHeader />
        <fieldset style={{ marginTop: "20px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} id="first">
          <div style={{ width: "50%" }} className="add-course-info">
            <div className="add-course-form">
              <form onSubmit={saveCourse}>
                <div className="form-group">
                  <label className="add-course-label">Course Title</label>
                  <input type="text" className="form-control" placeholder="Course Title" value={courseTitle} 
                    onChange={(e) => setCourseTitle(e.target.value)}
                  />
                </div>
                <div className="form-group mb-0">
                  <label className="add-course-label">Course Description</label>                  
                  <CKEditor
                    editor={ClassicEditor}
                    data={courseDescription}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setCourseDescription(data);
                    }}
                  />
                </div>
                <div className="widget-btn">
                  <button type="submit" className="btn btn-info-light">
                    Save Course
                  </button>
                </div>
              </form>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default AddCourse;
