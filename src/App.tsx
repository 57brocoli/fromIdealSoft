import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueille from './Page/Accueil.js'
import PageError from "./Page/PageError.js";
import Presentation from "./Page/Presentation.js";
import Description from "./Composants/Description.js";
import './Assets/Styles/style.css'
import axios from "axios";
import DescriptionArtiste from "./Composants/DescriptionArtiste.js";

function App() {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Accueille/>,
            errorElement: <PageError/>,
        },
        {
            path:'/Presentation',
            element: <Presentation/>,
            errorElement: <PageError/>,
            loader: () => 
                axios
                  .get('https://api.github.com/users')
                  .then(res => res.data)
                  .catch(er => {
                    return {
                        error: er,
                    }
                  }),
            children:[
                {
                    path : '',
                    element: <Description/>
                },
                {
                    path: 'user/:name/:id',
                    element: <Description />,
                },
                {
                    path: 'artiste/:id',
                    element: <DescriptionArtiste />,
                },
            ]
        }
    ])
    
  return (
    <RouterProvider router={router}/>
  )
}

export default App
