import React from 'react'

import Product from '../Product/Product';

import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"//"https://images-eu.ssl-iamges-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
            </div>
            <div className='home__row'>
                <Product 
                    id={1}
                    title='The Alchemist + Kafka On The Shore (Combo of 2 Books) Paperback – 1'
                    price={439.00}
                    image='data:image/webp;base64,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'
                    rating={5}
                />
                <Product
                    id={2}
                    title='Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women’s Health Tracking'
                    price={2499.00}
                    image='https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._AC_SL1500_.jpg'
                    rating={3}
                />
            </div>
            <div className='home__row'>
                <Product
                    id={3}
                    title='New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model, 8th Generation)'
                    price={29990.00}
                    image='https://images-na.ssl-images-amazon.com/images/I/71ZXj1QEE0L._AC_SL1500_.jpg'
                    rating={4}
                />
                <Product
                    id={4}
                    title='OnePlus 9R 5G (Lake Blue, 12GB RAM, 256GB Storage)'
                    price={43999.00}
                    image='https://images-na.ssl-images-amazon.com/images/I/61IwksZ-DGL._AC_SL1500_.jpg'
                    rating={4}
                />
                <Product
                    id={4}
                    title='All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)'
                    price={3999.00}
                    image='https://images-na.ssl-images-amazon.com/images/I/61pY4aTTx1L._AC_SL1000_.jpg'
                    rating={5}
                />
            </div>
            <div className='home__row'>
                <Product
                    id={5}
                    title='
                    Panasonic 147 cm (58 inches) 4K Ultra HD Certified Android Smart LED TV TH-58HX450DX (Black) (2020 Model)'
                    price={49990.00}
                    image='https://images-na.ssl-images-amazon.com/images/I/91LzCxOO3fL._AC_SL1500_.jpg'
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home