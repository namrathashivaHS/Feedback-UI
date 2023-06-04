import {Navigate,useNavigate} from 'react-router-dom';
import NotFound from './NotFound';

function Post(){
    const navi = useNavigate();
    const status=200;
    if(status===404){
        return(
            <Navigate to='/notFound'/>
        )
    }
    
    const onClick=()=>{
       navi('/about');
    }
    
    return(
        <div>
            <h1>Post</h1>
            <button onClick={onClick}>Click</button>
        </div>
    )
}

export default Post;