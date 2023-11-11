import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./RouterComponents/Layout.jsx";
import Home from "./RouterComponents/Home.jsx";
import About from "./RouterComponents/About.jsx";
import Contact from "./RouterComponents/Contact.jsx";
import User from "./RouterComponents/User.jsx";
import NotFound from "./RouterComponents/NotFound.jsx";
import Github from "./RouterComponents/Github.jsx";
import { gitHubInfo } from "./RouterComponents/Github.jsx";
// import Users from './RouterComponents/Users.jsx';

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,

//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//        path : "users/",
//        element :<User/>,
//        children: [
//            {
//                path: ':userId',
//                element : <User/>
//            }
//         ]
//       },
//       {
//        path:"*",
//        element : <NotFound />
//       }
//     ]
//   }
// ])
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="users/" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>
      <Route 
      loader={gitHubInfo}
      path="github" element={<Github />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={routes} /> */}
    <App/>
  </React.StrictMode>
);
