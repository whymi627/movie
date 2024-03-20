import PropTypes from 'prop-types';


function Button({text}) {
    return (
        <button 
            style={{
                color:"antiquewhite",
                backgroundColor: "tomato",
                fontSize: "50px",
            
        }}
        
        >{text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;