import React from "react";
import App from './src/App';


import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);
