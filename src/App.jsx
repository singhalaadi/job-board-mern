import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HomeLayout, Landing} from './pages';

const router = createBrowserRouter([
  {
    'path': '/',
    'element': <HomeLayout />,
  },
  {
    'path': '/About',
    'element': <Landing />
  }
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
