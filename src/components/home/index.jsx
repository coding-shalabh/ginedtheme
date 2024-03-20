import React, { useState } from "react";
import Header from "../main-header";
import {
  bannerimg,
  // Become1,
  // Become2,
  CertificateIcon,
  // Course1,
  CourseIcon,
  GratuateIcon,
  Icon01,
  Icon02,
  Icon03,
  Icon04,
  // Icon1,
  // Icon10,
  // Icon12,
  // Icon13,
  // Icon14,
  // Icon15,
  // Icon16,
  // Icon17,
  // Icon18,
  // Icon2,
  // Icon7,
  // Icon8,
  // Icon9,
  Join,
  PencilIcon,
  Share,
  // User1
} from "../imagepath";
import TopCategory from "./slider/topCategory";
import Loginbg from "../../assets/img/banner.png";
import TrendingCourse from "./slider/trendingCourse";
// import Companies from "./slider/companies";
import BgBanner1 from "../../assets/img/bg-banner-01.png";
// import BgBanner2 from "../../assets/img/bg-banner-02.png";
import UserLove from "../../assets/img/testimonia-background.jpg";
// import Blog from "./slider/blog";
import Footer from "../footer";
import Testimonial from "./slider/testimonial";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CountUp from "react-countup";
import { Card } from "react-bootstrap";

// const options = [
//   { label: "Category", value: "Category" },
//   { label: "Angular", value: "Angular" },
//   { label: "Node Js", value: "Node Js" },
//   { label: "React", value: "React" },
//   { label: "Python", value: "Python" },
// ];

export const Home = () => {
  // const [setValue] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);



  const formatValue = (value) => `${Math.floor(value)}`;


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  // Function to handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to fetch search results from the server
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://api.gined.in/api/colleges/search?q=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data.colleges);
        console.log(data.colleges);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchQuery.trim() !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
    console.log(searchResults);
  }, [searchQuery]);


  const navigateTo = (pageName) => {
    alert(pageName);
  }


  return (
    <>
      <div className="main-wrapper">
        <Header />
        {/* banner */}
        <section
          className="home-slide d-flex align-items-center"
          style={{ backgroundImage: "url(" + Loginbg + ")" }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-md-7">
                <div className="home-slide-face aos" data-aos="fade-up">
                  <div className="home-slide-text ">
                    <h5>The Leader in Education</h5>
                    <h1>Your Education, Our Priority Your Career, Our Commitment</h1>
                    <p></p>
                  </div>
                  <div className="banner-content" style={{ position: 'relative' }}>
                    <form className="form" action="/course-list">
                      <div className="form-inner">
                        <div className="input-group homeSearch">
                          <i className="fa-solid fa-magnifying-glass search-icon" />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search School, Online educational centers, etc"
                            value={searchQuery}
                            onChange={handleSearchChange}
                          />
                        </div>
                      </div>
                    </form>
                    {/* Display search results in cards */}

                    <div style={{ position: 'absolute', zIndex: 1000, width: '100%', background: 'white', marginTop: '10px', borderRadius: '10px' }}>
                      {searchResults && searchResults.length > 0 ? (
                        searchResults.map((result) => (
                          <Card key={result._id} className="text-black mb-3" style={{ border: 0, margin: '10px' }}>
                            <Card.Body style={{ padding: '10px', borderBottom: '1px solid #d9d9d9' }} onClick={() => navigateTo(result.name)}>{result.name}</Card.Body>
                          </Card>
                        ))
                      ) : (
                        searchResults === undefined ?
                          (
                            <Card className="text-black mb-3" style={{ border: 0, margin: '10px' }}>
                              <Card.Body style={{ padding: '10px' }}>No results found</Card.Body>
                            </Card>) : <></>
                      )}
                    </div>
                  </div>

                  <div className="trust-user">
                    <p>
                      Trusted by over 15K Users <br />
                      worldwide since 2022
                    </p>
                    <div className="trust-rating d-flex align-items-center">
                      <div className="rate-head">
                        <h2>
                          <span className="d-flex">
                            <CountUp
                              start={0}
                              end={1000}
                              delay={1}
                              format={formatValue}
                            />
                            +
                          </span>
                        </h2>
                      </div>
                      <div className="rating d-flex align-items-center">
                        <h2 className="d-inline-block average-rating">4.4</h2>
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <div className="girl-slide-img aos" data-aos="fade-up">
                  <img src={bannerimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /banner */}

        {/* Home banner bottom */}
        <section className="section student-course">
          <div className="container">
            <div className="course-widget">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius align-items-center aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={PencilIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            {/* <span>10</span>K */}
                            <span className="d-flex">
                              <CountUp
                                start={0}
                                end={10}
                                delay={1}
                                duration={4}
                              />
                              K
                            </span>
                          </h4>
                          <p>Online Courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={CourseIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            <span className="d-flex">
                              <CountUp start={0} end={200} delay={1} />+
                            </span>
                          </h4>
                          <p>Expert Tutors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={CertificateIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            <span className="d-flex">
                              <CountUp
                                start={0}
                                end={6}
                                delay={1}
                                duration={5}
                              />
                              K+
                            </span>
                          </h4>
                          <p>Ceritified Courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={GratuateIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h4>
                            <span className="d-flex">
                              <CountUp
                                start={0}
                                end={60}
                                delay={1}
                                duration={2}
                              />
                              K +
                            </span>
                          </h4>
                          <p>Online Students</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* Home banner bottom */}

        {/* Top Category with Owl Carousel */}
        <TopCategory />
        {/* Top Category with Owl Carousel */}

        {/* What's new Featured Course */}
        <TrendingCourse />
        {/* <section className="section new-course">
          <div className="container">
            <div className="section-header aos" data-aos="fade-up">
              <div className="section-sub-head">
                <span>What’s New</span>
                <h2>Featured Courses</h2>
              </div>
              <div className="all-btn all-category d-flex align-items-center">
                <Link to="/course-list" className="btn btn-primary">
                  All Courses
                </Link>
              </div>
            </div>
            <div className="section-text aos" data-aos="fade-up">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                aenean accumsan bibendum gravida maecenas augue elementum et
                neque. Suspendisse imperdiet.
              </p>
            </div>
            <div className="course-feature">
              <div className="row">
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="course-box d-flex aos" data-aos="fade-up">
                    <div className="product">
                      <div className="product-img">
                        <Link to="/course-details">
                          <img className="img-fluid" alt="" src={Course1} />
                        </Link>
                        <div className="price">
                          <h3>
                            $300 <span>$99.00</span>
                          </h3>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="course-group d-flex">
                          <div className="course-group-img d-flex">
                            <Link to="/instructor-profile">
                              <img src={User1} alt="" className="img-fluid" />
                            </Link>
                            <div className="course-name">
                              <h4>
                                <Link to="/instructor-profile">
                                  Nicole Brown
                                </Link>
                              </h4>
                              <p>Instructor</p>
                            </div>
                          </div>
                          <div className="course-share d-flex align-items-center justify-content-center">
                            <Link to="#">
                              <i
                                className={
                                  "fa-regular fa-heart "
                                }
                              />
                            </Link>
                          </div>
                        </div>
                        <h3 className="title instructor-text">
                          <Link to="/course-details">
                            Information About UI/UX Design Degree
                          </Link>
                        </h3>
                        <div className="course-info d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <img src={Icon1} alt="" />
                            <p>12+ Lesson</p>
                          </div>
                          <div className="course-view d-flex align-items-center">
                            <img src={Icon2} alt="" />
                            <p>9hr 30min</p>
                          </div>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            <span>4.0</span> (15)
                          </span>
                        </div>
                        <div className="all-btn all-category d-flex align-items-center">
                          <Link to="/checkout" className="btn btn-primary">
                            BUY NOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section> */}
        {/* What's new Featured Course */}

        {/* Master Skills */}
        <section className="section master-skill">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="section-header aos" data-aos="fade-up">
                  <div className="section-sub-head">
                    <span>What’s New</span>
                    <h2>Advantages that enhances you</h2>
                  </div>
                </div>
                <div className="section-text aos" data-aos="fade-up">
                  <p>

                    Explore a diverse selection of prestigious institutions 
                    and streamline your journey towards higher education. Connect 
                    with leading companies for unparalleled career opportunities 
                    post-graduation. Enhance your employability with an array of 
                    soft skill courses designed to complement your academic achievements.
                  </p>
                </div>
                <div className="career-group aos" data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon01} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Access to a wide range of Colleges</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon02} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Access to a wide range of Company</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon03} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Soft Skill Courses</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon04} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Easy Admission</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 d-flex align-items-end">
                <div className="career-img aos" data-aos="fade-up">
                  <img src={Join} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Master Skills */}

        {/* Trending Course */}
        {/* <TrendingCourse /> */}
        {/* Trending Course */}

        {/* Companies */}
        {/* <section className="section lead-companies">
          <div className="container">
            <div className="section-header aos" data-aos="fade-up">
              <div className="section-sub-head feature-head text-center">
                <span>Trusted By</span>
                <h2>500+ Leading Universities And Companies</h2>
              </div>
            </div>
            <div className="lead-group aos" data-aos="fade-up">
              <Companies />
            </div>
          </div>
        </section> */}
        {/* Companies */}

        {/* Share knowledge */}
        <section
          className="section share-knowledge"
          style={{ backgroundImage: "url(" + BgBanner1 + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="knowledge-img aos" data-aos="fade-up">
                  <img src={Share} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="join-mentor aos" data-aos="fade-up">
                  <h2>Want to share your knowledge? Join us a Mentor</h2>
                  <p>
                    High-definition video is video of higher resolution and
                    quality than standard-definition. While there is no
                    standardized meaning for high-definition, generally any
                    video.
                  </p>
                  <ul className="course-list">
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Best Courses
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Best Colleges
                    </li>
                  </ul>
                  <div className="all-btn all-category d-flex align-items-center">
                    <Link to="/our-colleges" className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Share knowledge */}

        <section
          className="section user-love"
          style={{ backgroundImage: `url( + ${UserLove} + )`, filter: 'greyscale(1)',backgroundPostition: 'top' }}
        >
          <div className="container">
            <div className="section-header white-header aos" data-aos="fade-up">
              <div className="section-sub-head feature-head text-center" >
                <span style={{color: '#000000'}} >Check out these real reviews</span>
                <h2 style={{color: '#000000'}}>Users-love-us Dont take it from us.</h2>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial Carousel */}
        <Testimonial />
        {/* Testimonial Carousel */}

        {/* Become a instructor */}
        {/* <section className="section become-instructors aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="student-mentor cube-instuctor ">
                  <h4>Become An Instructor</h4>
                  <div className="row">
                    <div className="col-lg-7 col-md-12">
                      <div className="top-instructors">
                        <p>
                          Top instructors from around the world teach millions
                          of students on Mentoring.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                      <div className="mentor-img">
                        <img className="img-fluid" alt="" src={Become2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="student-mentor yellow-mentor">
                  <h4>Transform Access To Education</h4>
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <div className="top-instructors">
                        <p>
                          Create an account to receive our newsletter, course
                          recommendations and promotions.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="mentor-img">
                        <img className="img-fluid" alt="" src={Become1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* /Become a instructor */}

        {/* Blog */}
        {/* <section
          className="section latest-blog"
          style={{ backgroundImage: "url(" + BgBanner2 + ")" }}
        >
          <div className="container">
            <div className="section-header aos" data-aos="fade-up">
              <div className="section-sub-head feature-head text-center mb-0">
                <h2>Latest Blogs</h2>
                <div className="section-text aos" data-aos="fade-up">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eget aenean accumsan bibendum gravida maecenas augue
                    elementum et neque. Suspendisse imperdiet.
                  </p>
                </div>
              </div>
            </div>
            <Blog />
            <div className="enroll-group aos" data-aos="fade-up">
              <div className="row ">
                <div className="col-lg-4 col-md-6">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src={Icon7} alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="course-count">
                      <h3>
                        <span className="counterUp">253,085</span>
                      </h3>
                      <p>STUDENTS ENROLLED</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src={Icon8} alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="course-count">
                      <h3>
                        <span className="counterUp">1,205</span>
                      </h3>
                      <p>TOTAL COURSES</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="total-course d-flex align-items-center">
                    <div className="blur-border">
                      <div className="enroll-img ">
                        <img src={Icon9} alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="course-count">
                      <h3>
                        <span className="counterUp">127</span>
                      </h3>
                      <p>COUNTRIES</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lab-course">
              <div className="section-header aos" data-aos="fade-up">
                <div className="section-sub-head feature-head text-center">
                  <h2>
                    Unlimited access to 360+ courses <br />
                    and 1,600+ hands-on labs
                  </h2>
                </div>
              </div>
              <div className="icon-group aos" data-aos="fade-up">
                <div className="offset-lg-1 col-lg-12">
                  <div className="row">
                    <div className="col-lg-1 col-3">
                      <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                          <div className="enroll-img ">
                            <img src={Icon9} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-3">
                      <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                          <div className="enroll-img ">
                            <img src={Icon10} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-3">
                      <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                          <div className="enroll-img ">
                            <img src={Icon16} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-3">
                      <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                          <div className="enroll-img ">
                            <img src={Icon12} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-3">
                      <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                          <div className="enroll-img ">
                            <img src={Icon13} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-3">
                      <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                          <div className="enroll-img ">
                            <img src={Icon14} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-3">
                      <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                          <div className="enroll-img ">
                            <img src={Icon15} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-3">
                      <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                          <div className="enroll-img ">
                            <img src={Icon16} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-3">
                      <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                          <div className="enroll-img ">
                            <img src={Icon17} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-3">
                      <div className="total-course d-flex align-items-center">
                        <div className="blur-border">
                          <div className="enroll-img ">
                            <img src={Icon18} alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* /Blog */}

        {/* Footer */}
        <Footer />
        {/* /Footer */}
      </div>
    </>
  );
};

export default Home;
