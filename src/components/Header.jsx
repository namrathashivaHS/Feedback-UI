import PropTypes from 'prop-types';
function Header({text,bgcolor,textcolor}){
    const Headerstyles={
        backgroundColor:bgcolor,
        color:textcolor
    }
    return(
        <header style={Headerstyles}>
            <div className='container'>
                <h2>
                    {text}
                </h2>
            </div>
        </header>
    )
}
Header.propTypes={
    text:PropTypes.string,
    bgcolor:PropTypes.string,
    textcolor:PropTypes.string
}
Header.defaultProps={
    text:'Feedback UI',
    bgcolor:'rgba(0,0,0,0.4)',
    textcolor:'#ff6a95'
}


export default Header;