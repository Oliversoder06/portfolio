import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import AboutCards from './AboutCards';

const SwipeableAboutCards = () => {
    const [index, setIndex] = useState(0);
    const maxIndex = AboutCards.length - 1;

    const handleSwipeLeft = () => {
        if (index < maxIndex) {
            setIndex(index + 1);
        }
    };

    const handleSwipeRight = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    return (
        <div {...swipeHandlers}>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-lg p-4 bg-white shadow-md rounded-lg">
                    <h2 className="text-xl font-bold mb-4">{AboutCards[index].header}</h2>
                    <p className="text-gray-700">{AboutCards[index].text}</p>
                </div>
            </div>
        </div>
    );
};

export default SwipeableAboutCards;
