import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import SignIn from "../screens/signin";
import SignUp from "../screens/signup";
import Dashboard from "../screens/dashboard";
import Detail from "../screens/detail";
import AddProducts from "../screens/addproduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
    },
{
    path: 'product/:id',
    element: <Detail />
},    
    {
      path: "signin",
      element: <SignIn />
    },    
    {
      path: "signup",
      element: <SignUp />
    },
    {
      path: "addproduct",
      element: <AddProducts />
    },
  ]);


export default function Router () {
    return <RouterProvider router={router} />
}