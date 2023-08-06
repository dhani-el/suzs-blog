import { useState, useCallback } from "react";
import "./Reviews.css";

const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px"
};
const sliderStyles = {
    position: "relative",
    height: "100%",
};
const slidesContainerStyles = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
};
const slidesContainerOverflowStyles = {
    overflow: "hidden",
    height: "100%",
    width: "80%"
};
const ReviewSlider = ({ slides, parentWidth }) => {
    // const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }, [currentIndex, slides]);
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    const getSlideStylesWithBackground = (slideIndex) => ({
        ...slideStyles,
        width: `${parentWidth}vw`,
    });
    const getSlidesContainerStylesWithWidth = () => ({
        ...slidesContainerStyles,
        width: `${parentWidth * slides.length}vw`,
        transform: `translateX(${-(currentIndex * parentWidth)}vw)`,
    });
    // const fetchSpecific = ()=> {
    //     if (timerRef.current) {
    //         clearTimeout(timerRef.current);
    //     }
    //     timerRef.current = setTimeout(() => {
    //         goToNext();
    //     }, 10000);
    // }
    // useEffect(() => {
    //     fetchSpecific();
    //     return () => {
    //         timerRef.current = false;   // clean up function
    //       };
    // }, [fetchSpecific])
    return (
        <div className="Review-slider" style={sliderStyles}>
            <div className="arrows">
                <div className="arrow-left" onClick={goToPrevious}>↼</div>
                <div className="arrow-right" onClick={goToNext}>⇀</div>
            </div>
            <div className="revss" style={slidesContainerOverflowStyles}>
                <div className="revs" style={getSlidesContainerStylesWithWidth()}>
                    {slides.map((slide, slideIndex) => (
                        <div className="rev" key={slideIndex} style={getSlideStylesWithBackground(slideIndex)}>
                            <div className="review-text">
                                {slide.review}
                            </div>
                            <div className="reviewer">{slide.reviewer}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="slider-dots">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => { goToSlide(slideIndex) }}>•</div>
                ))}
            </div>
        </div>
    );
}

export default ReviewSlider;