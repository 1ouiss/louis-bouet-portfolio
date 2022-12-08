import { useState, useEffect } from "react";

const Swiper = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('./logo.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    return ( 
        <div className="swiperContainer">
            <div className="scrolling-wrap">
                <div className="comm anim1">  
                    {
                        cards.map((card) => (
                            <div className="card-logo" key={card.id}>
                                <img src={card.image}
                                    alt={card.text} />
                                <p>
                                    {card.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="comm anim1">
                    {
                        cards.map((card) => (
                            <div className="card-logo" key={card.id}>
                                <img src={card.image}
                                    alt={card.text} />
                                <p>
                                    {card.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="scrolling-wrap">
                <div className="comm anim2">
                    {
                        cards.map((card) => (
                            <div className="card-logo" key={card.id}>
                                <img src={card.image}
                                    alt={card.text} />
                                <p>
                                    {card.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="comm anim2">
                    {
                        cards.map((card) => (
                            <div className="card-logo" key={card.id}>
                                <img src={card.image}
                                    alt={card.text} />
                                <p>
                                    {card.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Swiper;