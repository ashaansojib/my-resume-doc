import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Resume from "../pages/resume/Resume";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/about',
                        element: <About></About>
                    },
                    {
                        path: '/resume',
                        element: <Resume></Resume>
                    }
                ]
            }
            
        ]
    }
]);
export default router;