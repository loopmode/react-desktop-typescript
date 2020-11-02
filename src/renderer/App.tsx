import electron from 'electron';
import React from 'react';
import cx from 'classnames';
import { hot } from 'react-hot-loader/root';

import css from './App.scss';
import { getStatic } from './utils/static';

function App() {
  return (
    <div className={cx(css.App, 'empty')}>
      <div className="empty-action">
        <img
          className="logo"
          src={getStatic('images/electron.png')}
          alt="electron"
        />
      </div>

      <h5 className="empty-title">
        Welcome to your new electron-webpack react project!
      </h5>

      <div className="empty-action">
        <button
          className="btn btn-primary"
          onClick={() =>
            electron.shell.openExternal('https://webpack.electron.build')
          }
        >
          Documentation
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            electron.shell.openExternal('https://electron.atom.io/docs/')
          }
        >
          Electron
        </button>
        <br />
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            electron-webpack v{require('electron-webpack/package.json').version}
          </li>
          <li className="breadcrumb-item">
            electron v{require('electron/package.json').version}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default hot(App);
