import React, { useEffect, useState } from "react";
import CourseHeader from "../pages/course/header/index";
import GridInnerPage from "../pages/course/courseGrid/gridInnerPage";
import ListInnerPage from "../pages/course/courseList/innerPage";
import FeatherIcon from "feather-icons-react";
import { Blog1, Blog2, Blog3 } from "../imagepath";
import Select from "react-select";
import { Link } from "react-router-dom";
import Footer from "../footer";

const OurColleges = () => {
    const customStyles = {
        option: (base, { isFocused }) => {
            return {
                ...base,
                backgroundColor: isFocused ? "#FFDEDA" : "white",
            };
        },
        dropdownIndicator: (base, state) => ({
            ...base,
            transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '300ms',
        }),
    };

    const option = [
        { label: "Newly published", value: "Newly published" },
        { label: "published 1", value: "published 1" },
        { label: "published 2", value: "published 2" },
        { label: "published 3", value: "published 3" },
    ];

    const Category = [
        { label: "MBA", value: "MBA" },
        { label: "BBA", value: "BBA" },
        { label: "MSC", value: "MSC" },
        { label: "BDS", value: "BDS" },
    ];

    const [input, setInput] = useState(null);
    const [viewMode, setViewMode] = useState('grid');
    const [collegeData, setCollegeData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredColleges, setFilteredColleges] = useState(collegeData);


      useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://gined.in/education/wp-json/wp/v2/colleges');
            const queryData = await data.json();
            setCollegeData([...queryData]);
            // Apply initial filtering based on categories right after fetching
            filterColleges([...queryData], selectedCategories);
        };
    
        fetchData();
    }, []);
    
    useEffect(() => {
        // Apply filtering whenever selected categories change
        filterColleges(collegeData, selectedCategories);
    }, [selectedCategories, collegeData]);

    const filterColleges = (colleges, categories, searchTerm) => {
        let filtered = colleges;
    
        // Filter by selected categories
        if (categories.length) {
            filtered = filtered.filter(college => categories.includes(college.category));
        }
    
        // Further filter by search term
        if (searchTerm) {
            filtered = filtered.filter(college =>
                college.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    
        setFilteredColleges(filtered);
    };
    

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCollegeData = filteredColleges.filter(item =>
        item.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate the current items for the page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCollegeData.slice(indexOfFirstItem, indexOfLastItem);


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredCollegeData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageChoose = (number) => {
        setCurrentPage(number);
        window.scrollTo(0, 0);
    }

    const renderPageNumbers = pageNumbers.map(number => (
        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <Link onClick={() => handlePageChoose(number)} className="page-link" to="#">
                {number}
            </Link>
        </li>
    ));


    const handleSetGridView = () => setViewMode('grid');
    const handleSetListView = () => setViewMode('list');

    const handleCategoryChange = (category, isChecked) => {
        if (isChecked) {
          setSelectedCategories(prev => [...prev, category]);
        } else {
          setSelectedCategories(prev => prev.filter(c => c !== category));
        }
      };

      useEffect(() => {
        // Apply filtering whenever searchTerm changes
        filterColleges(collegeData, selectedCategories, searchTerm);
    }, [searchTerm]); //    

    return (
        <>
            <div className="main-wrapper">
                <CourseHeader activeMenu={"CourseList"} />

                <div className="breadcrumb-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12">
                                <div className="breadcrumb-list">
                                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item" aria-current="page">
                                                Courses
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                All Courses
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="course-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                {/* Filter */}
                                <div className="showing-list">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <div className="view-icons">
                                                    {/* Update onClick handlers for view icons */}
                                                    <Link to="#" className={`grid-view ${viewMode === 'grid' ? 'active' : ''}`} onClick={handleSetGridView}>
                                                        <FeatherIcon icon="grid" />
                                                    </Link>
                                                    <Link to="#" className={`list-view ${viewMode === 'list' ? 'active' : ''}`} onClick={handleSetListView}>
                                                        <FeatherIcon icon="list" />
                                                    </Link>
                                                </div>
                                                <div className="show-result">
                                                    <h4>Showing 1-9 of 50 results</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="show-filter add-course-info">
                                                <form action="#">
                                                    <div className="row gx-2 align-items-center">
                                                        <div className="col-md-6 col-item">
                                                            <div className=" search-group">
                                                                <i className="feather-search">
                                                                    <FeatherIcon icon="search" />
                                                                </i>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Search our courses"
                                                                    onChange={handleSearchChange}
                                                                />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-6 col-item">
                                                            <div className="form-group select-form mb-0">
                                                                <Select
                                                                    options={option}
                                                                    defaultValue={input}
                                                                    onChange={setInput}
                                                                    placeholder="Newly Published"
                                                                    styles={customStyles}
                                                                ></Select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /All Filter */}

                                {viewMode === 'grid' ? <GridInnerPage collegeData={currentItems} /> : <ListInnerPage collegeData={currentItems} />}
                                {/* /pagination */}
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="pagination lms-page">
                                            {/* Add Pagination */}
                                            {renderPageNumbers}
                                        </ul>
                                    </div>
                                </div>
                                {/* /Filters */}
                            </div>
                            <div className="col-lg-3 theiaStickySidebar">
                                <div className="stickysidebar">
                                    <div className="filter-clear">
                                        <div className="clear-filter d-flex align-items-center">
                                            <h4>
                                                {/* <i className="feather-filter" /> */}
                                                <FeatherIcon icon="filter" />
                                                Filters
                                            </h4>
                                            <div className="clear-text">
                                                <p>CLEAR</p>
                                            </div>
                                        </div>
                                        {/* Search Filter */}
                                        <div className="card search-filter">
                                            <div className="card-body">
                                                <div className="filter-widget mb-0">
                                                    <div className="categories-head d-flex align-items-center">
                                                        <h4>Course categories</h4>
                                                        <i className="fas fa-angle-down" />
                                                    </div>

                                                    {
                                                        Category.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <div key={index}>
                                                                        <label className="custom_check">
                                                                            <input type="checkbox" name="select_specialist" 
                                                                                onChange={(e) => handleCategoryChange(item.label, e.target.checked)}
                                                                            />
                                                                            <span className="checkmark" /> {item.label}
                                                                        </label>
                                                                    </div>
                                                                </>

                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        {/* /Search Filter */}
                                        {/* Search Filter */}
                                        <div className="card search-filter">
                                            <div className="card-body">
                                                <div className="filter-widget mb-0">
                                                    <div className="categories-head d-flex align-items-center">
                                                        <h4>Instructors</h4>
                                                        <i className="fas fa-angle-down" />
                                                    </div>
                                                    <div>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="select_specialist" />
                                                            <span className="checkmark" /> Keny White (10)
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="select_specialist" />
                                                            <span className="checkmark" /> Hinata Hyuga (5)
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="select_specialist" />
                                                            <span className="checkmark" /> John Doe (3)
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <label className="custom_check mb-0">
                                                            <input
                                                                type="checkbox"
                                                                name="select_specialist"
                                                                defaultChecked="true"
                                                            />
                                                            <span className="checkmark" /> Nicole Brown
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Search Filter */}
                                        {/* Search Filter */}
                                        <div className="card search-filter ">
                                            <div className="card-body">
                                                <div className="filter-widget mb-0">
                                                    <div className="categories-head d-flex align-items-center">
                                                        <h4>Price</h4>
                                                        <i className="fas fa-angle-down" />
                                                    </div>
                                                    <div>
                                                        <label className="custom_check custom_one">
                                                            <input type="radio" name="select_specialist" />
                                                            <span className="checkmark" /> All (18)
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <label className="custom_check custom_one">
                                                            <input type="radio" name="select_specialist" />
                                                            <span className="checkmark" /> Free (3)
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <label className="custom_check custom_one mb-0">
                                                            <input
                                                                type="radio"
                                                                name="select_specialist"
                                                                defaultChecked="true"
                                                            />
                                                            <span className="checkmark" /> Paid (15)
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Search Filter */}
                                        {/* Latest Posts */}
                                        <div className="card post-widget ">
                                            <div className="card-body">
                                                <div className="latest-head">
                                                    <h4 className="card-title">Latest Courses</h4>
                                                </div>
                                                <ul className="latest-posts">
                                                    <li>
                                                        <div className="post-thumb">
                                                            <Link to="/course-details">
                                                                <img className="img-fluid" src={Blog1} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="post-info free-color">
                                                            <h4>
                                                                <Link to="/course-details">
                                                                    Introduction LearnPress – LMS plugin
                                                                </Link>
                                                            </h4>
                                                            <p>FREE</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="post-thumb">
                                                            <Link to="/course-details">
                                                                <img className="img-fluid" src={Blog2} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="post-info">
                                                            <h4>
                                                                <Link to="/course-details">
                                                                    Become a PHP Master and Make Money
                                                                </Link>
                                                            </h4>
                                                            <p>$200</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="post-thumb">
                                                            <Link to="/course-details">
                                                                <img className="img-fluid" src={Blog3} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="post-info free-color">
                                                            <h4>
                                                                <Link to="/course-details">
                                                                    Learning jQuery Mobile for Beginners
                                                                </Link>
                                                            </h4>
                                                            <p>FREE</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="post-thumb">
                                                            <Link to="/course-details">
                                                                <img className="img-fluid" src={Blog1} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="post-info">
                                                            <h4>
                                                                <Link to="/course-details">
                                                                    Improve Your CSS Workflow with SASS
                                                                </Link>
                                                            </h4>
                                                            <p>$200</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="post-thumb ">
                                                            <Link to="/course-details">
                                                                <img className="img-fluid" src={Blog2} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="post-info free-color">
                                                            <h4>
                                                                <Link to="/course-details">
                                                                    HTML5/CSS3 Essentials in 4-Hours
                                                                </Link>
                                                            </h4>
                                                            <p>FREE</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* /Latest Posts */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default OurColleges;
