import React from "react";
import "./Projects.css";
import Cards from "../P_Cards/P_Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const params = {
  pagination: {
    dynamicBullets: true,
  },
  modules: [Pagination],
  grabCursor: true,
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    840: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
  },
};

const Projects = () => {
  return (
    <div className="projects" id="Projects">
      <div className="p-head">
        <p>My Recent</p>
        <p style={{ color: "#FF0000", marginTop: "0.5rem" }}>Projects</p>
      </div>

      <div className="cards">
        <Swiper {...params}>
          <SwiperSlide>
            <Cards
              p_name={"Booking Clone"}
              p_details={"Made with ReactJS"}
              p_link={"https://github.com/rigonosmani/bookingclone"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              p_name={"PrishtinaCases"}
              p_details={"Made with ReactJS"}
              p_link={"https://github.com/rigonosmani/Mybusiness"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              p_name={"A fun Project "}
              p_details={"Made with ReactJS"}
              p_link={"https://github.com/rigonosmani/project"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              p_name={"Omni Food the first project ever"}
              p_details={"Made with HTML and CSS"}
              p_link={
                "https://github.com/rigonosmani/Omnifood-First-Project-ever"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              p_name={"a NavBar in Vue Js"}
              p_details={"Testing Vue Js"}
              p_link={"https://github.com/rigonosmani/Footer-Vue.js"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
