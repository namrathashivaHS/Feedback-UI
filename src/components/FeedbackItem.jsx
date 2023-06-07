import {useState} from 'react';
import Card from './shared/Card';
import {FaTimes,FaHeart,FaRegHeart,FaThumbsUp,FaEdit} from 'react-icons/fa';
import {motion,AnimatePresence} from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from './FeedbackContext';

function FeedbackItem({item}){
const {deleteFeedback,editFeedback}=useContext(FeedbackContext);
const [toggleLike, setToggleLike] = useState(false);
//const [countLike, setCountLike] = useState(0);
// const handleLike = (id, oldCount) => {
//   oldCount++;
//   setCountLike(oldCount);
// };
    return(
        <>
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={()=>deleteFeedback(item.id)}className='close'>
                <FaTimes color="purple"/>
            </button>
            <button className='edit' onClick={()=>editFeedback(item)}>
                <FaEdit color="purple"/>
            </button>
            <div className='textdisplay'>{item.text}</div>
            <div className="like-btn">
        {toggleLike ? (
          <FaHeart onClick={() => setToggleLike(!toggleLike)} color="purple" />
        ) : (
          <AnimatePresence>
          <motion.div
            initial={{opacity:0}}
            whileTap={{ scale: 3 }}
            animate={{opacity:1}}
            exit={{opacity:0}}>

            <FaRegHeart
            onClick={() => setToggleLike(!toggleLike)} 
            color="purple"
          />

          </motion.div>
          </AnimatePresence>          
        )}
        {/* <button className="like-btn" onClick={() => handleLike(item.id, countLike)}>
          <FaThumbsUp color="purple" />
          <div>{countLike} likes</div>
        </button> */}

      </div>
        </Card>
        </>
    )
}

export default FeedbackItem;