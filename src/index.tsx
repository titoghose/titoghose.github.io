import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from 'theme/Theme';

import { App } from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>,
);
