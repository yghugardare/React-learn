# React router Dom
- As react is a single page application, we need a way to navgate from one page to another
this can be done using react royter dom.
- React Router facilitates "client side routing," allowing apps to update the URL without making a new server request when a link is clicked.
- Traditional websites require a new server request for each page, involving document download and asset evaluation, while client side routing streamlines this process.
- With client side routing, apps can swiftly update UI and fetch data upon link clicks, leading to faster user experiences compared to traditional approaches.

## Installation 
```bash
npm install react-router-dom 
```

## `createBrowerRouter` and `RouterProvider`
- `createBrowerRouter` - This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack. **It returns a router object**
- `RouterProvider` - All data router objects are passed to this component to render your app and enable the rest of the data APIs.It acts as a wrapper for your routes.
```javascript
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
   {
     path: '/',
     element: <Layout/>,
     children: [
       {
         path: "",
         element: <Home />
       },
       {
         path: "about",
         element: <About />
       },
       {
         path: "contact",
         element: <Contact />
       },
       {
        path : "users/",
        element :<User/>,
        children: [
            {
                path: ':userid',
                element : <User />
            }
         ]
       },
       {
        path:"*",
        element : <NotFound />
       }
     ]
   }
 ])
```
## `createRoutesFromElements`-
- `createRoutesFromElements` is a helper that creates route objects from <Route> elements. It's useful if you prefer to create your routes as JSX instead of objects.
### what is <Route> element?
- The <Route> element in React is used to render certain components based on the current URL. This allows developers to create single-page applications (SPAs) with navigation between different views.
```javascript
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="users/" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>
      <Route path="github" element={<Github />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
```
## `<Outlet/>`
- react rouder dom component used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. 
- If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
```javascript
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className=' bg-black text-white w-full h-screen'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
export default Layout
```
## `useRouteError`
-  `useRouteError` provides the error that was thrown. When the user navigates to routes that don't exist you'll get an error response with a "Not Found" statusText
- we can create an Error component
`import { useRouteError } from "react-router-dom";`
```javascript

import { useRouteError } from 'react-router-dom'

function NotFound() {
    const error = useRouteError();
  return (
    <div 
    className=" bg-red-400 tex-black text-center text-xl h-[50%] w-full">
    OOPS!
    <p
    className=' bg-red-800 text-center my-4'
    >Error Message-  {error.message} || Error Status- {error.statusText} </p>
    </div>
  )
}
export default NotFound
```
- then import it by add it either as `errorElement` after `element:<Layout/>`
- other way is just to add it as another path inside children at the end, `{
       path:"*",
       element : <NotFound />
      }`, the only probleme is that the error.status and other wont be evaluated here
      
## `<Link/>` and `<NavLink/>`
- A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. Faster than anchor tag as it does not reload the entire web page.
- `<Link to={user.id}>{user.name}</Link>`
- A <NavLink> is a special kind of <Link> that knows whether or not it is "active", "pending", or "transitioning". 
```javascript
import { NavLink } from "react-router-dom";
<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>;
```
- Another example for tailwind css
```javascript
<NavLink
  to="about"
  className={({ isActive }) =>
    `${style} ${isActive ? " bg-indigo-800" : "bg-orange-600"}`
  }
>
  About
</NavLink>
```

## useParam
- react router hook that returns an object of key/value pairs of the dynamic params from the current URL that were matched by the Route Path
 
```javascript
import React from "react";
import { Link, useParams } from "react-router-dom";

function User() {
  let { userId } = useParams();
  return (
    <div className="bg-indigo-600 text-center text-xl h-[50%] w-full ">
      {userId ? userId : "Just"} User
      {userId ? (
        <Link className="mx-auto p-2 bg-slate-700 hover:bg-slate-500 cursor-pointer w-36 my-2 block">
          Go to Users
        </Link>
      ) : (
        <div>
          <Link
            to="Hitesh"
            className="mx-auto p-2 bg-slate-700 hover:bg-slate-500 cursor-pointer w-36 my-2 block"
          >
            Hitesh
          </Link>
          <Link
            to="yash"
            className="mx-auto p-2 bg-slate-700 hover:bg-slate-500 cursor-pointer w-36 my-2 block"
          >
            Yash
          </Link>
          <Link
            to="Sam"
            className="mx-auto p-2 bg-slate-700 hover:bg-slate-500 cursor-pointer w-36 my-2 block"
          >
            Sam
          </Link>
        </div>
      )}
    </div>
  );
}

export default User;
```

## `loader` and `useLoaderData()`
- Each route can define a "loader" function to provide data to the route element before it renders.
```javascript
<Route 
      loader={gitHubInfo}
      path="github" element={<Github />} />
```
- useLoaderData() - This hook provides the value returned from your route loader. 
In Github componenet, 
```javascript
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    let data = useLoaderData();
    // const [data,setData] = useState({});
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/yghugardare')
    // .then(res => res.json())
    // .then(data => setData(data))
    // },[])
  return (
    <div className=" bg-purple-900  p-2 text-xl h-[50%] w-full grid place-content-center">
      <img src={data?.avatar_url}
      className='w-[250px] rounded-lg mx-auto'
      alt="" />
      <h1 className=' text-2xl my-2'>{data.name} - <span className='text-bold'>{data?.bio}</span></h1>
      <p>Followers {data.followers}</p>
    </div>
  )
}

export default Github

export const gitHubInfo = async()=>{
    let response  = await fetch(`https://api.github.com/users/yghugardare`);
    return response.json();
}
```
