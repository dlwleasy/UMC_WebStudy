interface buttongroup {
    onClick?: () => void;
    text: string;
}

const Button = ({onClick, text}:buttongroup) => (
    <>
        <button onClick={onClick}>{text}</button>
    </>
)

export default Button