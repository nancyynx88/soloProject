import React from "react";
// import ReactDom from "react-dom";
import App from './src/App';

// ReactDom.render(<App />, document.getElementById("root"));

import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);
