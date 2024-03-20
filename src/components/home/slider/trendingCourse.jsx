import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import {
  // Course1,
  // Course5,
  // Course7,
  // // Course8,
  // // Course9,
  // Icon1,
  // Icon2,
  // User,
  // User1,
  // // User10,
  // User2,
  // User3,
  // User4,
  // User5,
  // User7,
  // User8,
  // User9,
} from "../../imagepath";
import BgBanner from "../../../assets/img/bg-banner.png";
import { Link } from "react-router-dom";
import axios from "axios";

const TrendingCourse = () => {

  const [courses, setCourses] = useState([]);

  var settings = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };

  // var course = {
  //   //autoWidth: true,
  //   items: 2,
  //   margin: 25,
  //   dots: true,
  //   nav: true,
  //   navText: [
  //     '<i className="fas fa-arrow-left"></i>',
  //     '<i className="fas fa-arrow-right"></i>',
  //   ],

  //   loop: true,
  //   responsiveClass: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     768: {
  //       items: 3,
  //     },
  //     1170: {
  //       items: 4,
  //     },
  //   },
  // };


  // Fetch Courses with college count from the API
  useEffect(() => {
    const fetchCourses = async () => {
      try {

        // Update the URL to the new endpoint that includes college counts
        const response = await axios.get('https://api.gined.in/api/courses/');
        setCourses(response.data);
        console.log(response);
      } catch (error) {
        console.error("Failed to fetch Courses with college counts", error);
      }
    };

    fetchCourses();
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <section
      className="section trend-course"
      style={{ backgroundImage: "url(" + BgBanner + ")" }}
    >
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            <span>What’s New</span>
            <h2>TRENDING COURSES</h2>
          </div>
          <div className="all-btn all-category d-flex align-items-center">
            <Link to="course-list" className="btn btn-primary">
              All Courses
            </Link>
          </div>
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
        </div>
        <OwlCarousel
          {...settings}
          className="owl-carousel trending-course owl-theme aos"
          data-aos="fade-up"
        >
                  {courses.map((course) => (
            <div key={course.id} className="feature-box text-center">
              <div className="feature-bg">
                <div className="feature-header">
                  <div className="feature-cont">
                    <div className="feature-text">{course.title}</div>
                  </div>
                </div>
                {/* Update to show the college count */}
                <p>{course.collegesCount}25+ Colleges</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
        {/* Feature Instructors */}
        {/* <div className="feature-instructors">
          <div className="section-header aos" data-aos="fade-up">
            <div className="section-sub-head feature-head text-center">
              <h2>Featured Instructor</h2>
              <div className="section-text aos" data-aos="fade-up">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  aenean accumsan bibendum gravida maecenas augue elementum et
                  neque. Suspendisse imperdiet.
                </p>
              </div>
            </div>
          </div>
          <OwlCarousel
            {...course}
            className="owl-carousel instructors-course owl-theme aos"
            data-aos="fade-up"
          >
            <div className="instructors-widget">
              <div className="instructors-img ">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User7} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor-profile">David Lee</Link>
                </h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User8} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor-profile">Daziy Millar</Link>
                </h5>
                <p>PHP Expert</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group yellow" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User9} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor-profile">Patricia Mendoza</Link>
                </h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group violet" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User10} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor-profile">Skyler Whites</Link>
                </h5>
                <p>UI Designer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group orange" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User7} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor-profile">Patricia Mendoza</Link>
                </h5>
                <p>Java Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>40 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User8} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor-profile">David Lee</Link>
                </h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>50 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User9} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor-profile">Daziy Millar</Link>
                </h5>
                <p>PHP Expert</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>40 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User10} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor-profile">Patricia Mendoza</Link>
                </h5>
                <p>Web Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>20 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img ">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User7} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor-profile">Skyler Whites</Link>
                </h5>
                <p>UI Designer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>30 Students</span>
                </div>
              </div>
            </div>
            <div className="instructors-widget">
              <div className="instructors-img">
                <Link to="instructor-list">
                  <img className="img-fluid" alt="" src={User8} />
                </Link>
              </div>
              <div className="instructors-content text-center">
                <h5>
                  <Link to="/instructor-profile">Patricia Mendoza</Link>
                </h5>
                <p>Java Developer</p>
                <div className="student-count d-flex justify-content-center">
                  <i className="fa-solid fa-user-group" />
                  <span>40 Students</span>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div> */}
        {/* /Feature Instructors */}
      </div>
    </section>
  );
};

export default TrendingCourse;
