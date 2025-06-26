import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {action as registerAction} from './pages/pages_actions/registerAction';
import { action as loginAction } from './pages/pages_actions/loginAction';
import {action as addJobAction} from './pages/pages_actions/addJobAction';
import { loader as dashboardLoader } from './pages/dashboardLoader';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  AllJobs,
  Profile,
  Admin,
  Stats,
} from "./pages";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};
const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          { path: "stats", element: <Stats /> },
          {
            path: "all-jobs",
            element: <AllJobs />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      }
    ]
  }
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
