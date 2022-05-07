import './Curriculum.css';
import React, { useState } from 'react';
import InfoContent from './InfoContent/InfoContent';

export default function Curriculum() {

  const [item, setItem] = useState('fundamentals');


  const SideMenu = () => {

    const SUMMARY = 
    [
      {index: 0, id:'fund1', name:'fundamentals', title:'Fundamentals'},
      {index: 1, id:'fund2', name:'fundamentals2', title:'Fundamentals II'},
      {index: 2, id:'interview', name:'interviewing', title:'Interview'},
      {index: 3, id:'array', name:'array', title:'Array Methods'},
      {index: 4, id:'anima1', name:'animations', title:'Animations'},
      {index: 5, id:'anima2', name:'animations2', title:'Animations II'},
      {index: 7, id:'editor', name:'code_editor', title:'Code Editor'},
      {index: 8, id:'web', name:'webpages', title:'Webpages'}
    ];
    return(
      <div className="list">
        <ul id="sidemenu">
          <div>
            <h2 className="title">Curriculum</h2>
              <p>
                Build your skills as you work through fun,
                progressively challenging courses.
              </p>
          </div>
          {SUMMARY.map((item, index) => {
            return(
              <li key={item.index} id={item.id} onClick={
                () => handleSelect(item.name)}>
                  <a className="subtitle" href="#">
                    {item.title}
                  </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const handleSelect = (item) => {
    // console.log(item);
    setItem(item);
  }
  
  return (
    <>
      <section className="section" id="curriculum">
        <div className="container grid">
          {/* Sidebar Menu */}
          {SideMenu()}
          {/* Infocomponets */}
          <InfoContent itemSelected={item} />
        </div>
      </section>
    </>
  );
}