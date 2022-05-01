import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Curriculum.css';

export default function Curriculum() {
  // const closeMobileMenu = () => setClick(false);
  const [selected, setSelected] = useState(null);
  
  const componets = [

  ];
  const handleSelect = () => setSelected()
  
  return (
    <>
      <section className="section" id="curriculum">
        <div className="container grid">
          {/* Sidebar Menu */}
          <div className="list">
            <ul id="sidemenu">
              <h2 className="title">Curriculum</h2>
              <p>
                Build your skills as you work through fun,
                progressively challenging courses.
              </p>
              {/* Summary */}
              <li id="fundamentals">
                <a className="subtitle" href="#">Fundamentals</a>
              </li>
              <li id="fundamentals2">
                <a className="subtitle" href="#">Fundamentals II</a>
              </li>
              <li id="interviewing">
                <a className="subtitle" href="#">Intro to Interviewing</a>
              </li>
              <li id="array">
                <a className="subtitle" href="#">Array Methods</a>
              </li>
              <li id="animations">
                <a className="subtitle" href="#">Animations</a>
              </li>
              <li id="animations2">
                <a className="subtitle" href="#">Animations II</a>
              </li>
              <li id="code_editor">
                <a className="subtitle" href="#">Using a Code Editor</a>
              </li>
              <li id="webpages">
                <a className="subtitle" href="#">Intro to Webpages</a>
              </li>
            </ul>
          </div>
          {/* Infocomponets */}
          <div className="meanings" id="all">
            <div id="fundamentals">
              <h2 className="title">Coding Fundamentals I: JavaScript Basics</h2>
              <div className="meaning">
                <p>
                  Learn coding fundamentals, like functions, variables, and much more. 
                  This is a JavaScript course, but the concepts apply to any programming language.
                </p>
              </div>
            </div>
            <div id="fundamentals2">
              <h2 className="title">Coding Fundamentals II: JavaScript Basics</h2>
              <div className="meaning">
                <p>
                Tackle advanced coding fundamentals. Learn string and array manipulation, 
                variable scope, the ternary operator, functions, callbacks and recursion.
                </p>
              </div>
            </div>
            <div id="interviewing">
              <h2 className="title">Intro to Coding Interviews: Algorithm Basics</h2>
              <div className="meaning">
                <p>
                Learn tools used to solve real life problems and technical interview questions.
                At the end of this course, you'll solve a Google interview question.
                </p>
              </div>
            </div>
            <div id="array">
              <h2 className="title">Array Methods</h2>
              <div className="meaning">
                <p>
                Learn about more of JavaScript's built-in tools and shortcuts for working with arrays.
                </p>
              </div>
            </div>
            <div id="animations">
              <h2 className="title">Animations</h2>
              <div className="meaning">
                <p>
                Learn how to use the D3 library to create, alter, and animate Scalable Vector 
                Graphics (SVG).
                </p>
              </div>
            </div>
            <div id="animations2">
              <h2 className="title">Animations II</h2>
              <div className="meaning">
                <p>
                Learn how to use your JavaScript skills to create more advanced, complex animations.
                </p>
              </div>
            </div>
            <div id="code_editor">
              <h2 className="title">How to Use a Code Editor</h2>
              <div className="meaning">
                <p>
                Learn how to use a code editor and begin typing code on your own.
                </p>
              </div>
            </div>
            <div id="webpages">
              <h2 className="title">Intro to Webpages</h2>
              <div className="meaning">
                <p>
                Learn the fundamentals of HTML and CSS. Discover how HTML and CSS are used with 
                JavaScript to create a webpage.                
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}