
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import './index.css'
import App from './App';
import Home from './pages/home/Home';
import Products from './components/Products';
import SingleProduct from './pages/home/SinglrProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<Products/>
      },
      {
        path:"/shop/:id",
        element: <SingleProduct/>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
  
)
