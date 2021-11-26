import "./styles.css";

const STYLES = [
    "btn_play",
    "btn_moreInfo"
]

export const Button = ({
    text,
    buttonStyle
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    return(
        <button className = {`btn ${checkButtonStyle}`}>{text}</button>
    );
};
