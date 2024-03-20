import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import axios from "axios"; // Assuming you are using axios for API requests

const TopCategory = () => {
  // State for categories
  const [categories, setCategories] = useState([]);

  // Carousel settings
  var settings = {
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
        margin: 25,
      },
      768: {
        items: 3,
        margin: 25,
      },
      1170: {
        items: 4,
        margin: 25,
      },
    },
  };

  // Fetch categories with college count from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {

        // Update the URL to the new endpoint that includes college counts
        const response = await axios.get('https://api.gined.in/api/categories/');
        setCategories(response.data);
        console.log(response);
      } catch (error) {
        console.error("Failed to fetch categories with college counts", error);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            <span>Favourite Course</span>
            <h2>Top Category</h2>
          </div>
          <div className="all-btn all-category d-flex align-items-center">
            <Link to="job-category" className="btn btn-primary">
              All Categories
            </Link>
          </div>
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p>
            Explore Top Categories, your guide to premier educational institutions for unparalleled academic excellence and opportunities.
          </p>
        </div>
        <OwlCarousel
          {...settings}
          className="owl-carousel mentoring-course owl-theme aos"
          data-aos="fade-up"
          loop
          margin={10}
          nav
        >
          {categories.map((category) => (
            <div key={category.id} className="feature-box text-center">
              <div className="feature-bg">
                <div className="feature-header">
                  <div className="feature-cont">
                    <div className="feature-text">{category.title}</div>
                  </div>
                </div>
                {/* Update to show the college count */}
                <p>{category.collegesCount}10+ Colleges</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default TopCategory;
