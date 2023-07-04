import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, HomeLayout, Landing, Error, Newsletter,Cocktails, SinglePageError } from './pages';

import { loader as landingLoader } from './pages/landingPage';
import { loader as singleCocktailLoader } from './pages/cocktailPage';

import { action as newsletterAction } from './pages/newsletter';

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
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktails />
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction
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
