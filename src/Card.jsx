import React from 'react';
import './index.css';

const cardStyle = {
    'width': '40rem',
    'display': 'inline-block',
    'border-radius': '60rem',
    'margin': '10px'
}
function Card(props) {
    return (
        <>

            <div className="card" style={cardStyle}>
                <div class="embed-responsive embed-responsive-16by9">
                    <img className="card-img-top embed-responsive-item" src={props.imgSrc} alt="Card image cap" />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{props.imgTitle}</h5>
                    <p class="card-text">{props.desc}</p>
                    <a href={props.link} class="btn btn-primary" target='blank'>Watch Now</a>
                </div>
            </div>

        </>
    );
}

export default Card; 