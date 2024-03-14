import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";
import {  Icon1 } from "../../../imagepath";
// import {default as collegeImage} from '../../../../assets/img/bg/college-image.jpg'


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




const GridInnerPage = ({ collegeData }) => {

  const navigate = useNavigate();



  function truncateTextToWordLimit(text, limit = 24) {
    const words = text.split(/\s+/);
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  }

  const handleNavigate = (item)=> {
    navigate(`/colleges/${item.name.replace(/ /g, '-')}`, {state: {item}})
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

                <div className="col-lg-4 col-md-6 d-flex" style={{cursor: 'pointer'}}>
                  <div className="course-box course-design d-flex ">
                    <div className="product">
                      <div className="product-img">
                      <div onClick={()=> handleNavigate(item)}>
                          {/* <img
                            className="img-fluid"
                            alt=""
                            src={collegeImage}
                          /> */}
                        </div>
                        {/* <div className="price">
                          <h3>
                            $300 <span>$99.00</span>
                          </h3>
                        </div> */}

                      </div>
                      <div className="product-content">
                        <div className="course-group d-flex">
                          <div className="course-group-img d-flex">
                            <div onClick={()=> handleNavigate(item)}>
                              <img
                                src={item.image}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="course-name">
                              {/* <h4>
                                <Link to="/instructor-profile">{item.name}</Link>
                              </h4> */}
                              {/* <p>Instructor</p> */}
                            </div>
                          </div>
                          <div className="course-share d-flex align-items-center justify-content-center">
                            <Link to="#">
                              {/* <i className="fa-regular fa-heart" /> */}
                            </Link>
                          </div>
                        </div>
                        <h3 className="title">
                        <div onClick={()=> handleNavigate(item)}>

                            {item.name}
                          </div>
                        </h3>
                        <div className="excerpt" style={{fontSize: '14px'}}>
                          {truncateTextToWordLimit(item.excerpt, 15 )}
                        </div>
                        <div className="course-info d-flex align-items-center">
                          <div className="rating-img d-flex align-items-center">
                            <img src={Icon1} alt="" />
                            <p>{`${(item.courses).length}+ Courses`}</p>
                          </div>
                          {/* <div className="course-view d-flex align-items-center">
                            <img src={Icon2} alt="" />
                            <p>9hr 30min</p>
                          </div> */}
                        </div>
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
                        <div className="all-btn all-category d-flex align-items-center">
                        <div onClick={()=> handleNavigate(item)} className='btn btn-primary' style={{padding: '5px', fontSize: '14px'}}>
                            Apply Now
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

GridInnerPage.propTypes = {
  collegeData: PropTypes.array.isRequired, // or PropTypes.array if it's not required
};

export default GridInnerPage;
