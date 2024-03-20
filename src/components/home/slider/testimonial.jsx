import React from "react";
import { Link } from "react-router-dom";
import { Qute
} from "../../imagepath";
// import OwlCarousel from "react-owl-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  return (
    <section className="testimonial-four">
      <div className="review">
        <div className="container">
          <div className="testi-quotes">
            <img src={Qute} alt="" />
          </div>
          <div
            className="mentor-testimonial lazy slider aos"
            data-aos="fade-up"
            data-sizes="50vw"
          >
            <Slider>
              <Card />
              <Card2 />
              <Card3 />
              <Card4 />
              <Card5 />

            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
const Card = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="testimonial-all d-flex justify-content-center">
        <div className="testimonial-two-head text-center align-items-center d-flex">
          <div className="testimonial-four-saying ">
            <div className="testi-right">
              <img src={Qute} alt="" />
            </div>

            <p>
            I recently used GinEds services to help me choose the right 
            college for my academic goals, and I must say I am thoroughly 
            impressed with their platform. The user interface is intuitive 
            and easy to navigate, allowing me to filter through various colleges 
            based on my requirements like fee structure, course availability, 
            and campus view.
            </p>

            <div className="four-testimonial-founder">
              <div className="fount-about-img">
                {/* <Link to="instructor-profile">
                  <img src={User1} alt="" className="img-fluid" />
                </Link> */}
              </div>

              <h3>
                <Link to="instructor-profile">Mithul Bedi</Link>
              </h3>
              <span>Student</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card2 = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="testimonial-all d-flex justify-content-center">
        <div className="testimonial-two-head text-center align-items-center d-flex">
          <div className="testimonial-four-saying ">
            <div className="testi-right">
              <img src={Qute} alt="" />
            </div>

            <p>
            GinEd not only helped me to remove the barrier of the 
            middleman but also provided me with unbiased recommendations, 
            which enabled me to make the right choice for my career. Additionally, 
            their Soft skill courses have helped me to enhance my employability 
            and prepared me for the job market.
            </p>

            <div className="four-testimonial-founder">
              <div className="fount-about-img">
                {/* <Link to="instructor-profile">
                  <img src={User1} alt="" className="img-fluid" />
                </Link> */}
              </div>

              <h3>
                <Link to="instructor-profile">Venktesh Nayak</Link>
              </h3>
              <span>Student</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card3 = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="testimonial-all d-flex justify-content-center">
        <div className="testimonial-two-head text-center align-items-center d-flex">
          <div className="testimonial-four-saying ">
            <div className="testi-right">
              <img src={Qute} alt="" />
            </div>

            <p>
            What sets GinEd apart is their personalized 
            approach to helping candidates. They were always 
            available to answer my queries and provided me with 
            the necessary guidance to make informed decisions.
            </p>

            <div className="four-testimonial-founder">
              <div className="fount-about-img">
                {/* <Link to="instructor-profile">
                  <img src={User1} alt="" className="img-fluid" />
                </Link> */}
              </div>

              <h3>
                <Link to="instructor-profile">Venktesh Nayak</Link>
              </h3>
              <span>Student</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Card4 = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="testimonial-all d-flex justify-content-center">
        <div className="testimonial-two-head text-center align-items-center d-flex">
          <div className="testimonial-four-saying ">
            <div className="testi-right">
              <img src={Qute} alt="" />
            </div>

            <p>
            It/s great place to pursue their highest degree ,
            I had a very great experience I would highly recommend 
            GINED to any student looking to pursue higher education in
             Bangalore. The team/s dedication to helping students achieve 
             their dreams and providing them with the necessary resources to 
             succeed sets them apart from other organizations. Thank you, GINED, 
             for all of your support! And thank you sowmya for your all time support.
            </p>

            <div className="four-testimonial-founder">
              <div className="fount-about-img">
                {/* <Link to="instructor-profile">
                  <img src={User1} alt="" className="img-fluid" />
                </Link> */}
              </div>

              <h3>
                <Link to="instructor-profile">Venktesh Nayak</Link>
              </h3>
              <span>Student</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Card5 = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="testimonial-all d-flex justify-content-center">
        <div className="testimonial-two-head text-center align-items-center d-flex">
          <div className="testimonial-four-saying ">
            <div className="testi-right">
              <img src={Qute} alt="" />
            </div>

            <p>
            I had a wonderful experience with Gined for my 
            Ramaiah college admissions. The team was extremely 
            helpful and provided me with all the necessary information 
            and assistance. They made the entire process hassle-free and stress-free. 
            I highly recommend Gined to anyone looking for guidance and support during 
            their college admission process. Thank you, Gined 
            </p>

            <div className="four-testimonial-founder">
              <div className="fount-about-img">
                {/* <Link to="instructor-profile">
                  <img src={User1} alt="" className="img-fluid" />
                </Link> */}
              </div>

              <h3>
                <Link to="instructor-profile">Venktesh Nayak</Link>
              </h3>
              <span>Student</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// {
//   <section className="testimonial-four">
//       <div className="review">
//         <div className="container">
//           <div className="testi-quotes">
//             <img src={Qute} alt="" />
//           </div>
//           <div
//             className="mentor-testimonial lazy slider aos"
//             data-aos="fade-up"
//             data-sizes="50vw"
//           >
//             <div className="d-flex justify-content-center">
//               <div className="testimonial-all d-flex justify-content-center">
//                 <div className="testimonial-two-head text-center align-items-center d-flex">
//                   <div className="testimonial-four-saying ">
//                     <div className="testi-right">
//                       <img src={Qute01} alt="" />
//                     </div>
//                     <p>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s, when an unknown
//                       printer took a galley of type and scrambled it to make a
//                       type specimen book.
//                     </p>
//                     <div className="four-testimonial-founder">
//                       <div className="fount-about-img">
//                         <Link to="instructor-profile">
//                           <img src={User1} alt="" className="img-fluid" />
//                         </Link>
//                       </div>
//                       <h3>
//                         <Link to="instructor-profile">Daziy Millar</Link>
//                       </h3>
//                       <span>Founder of Awesomeux Technology</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex justify-content-center">
//               <div className="testimonial-all d-flex justify-content-center">
//                 <div className="testimonial-two-head text-center align-items-center d-flex">
//                   <div className="testimonial-four-saying ">
//                     <div className="testi-right">
//                       <img src={Qute01} alt="" />
//                     </div>
//                     <p>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s, when an unknown
//                       printer took a galley of type and scrambled it to make a
//                       type specimen book.
//                     </p>
//                     <div className="four-testimonial-founder">
//                       <div className="fount-about-img">
//                         <Link to="instructor-profile">
//                           <img src={User3} alt="" className="img-fluid" />
//                         </Link>
//                       </div>
//                       <h3>
//                         <Link to="instructor-profile">john smith</Link>
//                       </h3>
//                       <span>Founder of Awesomeux Technology</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex justify-content-center">
//               <div className="testimonial-all d-flex justify-content-center">
//                 <div className="testimonial-two-head text-center align-items-center d-flex">
//                   <div className="testimonial-four-saying ">
//                     <div className="testi-right">
//                       <img src={Qute01} alt="" />
//                     </div>
//                     <p>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s, when an unknown
//                       printer took a galley of type and scrambled it to make a
//                       type specimen book.
//                     </p>
//                     <div className="four-testimonial-founder">
//                       <div className="fount-about-img">
//                         <Link to="instructor-profile">
//                           <img src={User2} alt="" className="img-fluid" />
//                         </Link>
//                       </div>
//                       <h3>
//                         <Link to="instructor-profile">David Lee</Link>
//                       </h3>
//                       <span>Founder of Awesomeux Technology</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
// }

export default Testimonial;
