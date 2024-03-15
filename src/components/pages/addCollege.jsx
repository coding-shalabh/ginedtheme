import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseHeader from "./course/header";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
    categories: [],
    courses: [], // Use an array to hold multiple course IDs
  });

  const [courses, setCourses] = useState([]);
  // const [categories, setCategories] = useState([]);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchCourseKeyword, setSearchCourseKeyword] = useState('');
  const [categories, setCategories] = useState([]);
  // const categories = []; // Assuming you have an array of categories

  const filteredCategories = categories.filter(category => category.title.toLowerCase().includes(searchKeyword.toLowerCase()));

  // useEffect(() => {
  //   const fetchCoursesAndCategories = async () => {
  //     try {
  //       const coursesResponse = await axios.get("https://api.gined.in/api/courses");
  //       setCourses(coursesResponse.data);
  //       const categoriesResponse = await axios.get("https://api.gined.in/api/categories");
  //       setCategories(categoriesResponse.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchCoursesAndCategories();
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true); // Set loading state to true
        const [coursesResponse, categoriesResponse] = await Promise.all([
          axios.get("https://api.gined.in/api/courses"),
          axios.get("https://api.gined.in/api/categories")
        ]);
        setCourses(coursesResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.log(error); // Set error state if any error occurs
      }
    };

    fetchData();
  }, []);

  // const handleInputChange = (e) => {
  //   // Handling inputs for text and checkboxes
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleInputChange = (e) => {
    if (e.target.name === "courses") {
      // Handle multiple selections for courses
      const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
      setFormData(prevFormData => ({
        ...prevFormData,
        courses: selectedOptions
      }));
    } else if (e.target.name === "categories") {
      // Handle multiple selections for courses
      const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
      setFormData(prevFormData => ({
        ...prevFormData,
        categories: selectedOptions
      }));
    }
    else if (e.target.name.startsWith("youtubeVideos")) {
      // Handle YouTube video inputs
      const index = parseInt(e.target.name.replace("youtubeVideos", ""), 10);
      const newYoutubeVideos = [...formData.youtubeVideos];
      newYoutubeVideos[index] = e.target.value;
      setFormData(prevFormData => ({
        ...prevFormData,
        youtubeVideos: newYoutubeVideos
      }));
    } else if (["highestPackage", "averagePackage", "percentagePlaced", "companies"].includes(e.target.name)) {
      console.log(e.target.name, e.target.value);
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

  // Function to toggle course selection
  const handleSelectCourse = (courseId) => {
    // Handling course selection
    const isCourseSelected = formData.courses.includes(courseId);
    const updatedCourses = isCourseSelected
      ? formData.courses.filter(id => id !== courseId)
      : [...formData.courses, courseId];
    setFormData({ ...formData, courses: updatedCourses });
  };


  // Function to toggle category selection
  // const handleSelectCategory = (categoryId) => {
  //   // Handling category selection
  //   const isCategorySelected = formData.categories.includes(categoryId);
  //   const updatedCategories = isCategorySelected
  //     ? formData.categories.filter(id => id !== categoryId)
  //     : [...formData.categories, categoryId];
  //   setFormData({ ...formData, categories: updatedCategories });
  // };

  const handleSelectCategory = (categoryId) => {
    // Handling category selection
    const isCategorySelected = formData.categories.includes(categoryId);
    const updatedCategories = isCategorySelected
      ? formData.categories.filter(id => id !== categoryId)
      : [...formData.categories, categoryId];
    setFormData(prevFormData => ({ ...prevFormData, categories: updatedCategories }));
  };



  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Check if the file size exceeds 2 MB
      if (file.size > 2097152) { // 2 MB in bytes
        alert("The image size should not exceed 2 MB.");
        return; // Stop the function execution
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the converted base64 string to your state, assuming you have a state to hold it
        // For example, setImageBase64(reader.result);
        // setImage(reader.result); // setImage should be a state setter function for your base64 image data
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

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
        image: "",
        categories: [],
        courses: [],
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
          <form onSubmit={handleSubmit} className="AdminForms">
            {/* Form fields here */}
            <div className="form-group">
              <label>College Name</label>
              <input required type="text" name="name" className="form-control" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>About the College</label>
              <CKEditor
                editor={ClassicEditor}
                data={formData.about}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFormData((prev) => ({ ...prev, about: data }));
                }}
              /></div>
            <div className="form-group">
              <label className="add-course-label">Short Description</label>
              <textarea required className="form-control" placeholder="Short Description for College" name="excerpt" value={formData.excerpt} onChange={handleInputChange} ></textarea>
            </div>
            <div className="form-group">
              <label className="add-course-label">Virtual Tour Link</label>
              <input required type="text" className="form-control" placeholder="Virtual Tour Link" name="virtualTourLink" value={formData.virtualTourLink} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="add-course-label">Review for College</label>
              <input required type="number" className="form-control" placeholder="Review for College" name="reviews" value={formData.reviews} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="add-course-label">Placement Companies</label>
              <input required type="text" className="form-control" placeholder="Placement Companies" name="companies" value={formData.companies} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="add-course-label">Highest Package</label>
              <input required type="text" className="form-control" placeholder="Highest Package" name="highestPackage" value={formData.highestPackage} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="add-course-label">Average Package</label>
              <input required type="text" className="form-control" placeholder="Average Package" name="averagePackage" value={formData.averagePackage} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="add-course-label">Percentage Placed</label>
              <input required type="number" className="form-control" placeholder="Percentage Placed" name="percentagePlaced" value={formData.percentagePlaced} onChange={handleInputChange} />
            </div>
            {formData.youtubeVideos.map((video, index) => (
              <div className="form-group" key={index}>
                <label>YouTube Video {index + 1}</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  name={`youtubeVideos${index}`}
                  value={video}
                  onChange={handleInputChange}
                  placeholder={`YouTube Video ${index + 1} URL`}
                />
              </div>
            ))}

            <div className="form-group">
              <div className="dropdown">
                <input
                  type="text"
                  className="form-control dropdown-toggle"
                  placeholder="Search Courses"
                  onClick={() => setShowCourseDropdown(true)}
                  onChange={(e) => setSearchCourseKeyword(e.target.value)}
                />
                {showCourseDropdown && (
                  <div className="dropdown-menu show w-100">
                    {courses
                      .filter((course) => course.title.toLowerCase().includes(searchCourseKeyword.toLowerCase()))
                      .map((course) => (
                        <a
                          key={course._id}
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSelectCourse(course._id);
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={formData.courses.includes(course._id)}
                            readOnly
                          />{' '}
                          {course.title}
                        </a>
                      ))}
                  </div>
                )}
              </div>
            </div>


            {/* Dropdown for categories */}
            <div className="form-group">
              <div className="dropdown">
                <input
                  type="text"
                  className="form-control dropdown-toggle"
                  placeholder="Search Categories"
                  onClick={() => setShowCategoryDropdown(true)}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />

                {showCategoryDropdown && (
                  <div className="dropdown-menu show w-100" style={{ display: 'block' }}>
                    {filteredCategories.map((category) => (
                      <a
                        key={category._id}
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelectCategory(category._id);
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.categories.includes(category._id)}
                          readOnly
                        />{' '}
                        {category.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="form-group">
              <label>Upload College Image</label>
              <input required type="file" className="form-control" onChange={handleImageChange} />
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
