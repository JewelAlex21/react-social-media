import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Navbar from "./components/navbar/NavBar"
import RightBar from "./components/rightbar/RightBar"
import LeftBar from "./components/leftbar/LeftBar"
import {createBrowserRouter, RouterProvider, Navigate, Outlet} from "react-router-dom"

function App() {

  const currentUser = true;

  const Layout = ()=>{
    return(
      <div>
        <Navbar/>
        <div style={{display:"flex"}}>
        <LeftBar/>
        <Outlet/>
        <RightBar/>
        </div>
      </div>
    );
  };
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: 
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>,
      children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/profile/:id",
        element:<Profile/>
      },
    ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
  ]);

  return (
    <div className="App">
     <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
