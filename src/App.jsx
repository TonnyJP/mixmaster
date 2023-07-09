import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, HomeLayout, Landing, Error, Newsletter,Cocktails, SinglePageError } from './pages';

import { loader as landingLoader } from './pages/landingPage';
import { loader as singleCocktailLoader } from './pages/cocktailPage';

import { action as newsletterAction } from './pages/newsletter';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 1000 * 60 * 5
    }
  }
});
const router = createBrowserRouter([
  {
    path: '/',
    element:  <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />
      },
      {
        path: 'cocktails/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
};
export default App;
