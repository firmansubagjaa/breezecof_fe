import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'


// rating
import customer from "../../assets/png/customer1.png";
import rating from "../../assets/svg/rating.svg";
import SwiperButton from "../../components/swiperButton";
import { Pagination } from "swiper";

export default function Herobanner6() {
  return (
    <>
      {/* herrobaner6 */}
      <section className="bg-[#fbfbfb]">
        <div className="lg:ml-20">
          <div className="text-center leading-loose mb-10">
            <h2 className="text-3xl font-bold leading-normal">
              Loved by Thousands of <br /> Happy Customer
            </h2>
            <p>
              These are the stories of our customers who have visited us with great <br /> pleasure.
            </p>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <SwiperSlide>
                  <div className="card w-full bg-base-100 shadow-md">
                    <div className="card-body">
                      <div className="flex justify-between">
                        <img src={customer} alt="profile" className="mr-3" />
                        <div>
                          <h2 className="card-title">Firman</h2>
                          <p>Bandung, Indonesia</p>
                        </div>
                        <div className="flex flex-row items-center">
                          <p>4.5</p>
                          <img src={rating} alt="rating" />
                        </div>
                      </div>

                      <div className="my-5">
                        <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperButton classname="mt-5 h-44" />
          </Swiper >
        </div>
      </section>
    </>
  );
}
