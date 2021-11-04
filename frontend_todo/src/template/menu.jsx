import React from 'react';

const Menu = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <div className="navbar-header">
        <a href="#/todos" className="navbar-brand">
          <i className="fa fa-calendar-check-o"></i> TodoApp
        </a>
      </div>

      <div id="navbarNav" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#/todos">
              Tarefas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#/about">
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Menu;
