import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext,useState,useEffect } from 'react';
import FeedbackContext from './FeedbackContext';

function FeedbackForm({handleAdd}){
    const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext);
    useEffect(()=>{
        setText(feedbackEdit.item.text);
        setBtnDisabled(false);
        setRating(feedbackEdit.item.rating);
    },[feedbackEdit])
    const [text,setText]=useState('');
    const [rating,setRating]=useState(10);
    const [btnDisabled,setBtnDisabled]=useState(true);
    const [message,setMessage]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text!==undefined &&text.trim().length>10){
            const newFeedback={
                text,
                rating
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }
            else{
                addFeedback(newFeedback);
            }
            setText('');
            feedbackEdit.edit=false;
            setBtnDisabled(true);
            setRating(10);
        }
    }
    const handleTextChange=(e)=>{
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        } else if(text != '' &&text!==undefined && text.trim().length <= 10){
            setMessage('Text must be atleast 10 characters !')
            setBtnDisabled(true);
        } else{
            setMessage(null);
            setBtnDisabled(false);
        }

        setText(e.target.value);
    }
    const rate=0;
    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our services with you?</h2>
                <RatingSelect select={(rating)=>setRating(rating)}/>
                <div className='input-group'>
                    <input onChange={handleTextChange} value={text} type='text' placeholder='Write a review'/>
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && (<div className='message'>{message}</div>)}
            </form>
        </Card>
    )
}

export default FeedbackForm;