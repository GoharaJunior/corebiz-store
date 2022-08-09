import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";

import './fullbanner.scss';

export function Fullbanner ({ screen }) {
    return (
        <section className="full-banner">
            
            {screen == 'desktop' && (
                <Swiper
                    loop={true}
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.imgur.com/SckQ7vm.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.imgur.com/SckQ7vm.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.imgur.com/SckQ7vm.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.imgur.com/SckQ7vm.png" />
                    </SwiperSlide>
                </Swiper>
            )}

            {screen == 'mobile' && (
                <Swiper
                    loop={true}
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                <SwiperSlide>
                    <img src="https://i.imgur.com/YrLTLdC.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/YrLTLdC.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/YrLTLdC.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.imgur.com/YrLTLdC.png" />
                </SwiperSlide>
            </Swiper>
            )}
        </section>
    )
}