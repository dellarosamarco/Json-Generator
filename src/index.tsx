import React from 'react';
import ReactDOM from 'react-dom/client';
import Editor from './Editor/Editor';
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Editor></Editor>
);
