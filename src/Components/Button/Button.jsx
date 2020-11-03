import React from 'react';
import './Button.scss';

const Button = ({txt,bgColor,width, btnWidth, lSpacing, txtSize, fWeight, colorTxt, padding,txtTransform, margin}) => {

    console.log(colorTxt);

    const styleBtn = {
        color: `${colorTxt}`,
        backgroundColor: `${bgColor}`,
        width: `${btnWidth}`,
        minwidth: `${width}`,
        maxWidth: '100%',
        fontSize: `${txtSize}`,
        padding: `${padding}`,
        textTransform: `${txtTransform}`,
        marginTop: `${margin}`,
        textAlign: 'center',
        borderRadius: '100px',
        cursor: 'pointer',
        fontWeight: `${fWeight}`,
        letterSpacing: `${lSpacing}`
    }
    return (
        <div className="btn" style={styleBtn}>
            {txt}
        </div>
    )
}

export default Button;