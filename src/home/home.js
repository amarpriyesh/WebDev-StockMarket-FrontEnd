import React, { useState, useEffect } from 'react';

const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
};

const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '20px',
};

const subtitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 400,
    marginBottom: '40px',
};

const typingContainerStyle = {
    fontSize: '1rem',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    width: '55vw',
    border: '1px solid #ccc',
    padding: '20px 40px',
    borderRadius: '5px',
    marginBottom: '40px',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
};

const cursorStyle = {
    animation: 'blink 1s steps(2, start) infinite',
};

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

const Home = () => {
    const text = 'StockMarketNews is a cutting-edge web platform designed to provide users with ' +
        'real-time stock market news and insights. By leveraging the powerful APIs ' +
        'offered by MarketAux.com, StockMarketNews aims to deliver up-to-the-minute financial ' +
        'data, expert analysis, and market trends to both individual investors and ' +
        'financial professionals. In addition, StockMarketNews provides CRUD operations on user management,' +
        'search functionality using Remote API, regular updates from the MarketAux API,' +
        'news and search access to anonymous users, option to comment and provide views to logged in users.';
    const typingSpeed = 50;
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
                <h1 style={titleStyle}>StockMarketNews</h1>
                <h2 style={subtitleStyle}>Real-time Stock Market News and Insights</h2>
                <div style={typingContainerStyle}>
                    <span>{typedText}</span>
                    <span style={cursorStyle}>|</span>
                </div>
            </div>
        </>
    );
};

export default Home;
