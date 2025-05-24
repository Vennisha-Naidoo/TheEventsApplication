import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Events, { loader as eventsLoader } from './Pages/Events';
import EventDetails, { loader as eventDetailLoader, action as deleteEventAction } from './Pages/EventDetails';
import NewEvent from './Pages/NewEvent';
import EditEvent from './Pages/EditEvent';
import RootLayout from './Pages/Root';
import EventsRootLayout from './Pages/EventsRoot';
import ErrorPage from './Pages/Error';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './Pages/Newsletter';

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
                action: deleteEventAction
              },
              { path: 'edit', element: <EditEvent />, action: manipulateEventAction },
            ],
          },
          { path: 'new', element: <NewEvent />, action: manipulateEventAction }
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
