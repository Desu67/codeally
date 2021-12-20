import React from 'react'

function Apps (props) {

    const { apps } = props

    return (
        <div className="grid">
            {apps.map((app) => {
                return (
                    <div className="app_icon" style={{ background: `url(${app.icon_url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h1>{app.title}</h1>
                    </div>
                )
            })}
        </div>
    )

}

export default Apps