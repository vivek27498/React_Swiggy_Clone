import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
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
            path: "/contact-us",
            element: <Contact />,
        },
        {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />,
        }
    ],
    errorElement: <Error />,
  },
]);

export default App;
