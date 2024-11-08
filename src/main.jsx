import { StrictMode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { createRoot } from 'react-dom/client';
import ErrorFallback from './components/boundary/ErrorFallback';
import App from './App';

import './globals.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>  
        <ErrorBoundary fallback={ErrorFallback}>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </ErrorBoundary>
    </StrictMode>
);
