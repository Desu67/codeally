import React from 'react'

function Button(props) {

    const { color, text, width, weight, colorText, height, icon, onClick, fileDownload, margin, borderRadius, type, loading } = props

    return (
        <div loading={loading} onClick={onClick} id="button" style={{ display: 'flex', flexDirection: 'row', width: width, height: height, background: color, borderRadius: borderRadius, padding: '5px', textAlign: 'center', alignItems: 'center', cursor: 'pointer', justifyContent: 'center', alignContent: 'center', margin: margin }} type={type}>
            {icon &&
                <img width="24px" height="24px" style={{ padding: '5px', objectFit: 'contain' }} src={icon} alt="icon"/>
            }
            <a href={fileDownload} download style={{ fontSize: '17px', fontWeight: weight, color: colorText, textDecoration: 'none' }}>{text}</a>
        </div>
    )
}

export default Button