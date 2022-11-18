import './styles.css'
export const Button = ( { text, onClick, disabled, text2 }) => {
    return (
        <button 
            className='button' 
            onClick={onClick}
            disabled={disabled}
        >
          {text}
        </button>
    )
}