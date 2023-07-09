import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSidebar} from "../reducers/sidebar-reducer";
import {useLocation} from "react-router";

const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    maxWidth: '100vw',
    minHeight: '100vh',

};

const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: 700,
    marginBottom: '20px',
    color: '#FFFFFF',
};

const subtitleStyle = {
    fontSize: '2rem',
    fontWeight: 400,
    marginBottom: '40px',
    color: '#FFFFFF',
};

const typingContainerStyle = {
    fontSize: '1.2rem',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    width: '55vw',
    border: '1px solid #ccc',
    padding: '20px 40px',
    borderRadius: '10px',
    marginBottom: '40px',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const cursorStyle = {
    animation: 'blink 1s steps(2, start) infinite',
};

const tileContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '40px',
};

const tileStyle = {
    width: '300px',
    height: '200px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

const stockImages = [
    {
        url: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'Financial data on a digital screen',
    },
    {
        url: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'Stock market newspaper',
    },
    {
        url: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'Financial graphs on a monitor',
    },
    {
        url: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt: 'People discussing financial data',
    },
];



const Home = () => {

    const text = '$tockMarketNews is a cutting-edge web platform designed to provide users with ' +
        'real-time stock market news and insights. By leveraging the powerful APIs ' +
        'offered by MarketAux.com, StockMarketNews aims to deliver up-to-the-minute financial ' +
        'data, expert analysis, and market trends to both individual investors and ' +
        'financial professionals. In addition, StockMarketNews provides CRUD operations on user management,' +
        'search functionality using Remote API, regular updates from the MarketAux API,' +
        'news and search access to anonymous users, option to comment and provide views to logged in users.$';
    const typingSpeed = 50;


    const useTypingEffect = (text, typingSpeed) => {
        const [typedText, setTypedText] = useState('');

        useEffect(() => {
            let timer;
            const typeCharacter = (currentIndex) => {
                if (currentIndex < text.length) {
                    setTypedText((prevTypedText) => prevTypedText + text.charAt(currentIndex));
                    timer = setTimeout(() => typeCharacter(currentIndex + 1), typingSpeed);
                }
            };

            typeCharacter(0);
            return () => clearTimeout(timer); // Clear timer on unmount
        }, [text, typingSpeed]);

        return typedText;
    };



    const typedText = useTypingEffect(text, typingSpeed);





    return (
        <>
            <style>
                {`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        `}
            </style>
            <div style={containerStyle}>
                <h1 style={titleStyle}>$$tockMarketNews</h1>
                <h2 style={subtitleStyle}>Real-time Stock Market News and Insights</h2>
                <div style={typingContainerStyle}>
                    <span>{typedText}</span>
                    <span style={cursorStyle}>|</span>
                </div>
                <div style={tileContainerStyle}>
                    {stockImages.map((image, index) => (
                        <div
                            key={index}
                            style={{
                                ...tileStyle,
                                backgroundImage: `url(${image.url})`,
                            }}
                            alt={image.alt}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
