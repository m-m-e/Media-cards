import React from 'react';
import '../stylesheets/App.scss';

const MediaCard = props => {
  const { name, date, image, description, likes, heartFill } = props;
  const heart = heartFill ? <i className="fas fa-heart card__footer-image" /> :  <i className="far fa-heart card__footer-image"/>;

  const cardHeader = (
  <div className="card__header">
    <img className="card__header-image" src={image} alt="author"></img>
    <div className="card__header-text">
      <h2 className="author">{name}</h2>
      <h3 className="date">{date}</h3>
    </div>
  </div>
  );

  const mainText = (
    <p className="main-text">{description}</p>
  );

  const cardFooter = (
    <footer className="card__footer">
      <a href="#readmore" className="footer-link">Leer más...</a>
      <div className="likes-box">
        <p className="likes-number">{likes}</p>
        {heart}
      </div>
    </footer>
  );

  const card = (
    <div className="card">
      {cardHeader}
      {mainText}
      {cardFooter}
    </div>
  );

  const appContent = (<div className="App">{card}</div>);

  return appContent;
};

export default MediaCard;