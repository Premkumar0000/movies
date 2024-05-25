import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './images/i bomma.png';
import Landing from './Landing';

const App = () => {
  const [route, setRoute] = useState(window.location.pathname);
  const [navbarBackground, setNavbarBackground] = useState('#1F1F1F');

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const renderRoute = () => {
    switch (route) {
      case '/':
        return;
      case '/services':
        return;
      case '/projects':
        return;
      case '/news':
        return;
      case '/contact':
        return;
      default:
        return;
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-light bg"
        style={{
          backgroundColor: navbarBackground,
          maxWidth: '100%',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          borderBottomColor: navbarBackground === '#1F1F1F' ? '#1F1F1F' : '#ffffff',
          border: '5px solid yellow',
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: 'none',
        }}
      >
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: 'yellow', color: 'yellow' }}
        >
          <span className="navbar-toggler-icon" style={{ color: 'yellow' }}></span>
        </button>
        <a className="navbar-brand" href="#" style={{ color: 'Yellow', fontSize: '3em' }}>
          <img src={logo} alt="logo" className="navbar-logo" />
        </a>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className={`nav-link ${route === '/' ? 'active' : ''}`} href="/" style={{ color: navbarBackground === '#1F1F1F' ? 'white' : 'black' }}>
                <i className="fa-solid fa-house" style={{ color: 'yellow', fontSize: '12px', marginRight: '5px' }}></i>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${route === '/services' ? 'active' : ''}`} href="/services" style={{ color: navbarBackground === '#1F1F1F' ? 'white' : 'black' }}>
                <i className="fa-solid fa-info" style={{ color: 'yellow', fontSize: '15px', marginRight: '5px' }}></i>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${route === '/projects' ? 'active' : ''}`} href="/projects" style={{ color: navbarBackground === '#1F1F1F' ? 'white' : 'black' }}>
                <i className="fa-solid fa-bug" style={{ color: 'yellow', fontSize: '12px', marginRight: '5px' }}></i>
                Bug
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" style={{ marginRight: '5%' }}>
            <div className="input-group" style={{ position: 'relative' }}>
              <input
                className="form-control custom-search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid gray',
                  borderRadius: '20px',
                  color: 'silver',
                  height: '5vh',
                  width: '250px',
                  paddingRight: '30px',
                  cursor:'not-allowed'
                }}
                onFocus={(e) => e.target.setAttribute('disabled', 'true')}
              />
              <span
                className="input-group-text"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
              >
                <i className="fa-solid fa-magnifying-glass" style={{ color: 'yellow' }}></i>
              </span>
            </div>
          </form>
        </div>
        <i className="fa-solid fa-share share-icon"></i>
      </nav>
      {renderRoute()}
      <Landing />
    </div>
  );
};

export default App;
