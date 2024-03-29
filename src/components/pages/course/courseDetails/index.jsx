import React, { useEffect, useState } from "react";
import CourseHeader from "../header";
// import InnerBanner from "../../../../assets/img/inner-banner.jpg";
import DetailsContent from "./detailsContent";
import { Icon1, People } from "../../../imagepath";
import Footer from "../../../footer";
import { Link, useLocation } from "react-router-dom";
import { default as collegeImage } from '../../../../assets/img/bg/college-image.jpg'

const CourseDetails = () => {

  // const [fetchData, setFetchData] = useState([]);
  const [collegeData, setCollegeData] = useState('');
  const location = useLocation();
  const { item } = location.state ?? {};


  const getData = async () => {

    const setUriEndpoint = location.pathname.split("/")[1] === "colleges" ? "colleges" : "courses";
    const collegeName = decodeURIComponent(location.pathname.split("/")[2]);
    try {
      console.log(`https://api.gined.in/api/${setUriEndpoint}/${collegeName}`);
      // Fetch data for the college from the database
      const res = await fetch(`https://api.gined.in/api/${setUriEndpoint}/${collegeName}`);
      
      if (res.ok) {
        const data = await res.json();
        setCollegeData(data);
        // Display the college details using the fetched data
        console.log("College details:", data);
      } else {
        // Handle the case where the college is not found
        console.error("College not found");
      }
    } catch (error) {
      // Handle any network or server errors
      console.error("Error fetching college data:", error);
    }

  };
  useEffect(() => {
    if (!item) {
      // If item is not available in location.state, fetch data based on URL
      getData();
    } else {
      console.log("Here.-------")
      // If item is available, set the college data
      setCollegeData(item);
    }
  }, [item]); 

  return (
    <>
      <div className="main-wrapper">
        <CourseHeader activeMenu={"CourseDetails"} />

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
                        Colleges
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        All Colleges
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        {collegeData.name}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="inner-banner"
          style={{ backgroundImage: "url(" + collegeImage + ")", backgroundPosition: 'center', padding: '65px 0' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {/* <div className="instructor-wrap border-bottom-0 m-0">
                  <div className="about-instructor align-items-center">
                    <div className="abt-instructor-img">
                      <Link to="/instructor-profile">
                        <img
                          src={User1}
                          alt="img"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="instructor-detail me-3">
                      <h5>
                        <Link to="/instructor-profile">Nicole Brown</Link>
                      </h5>
                      <p>UX/UI Designer</p>
                    </div>
                    <div className="rating mb-0">
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star me-1" />
                      <span className="d-inline-block average-rating">
                        <span>4.5</span> (15)
                      </span>
                    </div>
                  </div>
                  <span className="web-badge mb-3">WEB DEVELPMENT</span>
                </div> */}
                <h2>{collegeData.name}</h2>
                <p>{collegeData.excerpt}
                </p>
                <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
                  <div className="cou-info">
                    <img src={Icon1} alt="" />
                    {/* <p>{`${item.courses.length}+ Courses`}</p> */}
                  </div>
                  {/* <div className="cou-info">
                    <img src={Timer} alt="" />
                    <p>9hr 30min</p>
                  </div> */}
                  <div className="cou-info">
                    <img src={People} alt="" />
                    <p>1000+ Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          collegeData !== '' ?
            <DetailsContent content={collegeData} /> : <></>
        }

        <Footer />

      </div>
    </>
  );
};

export default CourseDetails;
