import React, { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CourseHeader from './course/header';

const AddCategory = () => {
  const [categoryTitle, setCategoryTitle] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

  const saveCategory = async (e) => {
    e.preventDefault();

    const categoryData = {
      title: categoryTitle,
      description: categoryDescription,
    };

    try {
      const response = await axios.post('https://api.gined.in/api/categories/', categoryData);
      console.log('Category Saved Successfully:', response.data);
      alert('Category Saved Successfully');
      setCategoryTitle('');
      setCategoryDescription('');
    } catch (error) {
      console.error('Error saving category:', error.response ? error.response.data : error.message);
    }
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
                    onChange={(e) => setCategoryTitle(e.target.value)}
                  />
                </div>
                <div className="form-group mb-0">
                  <label className="add-course-label">Category Description</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={categoryDescription}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setCategoryDescription(data);
                    }}
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
