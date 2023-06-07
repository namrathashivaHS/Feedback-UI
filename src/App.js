import {useState} from 'react';
import Header from './components/Header.jsx';
import FeedbackData from './data/FeedbackData.js';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackStates from './components/FeedbackStates.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import AboutLinkIcon from './components/AboutLinkIcon';
import { FeedbackProvider } from './components/FeedbackContext.js';

function App()
{
    return(
        <FeedbackProvider>
            <Router>
                <Header text="Feedback UI"/>
                <div className="container">
                    <Routes>
                        <Route path='/' element={
                            <>
                                <FeedbackForm/>
                                <FeedbackStates/>
                                <FeedbackList/>
                                <AboutLinkIcon/>
                            </>
                        }/>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
}
export default App;