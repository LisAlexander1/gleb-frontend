import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router';
import MainPage from './pages/main.page.tsx';
import './global.scss'
import SpecialistListPage from './pages/specialist-list.page.tsx';
import ServicesPage from './pages/services/services.page.tsx';
import About from './pages/about/about.tsx';
import SpecialistPage from './pages/specialist/specialist.page.tsx';
import ErrorBoundary from './pages/error-boundary/error-boundary.page.tsx';


const router = createBrowserRouter([
    {
        errorElement: <ErrorBoundary/>,
        children: [
            {
                path: "/",
                element: <MainPage/>,
            },
            {
                path: "/specialists",
                element: <SpecialistListPage/>,
            },
            {
                path: "/services",
                element: <ServicesPage/>,
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/specialist/:slug",
                element: <SpecialistPage/>,
            },
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
