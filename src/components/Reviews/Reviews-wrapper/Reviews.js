import ReviewSlider from "../Reviews-slider/Reviews";
import "./Reviews.css";

const Reviews = () => {
    const reviewsDets = [
        {
            id: 1,
            review : "Susan, through her articles, help me see that I am not alone, and as a twenty-something we all face these struggles. But more importantly, they help me realize how important it is to know that we can all still overcome these struggles and be the best version of ourselves.This all just emphasizes how good of a writer she is.",
            reviewer : '-Abdulrasheed'
        },
        {
            id: 2,
            review : "There are writers, there are good writers and then the very best of them and that's where Susan sits! She's One of the very best there is and it's no artificial hype!  From the first line I ever read from her piece, i got glued and kept wanting more! She's the kind of writer that'll convert you into a book lover! I'll recommend any of her pieces any day, anytime!",
            reviewer : '-Melody Thompson'
        },
        {
            id: 3,
            review : "Your mind is whole universe on it's own! Too creative",
            reviewer : '-Mama Mel'
        }
    ]
    return ( 
        <div className="reviews-wrapper">
            <ReviewSlider slides={reviewsDets} parentWidth={"80"}/>
        </div>
     );
}
 
export default Reviews;