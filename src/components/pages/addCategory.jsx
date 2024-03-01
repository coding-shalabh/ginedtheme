import React, { useState } from 'react';
import TextEditor from './course/addCourse/editor';
import CourseHeader from './course/header';

const AddCategory = () => {
  const [categoryTitle, setCategoryTitle] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

  const saveCategory = () => {
    // Implement save logic here
    console.log('Saving Category:', categoryTitle, categoryDescription);
    // Make an API call to save the category
  };

  const handleTitleChange = (e) => {
    setCategoryTitle(e.target.value);
  };

  const handleDescriptionChange = (content) => {
    setCategoryDescription(content);
  };

  return (
    <>
      <div>
        <CourseHeader />
        <fieldset style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="first">
          <div style={{ width: '50%' }} className="add-course-info">
            <div className="add-course-form">
              <form onSubmit={saveCategory}>
                <div className="form-group">
                  <label className="add-course-label">Category Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category Title"
                    value={categoryTitle}
                    onChange={handleTitleChange}
                  />
                </div>
                <div className="form-group mb-0">
                  <label className="add-course-label">Category Description</label>
                  <TextEditor
                    value={categoryDescription}
                    onChange={handleDescriptionChange}
                  />
                </div>
                <div className="widget-btn">
                  <button type="submit" className="btn btn-info-light">
                    Save Category
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

export default AddCategory;
