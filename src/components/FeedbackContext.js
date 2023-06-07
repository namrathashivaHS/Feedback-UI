import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([{id:1,
        rating:8,
        text:`This is from 1 context api.`},
        {id:2,
        rating:9,
        text:`This is from 2 context api.`},
        {id:3,
        rating:8,
        text:`This is from 3 context api.`}])

        const deleteFeedback=(id)=>{
            if(window.confirm('Are you sure you want to delete?')){
             setFeedback(feedback.filter((item)=>item.id!==id));
            }
         }

         const addFeedback=(newFeedback)=>{
            newFeedback.id=uuidv4();
            setFeedback([newFeedback,...feedback]);
        }

        const [feedbackEdit,setFeedbackEdit]=useState({
            item:{},
            edit:false
        })

        const editFeedback=(item)=>{
            setFeedbackEdit({
                item,
                edit:true
            })
        }

        const updateFeedback=(id,updItem)=>{
           setFeedback(feedback.map((item)=>(item.id===id ?{
            ...item,...updItem
           }:item
           )))
        }
        return(
            <FeedbackContext.Provider value={
                {
                    feedback,
                    deleteFeedback,
                    addFeedback,
                    feedbackEdit,
                    editFeedback,
                    updateFeedback
                }
            }>
                {children}
            </FeedbackContext.Provider>
        )
}

export default FeedbackContext;