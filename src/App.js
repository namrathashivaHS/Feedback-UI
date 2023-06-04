import {useState} from 'react';
import Header from './components/Header.jsx';
import FeedbackData from './data/FeedbackData.js';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackStates from './components/FeedbackStates.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import AboutLinkIcon from './components/AboutLinkIcon';
// import Post from './components/Post.jsx';
// import NotFound from './components/NotFound.jsx';

function App()
{
    const [feedback,setFeedback]=useState(FeedbackData);

    const deleteFeedback=(id)=>{
       if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter((item)=>item.id!==id));
       }
    }
    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidv4();
        setFeedback([newFeedback,...feedback]);
    }
    return(
        <Router>
            <Header text="Feedback UI"/>
            <div className="container">
                <Routes>
                    <Route path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStates feedback={feedback}/>
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                            <AboutLinkIcon/>
                        </>
                    }/>
                    <Route path='/about' element={<AboutPage/>}/>
                    {/* <Route path='/post' element={<Post/>}/>
                    <Route path='notFound' element={<NotFound/>}/> */}
                </Routes>
            </div>
        </Router>
    )
}
export default App;