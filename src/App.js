import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import ResturantMenu from "./components/ResturantMenu";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utlis/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // make an api call to fetch username and password
    const data = {
      name: "Prateek Shukla",
    };
    setUserName(data.name);
  });

  return (
    <UserContext.Provider value={{ loggedInInfo: userName, setUserName }}>
      <div className="app-layout">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturantmenu/:resid",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
