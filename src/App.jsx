import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, HomeLayout, Landing, Error, Newsletter,Cocktails, SinglePageError } from './pages';

import { loader as landingLoader, loader } from './pages/landingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element:  <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />
      },
      {
        path: 'cocktails/:id',
        element: <Cocktails />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    path: '/about',
    element:  <About/>
  },
])
const App = () => {
  return <RouterProvider router={router} />
};
export default App;
