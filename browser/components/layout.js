import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {

    render() {
        return (
            <div className="clearfix">
                <nav className="navbar navbar-white navbar-fixed-top">
              <div className="container p-y-1">
                <div className="navbar-header">
                  <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar"
                        aria-expanded="false"
                        aria-controls="navbar"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                  </button>
                  <p className="navbar-brand title">
                    <Link to="/"><img src="../public/img/brunch_logo.png"></img></Link>
                  </p>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="right-block"></div>
            <div className="right-block-thick"></div>
            <div className="container-me">
              {this.props.children}
            </div>
          </div>
        );
    }
}
