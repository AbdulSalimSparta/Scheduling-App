import React from "react";

function CardResource(props) {

    return (<>
        <div className="article-card"  onClick={props.onClicked}>
          <div className="content">
            <p className="cardname">{props.location}</p>
            <p className="cardtitle">{props.cardtitle}</p>
          </div>
          <img src={props.imgsrc} alt="article-cover" />
        </div></> );
}

export default CardResource;