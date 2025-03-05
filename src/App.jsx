import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Home from "./app/Home";
import Login from "./app/auth/Login";
import { Outlet } from "react-router-dom";
import AboutUs from "./app/about-us/AboutUs";
import ContactUs from "./app/contact-us/ContactUs";
import Gallery from "./app/gallery/Gallery";
import Categories from "./app/categories/Categories";

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
                path: 'contact-us',
                element: <ContactUs />
              },
              {
                path: 'about-us',
                element: <AboutUs />
              },
              {
                path: 'gallery',
                element: <Gallery />
              },
              {
                path: 'categories',
                element: <Categories />
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
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true,
      },
    }
  );

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  )
}
