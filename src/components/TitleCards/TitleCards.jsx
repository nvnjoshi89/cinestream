// import React, { useEffect, useRef } from 'react'
// import './TitleCards.css'
// import cards_data from '../../assets/cards/Cards_data'



// const TitleCards = () => {

//     const cardsRef = useRef()

//     const handlewheel = (event) => {
//         event.preventDefault();
//         cardsRef.current.scrollLeft += event.deltaY;
//     }

//     useEffect(() => {
//         cardsRef.current.addEventListner('wheel', handlewheel)
//     }, [])

//     return (
//         <div className='title-cards'>
//             <h2>Popular on Netflix</h2>
//             <div className="card-list" ref={cardsRef}>
//                 {cards_data.map((card, index) => {
//                     return <div className='card' key={index}>
//                         <img src={card.image} alt="" />
//                         <p>{card.name}</p>
//                     </div>

//                 })}
//             </div>
//         </div>
//     )
// }

// export default TitleCards


import React, { useEffect, useRef } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';

const TitleCards = () => {
    const cardsRef = useRef();

    const handleWheel = (event) => {
        event.preventDefault();
        // The .current property of a useRef object in React provides access to the actual DOM element or value that the ref is attached to.
        cardsRef.current.scrollLeft += event.deltaY;
    };

    useEffect(() => {
        cardsRef.current.addEventListener('wheel', handleWheel);
        return () => {
            cardsRef.current.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div className='title-cards'>
            <h2>Popular on Netflix</h2>
            <div className="card-list" ref={cardsRef}>
                {cards_data.map((card, index) => {
                    return (
                        <div className='card' key={index}>
                            <img src={card.image} alt="" />
                            <p>{card.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TitleCards;
