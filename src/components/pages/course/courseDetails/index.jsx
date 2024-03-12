import React, { useEffect } from "react";
import CourseHeader from "../header";
import InnerBanner from "../../../../assets/img/inner-banner.jpg";
import DetailsContent from "./detailsContent";
import { Icon1, People } from "../../../imagepath";
import Footer from "../../../footer";
import { Link, useLocation } from "react-router-dom";

const CourseDetails = () => {

  const location = useLocation();
  const {item} = location.state;

  useEffect(()=> {

      console.log(item)
  },[])

  return (
    <>
      <div className="main-wrapper">
        <CourseHeader activeMenu={"CourseDetails"}/>

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
                        {item.name}
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
          style={{ backgroundImage: "url(" + InnerBanner + ")" }}
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
                <h2>{item.name}</h2>
                <p>{item.excerpt}
                </p>
                <div className="course-info d-flex align-items-center border-bottom-0 m-0 p-0">
                  <div className="cou-info">
                    <img src={Icon1} alt="" />
                    <p>{`${item.courses.length}+ Courses`}</p>
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

        <DetailsContent content={item}/>

        <Footer/>

      </div>
    </>
  );
};

export default CourseDetails;
