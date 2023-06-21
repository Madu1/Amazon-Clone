import React, { useState } from 'react'
import "./Home.css";
import Product from './Product';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import bg1 from "./images/bg1.jpg";
import bg2 from "./images/bg2.jpg";
import bg3 from "./images/bg3.jpg";
import bg4 from "./images/bg4.jpg";
import Toast from './Toast/Toast';




const products = [
        [
            {
                id:'12321341',
                title:'The Lean Startup: How Constatnt Innovation Creates Radically Successful Businesses Paperback',
                price:29.99,
                image:'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
                rating:5
            },
            {   
                id:'49538094',
                title:'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough and Whisk, 5 Litre Glass Bowl',
                price:239.0,
                rating:4,
                image:'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                
            },
        ],
        [
            {
                id:'4903850',
                title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
                price:199.,
                rating:3,
                image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",

            },
            {   
                id:'23445930',
                title:"Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric",
                price:98.99,
                rating:5,
                image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                

            },
            {
                id:'3254354345',
                title:"New Apple iPad Pro (12.9-inch,wifi, 128GB) - Silver (4th Generation)",
                price:598.99,
                rating:4,
                image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"

            }
        ],
        [
            {
                id:'90829332',
                title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
                price:1094.98,
                rating:4,
                image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"

            },
        ],
    ];

    const bg_images = [bg1, bg2, bg3, bg4];

const Home = () => {
        const [right, setRight] = useState(-300);

        const toastHandler = () => {
            setRight(0);
            setTimeout(() =>{
                setRight(-300);
            }, 1000);
        }
    
    

  return (
    <div className='home'>
        <div className='home__container'>

            <Carousel
                autoPlay={false}
                indicators={false}
                className="home__carousel"
                navButtonsAlwaysVisible={true}
                navButtonsAlwaysInvisible={false}
            >
                {bg_images.map((item, i) =>(
                    <img
                        key={i}
                        src={item}
                        alt={`Amazon Background ${i}`}
                        className="home__image"
                    />
                ))}
            </Carousel>
            </div>
            <div className='home__products'>
                {products.map((row, index1)=>(
                    <div className='home__row' key={`${row}${index1}`}>
                        {row.map((product, index2) => (
                            <Product
                                key={`{product.id}${index1}${index2}`}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                                toastHandler={toastHandler}
                            />
                        ))}

                    </div>
                ))}
                
        </div>
        <Toast right={right}/>
    </div>
  )
};

 
export default Home