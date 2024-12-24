import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/welcome-page';
import HomePage from './pages/homePage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/welcome',
      element: <WelcomePage />,
    }
    ,{
      path: '*',
      element: <HomePage />,
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  }
);

function App() {
  return (
    <RouterProvider 
    router={router}
    future={{
      v7_startTransition: true
    }}
    />
  );
}

export default App;