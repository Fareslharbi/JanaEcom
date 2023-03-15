import React, { useEffect, useRef } from 'react';
import './../asideBar/AsideBar.css';
import logo from '../../assets/logo.png';
import { cities, sections, names } from './../asideBar/mapping';

const Kashkol = () => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      const sectionClassElement = document.querySelector('.section-class');
      sectionClassElement.classList.toggle('visible');
    };

    const toggleButton = toggleButtonRef.current;
    toggleButton.addEventListener('click', handleClick);

    return () => {
      toggleButton.removeEventListener('click', handleClick);
    };
  });

  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
      <aside>
        <div className="top">
          <div className="logo">
            <img src={logo} alt="" />
            <h2>Jana<span className="danger">Company</span></h2>
          </div>
          <div className="close" id="close-btn">
            <span className="material-icons-sharp">close</span>
          </div>
        </div>
        <div className="sidebar">
          {cities.map(({ id: cityId, city }) => (
            <ul key={cityId}>
              <li>
                <button ref={toggleButtonRef}>{city}</button>
                <ul>
                  {sections.map(({ id: sectionId, department }) => (
                    <li key={sectionId} className="section-class">
                      <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">{department}</a>
                      <ul>
                        {names.map(({ id: nameId, name }) => (
                          <li key={nameId}>
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">{name}</a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Kashkol;

