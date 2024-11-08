import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Home from "./app/Home";
import Login from "./app/auth/Login";
import { Outlet } from "react-router-dom";
import About from "./app/about/About";

export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Outlet />,
        children: [
          {
            element: <RootLayout />,
            children: [
              {
                index: true,
                element: <Home />
              },
              {
                path: 'about',
                element: <About />
              }
            ]
          },
          {
            element: <AuthLayout />,
            children: [
              {
                path: "login",
                element: <Login />,
              },
            ],
          },
        ],
      },
    ],
    {
      future: {
        v7_fetcherPersist: true,
      },
    }
  );

  return (
    <RouterProvider 
      router={router} 
      future={{
        v7_startTransition: true,
      }}
    />
  )
}
