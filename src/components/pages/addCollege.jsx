import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseHeader from "./course/header";

const AddCollege = () => {

  const [formData, setFormData] = useState({
    name: "",
    about: "",
    excerpt: "",
    placements: {
      companies: "",
      highestPackage: "",
      averagePackage: "",
      percentagePlaced: ""
    },
    virtualTourLink: "",
    youtubeVideos: ["", "", "", ""], // Initialize with 4 empty strings for YouTube videos
    reviews: "",
    courses: [] // Use an array to hold multiple course IDs
  });

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
    if (e.target.name === "courses") {
      // Handle multiple selections for courses
      const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
      setFormData(prevFormData => ({
        ...prevFormData,
        courses: selectedOptions
      }));
    } else if (e.target.name.startsWith("youtubeVideos")) {
      // Handle YouTube video inputs
      const index = parseInt(e.target.name.replace("youtubeVideos", ""), 10);
      const newYoutubeVideos = [...formData.youtubeVideos];
      newYoutubeVideos[index] = e.target.value;
      setFormData(prevFormData => ({
        ...prevFormData,
        youtubeVideos: newYoutubeVideos
      }));
    }else if (["highestPackage", "averagePackage", "percentagePlaced", "companies"].includes(e.target.name)) {
      setFormData({
        ...formData,
        placements: {
          ...formData.placements,
          [e.target.name]: e.target.value
        }
      })
    } 
    else {
      // Handle other inputs including placements
      setFormData(prevFormData => ({
        ...prevFormData,
        [e.target.name]: e.target.value
      }));
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();


try {
    const response = await axios.post('https://api.gined.in/api/colleges', formData);
    console.log('Successfully submitted:', response.data);
    console.log(formData);
    alert('Form submitted successfully!');
    // Reset the form data after successful submission
    setFormData({
      name: "",
      about: "",
      excerpt: "",
      placements: {
        companies: "",
        highestPackage: "",
        averagePackage: "",
        percentagePlaced: ""
      },
      virtualTourLink: "",
      youtubeVideos: ["", "", "", ""],
      reviews: "",
      courses: []
    });
  } catch (error) {
    console.error('Error submitting form:', error.response ? error.response.data : error);
    alert('Failed to submit the form.');
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
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>About the College</label>
              <textarea className="form-control" name="about" placeholder="About College" value={formData.about} onChange={handleInputChange} ></textarea>
            </div>
            <div className="form-group">
              <label className="add-course-label">Short Description</label>
              <textarea className="form-control" placeholder="Short Description for College" name="excerpt" value={formData.excerpt} onChange={handleInputChange} ></textarea>
            </div>
            <div className="form-group">
              <label className="add-course-label">Virtual Tour Link</label>
              <input type="text" className="form-control" placeholder="Virtual Tour Link" name="virtualTourLink" value={formData.virtualTourLink} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="add-course-label">Review for College</label>
              <input type="number" className="form-control" placeholder="Review for College" name="reviews" value={formData.reviews} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="add-course-label">Placement Companies</label>
              <input type="text" className="form-control" placeholder="Placement Companies" name="companies" value={formData.companies} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="add-course-label">Highest Package</label>
              <input type="text" className="form-control" placeholder="Highest Package" name="highestPackage" value={formData.highestPackage} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="add-course-label">Average Package</label>
              <input type="text" className="form-control" placeholder="Average Package" name="averagePackage" value={formData.averagePackage} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="add-course-label">Percentage Placed</label>
              <input type="number" className="form-control" placeholder="Percentage Placed" name="percentagePlaced" value={formData.percentagePlaced} onChange={handleInputChange} />
            </div>
            {formData.youtubeVideos.map((video, index) => (
              <div className="form-group" key={index}>
                <label>YouTube Video {index + 1}</label>
                <input
                  type="text"
                  className="form-control"
                  name={`youtubeVideos${index}`}
                  value={video}
                  onChange={handleInputChange}
                  placeholder={`YouTube Video ${index + 1} URL`}
                />
              </div>
            ))}

            <div className="form-group">
              <label>Course Selection</label>
              <select
                className="form-control"
                name="courses"
                value={formData.courses}
                onChange={handleInputChange}
                multiple={true} // Allow multiple selections
              >
                <option value="" disabled>Select courses</option>
                {courses.map(course => (
                  <option key={course._id} value={course._id}>{course.title}</option>
                ))}
              </select>
              <small>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</small>
            </div>
            <div className="form-group">
              <label>Upload College Image (1920px x 200px)</label>
              <input type="file" className="form-control" />
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
