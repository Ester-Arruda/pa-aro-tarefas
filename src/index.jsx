import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-simple-toasts/dist/theme/dark.css';
import { toastConfig } from 'react-simple-toasts';
import './index.css';
import { configure } from 'axios-hooks';
import { axios } from './axios';
import App from './App';

toastConfig({ theme: 'dark' });

configure({ axios });

ReactDOM.createRoot(document.getElementById('root')).render(
	<App />
);