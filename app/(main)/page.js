'use client'

import Navbar from "@/components/navbar";
import Hero from "@/app/(main)/hero";
import VisiMisi from "@/app/(main)/visi-misi";
import Galeri from "@/app/(main)/galeri";
import Footer from "@/app/(main)/footer";
import Struktur from "@/app/(main)/struktur";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Pagination} from 'swiper/modules';

const sliders = [
    {
        img: 'hero.jpeg',
        title: "Website PKK Berkoh",
        description: 'Website utama PKK (Pemberdayaan Kesejahteraan Keluarga) daerah kelurahan\nBerkoh, Kecamatan Purwokerto Selatan, Banyumas, Jawa Tengah.'
    },
    {
        img: '5.jpeg',
        title: "Website PKK Berkoh 2",
        description: 'Deskripsi 2'
    },
    {
        img: '2.jpeg',
        title: "Website PKK Berkoh 3",
        description: 'Deskripsi 3'
    }
]

const Home = () => {
    return (
        <div>
            <div className="">
                <Navbar/>

                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        sliders.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Hero img={item.img} title={item.title} description={item.description}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <VisiMisi/>
            <Struktur/>
            <Galeri/>
            <Footer/>
        </div>
    )
}

export default Home