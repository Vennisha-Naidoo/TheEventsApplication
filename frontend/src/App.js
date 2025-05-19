import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Events, { loader as eventsLoader } from './Pages/Events';
import EventDetails, { loader as eventDetailLoader } from './Pages/EventDetails';
import NewEvent from './Pages/NewEvent';
import EditEvent from './Pages/EditEvent';
import RootLayout from './Pages/Root';
import EventsRootLayout from './Pages/EventsRoot';
import ErrorPage from './Pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true, 
            element: <Events />, 
            loader: eventsLoader
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { 
                index: true,
                element: <EventDetails />, 
              },
              { path: 'edit', element: <EditEvent /> },
            ],
          },
          { path: 'new', element: <NewEvent /> }
        ]
      },

    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
