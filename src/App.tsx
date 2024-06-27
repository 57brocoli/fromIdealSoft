import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueille from './Page/Accueil.js'
import PageError from "./Page/PageError.js";
import Presentation from "./Page/Presentation.js";
import Description from "./Composants/Description.js";
import './Assets/Styles/style.css'

function App() {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Accueille/>,
            errorElement: <PageError/>
        },
        {
            path:'/Presentation',
            element: <Presentation/>,
            errorElement: <PageError/>,
            children:[
                {
                    path : '',
                    element: <Description/>
                },
                {
                    path : 'user/:name/:id',
                    element: <Description/>
                },
            ]
        }
    ])
    
  return (
    <RouterProvider router={router}/>
  )
}

export default App
