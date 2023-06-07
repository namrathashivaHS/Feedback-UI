import { useContext } from "react";
import FeedbackContext from "./FeedbackContext";
function FeedbackStates(){
    const { feedback } = useContext(FeedbackContext);
    let sum=feedback.reduce((acc,crr)=>{
        return acc+crr.rating;
    },0);

    let avg=sum/feedback.length;
    avg=avg.toFixed(1);
    return(
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating : {isNaN(avg)? 0 :avg}</h4>
        </div>
    )
}

export default FeedbackStates;
