import React from 'react';
import photo from './images/unicorn.jpg';
import './stylesheets/App.scss';

class App extends React.Component {
  render() {
    const cardHeader = (
    <div className="card__header">
      <img className="card__header-image" src={photo} alt="author"></img>
      <div className="card__header-text">
        <h2 className="author">Megan Edwards</h2>
        <h3 className="date">Lunes 6 de mayo 2019</h3>
      </div>
    </div>
    );

    const mainText = (
      <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo atque error praesentium aliquam consectetur cum illum vel expedita et. Soluta recusandae minus autem atque similique? Ab commodi incidunt repellendus?</p>
    );

    const cardFooter = (
      <footer className="card__footer">
        <a href="#readmore" className="footer-link">Leer más...</a>
        <div className="likes-box">
          <p className="likes-number">100</p>
          <i className="fas fa-heart card__footer-image"></i>
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
  }
}

export default App;
