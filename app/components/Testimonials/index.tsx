import { Swiper, SwiperSlide } from "swiper/react";

import testimonials1 from "../../images/testimonials/testimonials-1.jpg";
import testimonials2 from "../../images/testimonials/testimonials-2.jpg";
import testimonials3 from "../../images/testimonials/testimonials-3.jpg";
import testimonials4 from "../../images/testimonials/testimonials-4.jpg";
import testimonials5 from "../../images/testimonials/testimonials-5.jpg";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonials</h2>
        </div>

        <Swiper
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="testimonial-item">
                <img src={testimonials1} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                  quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img src={testimonials2} className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                  quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img src={testimonials3} className="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                  tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img src={testimonials4} className="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                  minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img src={testimonials5} className="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                  labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}
