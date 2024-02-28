import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Course10, Icon1 } from "../../../imagepath";

const rating = [
  {
    "rating_comment": "This is a sample rating comment.",
    "rating": 2,
    "rated_by": "User_90"
  },
  {
    "rating_comment": "This is a sample rating comment.",
    "rating": 1,
    "rated_by": "User_19"
  },
  {
    "rating_comment": "This is a sample rating comment.",
    "rating": 5,
    "rated_by": "User_56"
  },
  {
    "rating_comment": "This is a sample rating comment.",
    "rating": 4,
    "rated_by": "User_17"
  },
  {
    "rating_comment": "This is a sample rating comment.",
    "rating": 3,
    "rated_by": "User_84"
  },
  {
    "rating_comment": "This is a sample rating comment.",
    "rating": 2,
    "rated_by": "User_72"
  },
  {
    "rating_comment": "This is a sample rating comment.",
    "rating": 2,
    "rated_by": "User_33"
  },
  {
    "rating_comment": "This is a sample rating comment.",
    "rating": 5,
    "rated_by": "User_86"
  },
  {
    "rating_comment": "This is a sample rating comment.",
    "rating": 4,
    "rated_by": "User_12"
  },
  {
    "rating_comment": "This is a sample rating comment.",
    "rating": 4,
    "rated_by": "User_97"
  }
];

const location = "Bengaluru, India"

const InnerPage = ({collegeData}) => {


  function truncateTextToWordLimit(text, limit = 24) {
    const words = text.split(/\s+/);
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  }


  return (
    <>
      <div className="row">
        {
          collegeData.map((item) => {

            const averageRating = rating.reduce((acc, cur) => acc + cur.rating, 0) / rating.length;
            const roundedAverageRating = Math.round(averageRating); // Round to nearest whole number for filled stars
            const unfilledStars = 5 - roundedAverageRating; // Calculate the number of unfilled stars



            return (
              <>
                <div className="col-lg-12 col-md-12 d-flex">
                  <div className="course-box course-design list-course d-flex">
                    <div className="product">
                      <div className="product-img">
                        <Link to="/course-details">
                          <img
                            className="img-fluid"
                            alt=""
                            src={Course10}
                          />
                        </Link>
                        {/* <div className="price">
                  <h3>
                    $300 <span>$99.00</span>
                  </h3>
                </div> */}
                      </div>
                      <div className="product-content">

                        {/* Title */}
                        <div className="head-course-title">
                          <h3 className="title">
                            <Link to="/course-details">
                              {item.title.rendered}
                            </Link>
                          </h3>
                          <div className="all-btn all-category d-flex align-items-center">
                            <Link to="/checkout" className="btn btn-primary">
                              Apply now
                            </Link>
                          </div>
                        </div>
                        <div className="excerpt">
                          {truncateTextToWordLimit(item.excerpt.rendered, 30)}
                        </div>
                        {/* Location */}
                        <div className="course-info border-bottom-0 pb-0 d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <img src={Icon1} alt="" />
                            <p>{location}</p>
                          </div>
                          {/* <div className="course-view d-flex align-items-center">
                    <img src={Icon2} alt="" />
                    <p>9hr 30min</p>
                  </div> */}
                        </div>

                        {/* Rating */}
                        <div className="rating">
                          {
                            // Render filled stars based on the average rating
                            Array.from({ length: roundedAverageRating }, (_, index) => (
                              <i key={index} className="fas fa-star filled me-1" />
                            ))
                          }
                          {
                            // Render unfilled stars for the remainder up to 5
                            Array.from({ length: unfilledStars }, (_, index) => (
                              <i key={index + roundedAverageRating} className="far fa-star me-1" />
                            ))
                          }
                          <span className="d-inline-block average-rating">
                            <span>{averageRating.toFixed(1)}</span> ({rating.length})
                          </span>
                        </div>

                        <div className="course-group d-flex mb-0">
                          {/* <div className="course-group-img d-flex">
                    <Link to="/instructor-profile">
                      <img
                        src={User1}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="course-name">
                      <h4>
                        <Link to="/instructor-profile">Rolands R</Link>
                      </h4>
                      <p>Instructor</p>
                    </div>
                  </div> */}
                          <div className="course-share d-flex align-items-center justify-content-center">
                            <Link to="#">
                              <i className="fa-regular fa-heart" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
};

InnerPage.propTypes = {
  collegeData: PropTypes.array.isRequired, // or PropTypes.array if it's not required
};


export default InnerPage;
