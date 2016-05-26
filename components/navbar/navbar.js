import React, { Component } from 'react'
import { Link } from 'react-router'

class CyclopsNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<nav className="navbar navbar-static-top nav-cyclops">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed open" aria-expanded="true">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="http://assets.ctl.io/cyclops/1.4.0/">
            <span className="sr-only">link to homepage</span>
            <svg className="cyclops-icon" version="1.1" baseProfile="tiny" id="Layer_1" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200" aria-hidden="true">
            <g>
              <circle fill="#00853F" cx="100" cy="100" r="100"></circle>
              <circle fill="#FFFFFF" cx="100" cy="100" r="80"></circle>
              <circle fill="#8CC63F" cx="100" cy="100" r="50"></circle>
              <circle cx="100" cy="100" r="20"></circle>
              <circle fill="#FFFFFF" cx="109.7" cy="90.1" r="6"></circle>
            </g>
          </svg>
        </a>
      </div>
  
      <div className="collapse navbar-collapse" aria-expanded="true">
        <ul className="nav navbar-nav">
          <li><Link to="/">Get Started</Link></li>
          <li><Link to="grid">Patterns</Link></li>
          <li><Link to="dependencies">Code</Link></li>
          <li><Link to="pages">Pages</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="faq">FAQ</Link></li>
          <li><a href="https://www.github.com/CenturyLinkCloud/Cyclops/"><svg className="cyclops-icon" aria-hidden="true"><use xlinkHref="http://www.w3.org/1999/xlink" xlinkHref="#icon-github"></use></svg> <div className="sr-only">github repository</div></a></li>
        </ul>
        <div className="navbar-cl-logo">
          <svg version="1.1" baseProfile="tiny" id="new" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 215.4 43.4" >
            <g>
            <g>
              <g>
                <g>
                  <path fill="#8DC63F" d="M9.8,33.6c1.4,1.9,3,3.6,5,5l6.8-11.8L9.8,33.6"></path>
                  <path fill="#8DC63F" d="M14.8,4.9c-1.9,1.4-3.6,3-5,5l11.8,6.8L14.8,4.9"></path>
                  <path fill="#8DC63F" d="M35.3,3.1c-2.1-1-4.4-1.6-6.8-1.8v13.6L35.3,3.1"></path>
                  <path fill="#8DC63F" d="M18,40.4c2.1,1,4.4,1.6,6.8,1.8V28.6L18,40.4"></path>
                  <path fill="#8DC63F" d="M43.4,9.9c-1.4-1.9-3-3.6-5-5l-6.8,11.8L43.4,9.9"></path>
                  <path fill="#8DC63F" d="M38.5,38.5c1.9-1.4,3.6-3,5-5l-11.8-6.8L38.5,38.5"></path>
                </g>
                <g>
                  <path fill="#007F3E" d="M47.1,19.9c-0.2-2.4-0.8-4.7-1.8-6.8l-11.8,6.8H47.1"></path>
                  <path fill="#007F3E" d="M6.1,23.6C6.4,26,7,28.3,8,30.4l11.8-6.8H6.1"></path>
                  <path fill="#007F3E" d="M8,13.1c-1,2.1-1.6,4.4-1.8,6.8h13.6L8,13.1"></path>
                  <path fill="#007F3E" d="M33.5,23.6l11.8,6.8c1-2.1,1.6-4.4,1.8-6.8H33.5"></path>
                  <path fill="#007F3E" d="M24.8,1.2c-2.4,0.2-4.7,0.8-6.8,1.8l6.8,11.8V1.2"></path>
                  <path fill="#007F3E" d="M28.5,42.2c2.4-0.2,4.7-0.8,6.8-1.8l-6.8-11.8V42.2"></path>
                </g>
              </g>
              <g>
                <path fill="#007F3E" d="M42.2,3.7c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5
                C43.3,6.2,42.2,5.1,42.2,3.7z M46.7,3.7c0-1.2-0.9-2.1-2.1-2.1c-1.2,0-2.1,0.9-2.1,2.1c0,1.2,0.9,2.1,2.1,2.1
                C45.8,5.8,46.7,4.9,46.7,3.7z M44.1,5.1h-0.4V2.3h1.2c0.7,0,1,0.3,1,0.8c0,0.5-0.4,0.8-0.9,0.8l0.8,1.3h-0.4l-0.8-1.3h-0.6V5.1z
                M44.6,3.5c0.4,0,0.9,0.1,0.9-0.5c0-0.4-0.3-0.4-0.7-0.4h-0.8v0.9H44.6z"></path>
              </g>
            </g>
            <g>
              <g>
                <g>
                  <path fill="#000000" d="M70.7,17.1c-0.1-1.8-2.1-3-4-3c-4.7,0-5.5,4.3-5.5,7.6c0,3.9,1.2,7.6,5.3,7.6c2,0,3.8-1,4.2-3h2.7
                  c-0.3,3.2-3.5,5.2-7.1,5.2c-5.6,0-7.8-4.5-7.8-9.8c0-4.6,2-10,8.4-9.8c3.6,0.1,6.4,1.9,6.6,5.3H70.7"></path>
                  <path fill="#000000" d="M78,25.1c-0.2,2.3,0.8,4.7,3.3,4.7c1.9,0,2.9-0.8,3.2-2.7h2.6c-0.4,3-2.7,4.5-5.8,4.5
                  c-4.2,0-5.9-3-5.9-6.8c0-3.8,1.9-7.1,6.1-7.1c3.9,0.1,5.8,2.6,5.8,6.2v1.2H78 M84.6,23.3c0.1-2.2-0.9-3.9-3.3-3.9
                  c-2.1,0-3.3,1.8-3.3,3.9H84.6z"></path>
                  <path fill="#000000" d="M92.2,20L92.2,20c0.9-1.6,2.7-2.3,4-2.3c0.9,0,5,0.2,5,4.4v9.1h-2.5v-8.3c0-2.2-0.9-3.3-3-3.3
                  c0,0-1.4-0.1-2.4,1c-0.4,0.4-1,0.9-1,3.5v7.1h-2.5V18h2.4V20"></path>
                  <path fill="#000000" d="M105.1,18v-2.8l2.5-0.8V18h3v1.8h-3v8.4c0,0.9,0.7,1.4,1.6,1.4c0.4,0,0.9-0.1,1.3-0.2v1.9
                  c-0.6,0-1.1,0.2-1.7,0.2c-0.6,0-1.1,0-1.7-0.1c-0.4-0.1-1.1-0.3-1.5-0.9c-0.4-0.6-0.6-0.7-0.6-2.4v-8.3h-2.2V18H105.1"></path>
                  <path fill="#000000" d="M121.6,18h2.5v13.1h-2.4v-1.9h-0.1c-1,1.6-2.7,2.3-4.5,2.3c-2.7,0-4.3-2.1-4.3-4.7V18h2.5v7.8
                  c0,2.3,0.5,3.9,2.9,3.9c1,0,2.4-0.5,2.9-1.9c0.5-1.2,0.5-2.8,0.5-3.1V18"></path>
                  <path fill="#000000" d="M129.8,31.2h-2.5V18h2.5v2.5h0.1c0.4-1.8,2-2.7,3.8-2.7c0.3,0,0.6,0,0.9,0v2.4c-0.3-0.1-0.7-0.1-1.1-0.1
                  c-3.1,0.1-3.7,1.8-3.7,4.5V31.2"></path>
                  <polyline fill="#000000" points="141.9,36.2 139.4,36.2 141.4,31.1 135.9,18 138.7,18 142.8,28.4 147,18 149.7,18 141.9,36.2
                  "></polyline>
                </g>
                <g>
                  <polyline fill="#000000" points="151.5,31.2 151.5,12.3 155.6,12.3 155.6,28 163.8,28 163.8,31.2 151.5,31.2         "></polyline>
                  <path fill="#000000" d="M166.1,12.3h4.2v3.4h-4.2V12.3z M166.2,18h3.9v13.1h-3.9V18z"></path>
                  <path fill="#000000" d="M177.8,19.6L177.8,19.6c0.9-1.1,2.1-1.9,4.1-1.9c1.3,0,3.8,1,4.3,2.9c0.2,0.8,0.3,1.6,0.3,2.1v8.5h-3.9
                  v-7.9c0-1.4-0.4-3-2.4-3c-1.2,0-2.3,1.1-2.4,3v7.9h-3.9V18h3.9V19.6"></path>
                  <polyline fill="#000000" points="194.2,23.3 194.2,23.4 198.1,17.9 202.4,17.9 197.9,23.6 202.7,31.2 198.2,31.2 194.2,24
                  194.2,24 194.2,31.2 190.2,31.2 190.2,12.3 194.2,12.3 194.2,23.3         "></polyline>
                </g>
              </g>
              <g>
                <path fill="#000000" d="M204.3,20.4c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5
                C205.4,22.8,204.3,21.7,204.3,20.4z M208.8,20.4c0-1.2-0.9-2.1-2.1-2.1c-1.2,0-2.1,0.9-2.1,2.1c0,1.2,0.9,2.1,2.1,2.1
                C208,22.4,208.8,21.6,208.8,20.4z M206.2,21.8h-0.4v-2.8h1.2c0.7,0,1,0.3,1,0.8c0,0.5-0.4,0.8-0.9,0.8l0.8,1.3h-0.4l-0.8-1.3
                h-0.6V21.8z M206.7,20.2c0.4,0,0.9,0.1,0.9-0.5c0-0.4-0.3-0.4-0.7-0.4h-0.8v0.9H206.7z"></path>
              </g>
            </g>
          </g>
          </svg>
        </div>
    </div>
  </div>
  </nav>
    )
  }
}

export default CyclopsNavbar