import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import Service from './Services';
import Banner from './Banner';
import Home from './Home';
import About from './About';
import Anime from './Anime';
import Error from './ErrorPage';
import Annimax from './Annimax';



const routes=createBrowserRouter([
    {path:'/', element:<MainLayout/>,
        errorElement:<Error/>,
        children:[
            {path:'/Banner', element: <Banner/>},
            {path:'/Services', element: <Service/>},
            {path:'/Home', element: <Home/>},
            {path:'/Anime', element: <Anime/>},
            {path:'/About', element: <About/>},
            {path:'/Annimax', element: <Annimax/>},
        ]
    }
]);


export default function Router(){
    return <RouterProvider router={routes}/>
}