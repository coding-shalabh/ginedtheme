import React, { useEffect, useState } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CourseHeader from "./course/header";

const AddCollege = () => {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    shortDescription: "",
    virtualTourLink: "",
    review: "",
    placementCompanies: "",
    highestPackage: "",
    averagePackage: "",
    percentagePlaced: "",
    courses: "" // Assuming this is an array of course IDs
  });
  const [image, setImage] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://api.gined.in/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (event, editor, name) => {
    setFormData({ ...formData, [name]: editor.getData() });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jsonPayload = JSON.stringify({
      ...formData,
      placements: {
        companies: formData.placementCompanies.split(","), // Assuming placementCompanies is a comma-separated string
        highestPackage: formData.highestPackage,
        averagePackage: formData.averagePackage,
        percentagePlaced: formData.percentagePlaced,
      },
      courses: formData.courses, // Assuming courses is a comma-separated string of course IDs
    });

    const data = new FormData();
    data.append("jsonPayload", jsonPayload);
    if (image) {
      data.append("image", image);
    }

    try {
      await axios.post("https://api.gined.in/api/colleges", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("College successfully saved!");
      // Optionally, reset the form state here
    } catch (error) {
      console.error("Error saving college:", error);
      alert("Failed to save college.");
    }
  };


  return (
    <>
      <div>
        <CourseHeader />
        <fieldset style={{ marginTop: "20px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} id="first">
        <form onSubmit={handleSubmit}>
          {/* Form fields here */}
          <div className="form-group">
            <label>College Name</label>
            <input type="text" name="collegeName" className="form-control" value={formData.collegeName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>About the College</label>
            <CKEditor editor={ClassicEditor} data={formData.aboutCollege} onChange={(event, editor) => handleEditorChange(event, editor, "aboutCollege")} />
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
            <label>Course Selection</label>
            <select className="form-control" name="selectedCourse" value={formData.selectedCourse} onChange={handleInputChange}>
              <option value="">Select a course</option>
              {courses.map(course => <option key={course._id} value={course._id}>{course.title}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Upload College Image (1920px x 200px)</label>
            <input type="file" className="form-control" onChange={handleImageChange} />
            <small>Please upload an image with size 1920px x 200px.</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </fieldset>
      </div>
    </>
  );
};

export default AddCollege;
