import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colors: {
                    'pinteGreen': ['#689A9B','#76A3A4', '#84ACAD', '#92B5B6', '#A0BEBF', '#AEC7C8', '#BCD0D1', '#CAD9DA', '#D8E2E3', '#E5E9EB'],

                },
                primaryColor: 'pinteGreen'
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>
);
