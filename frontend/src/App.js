import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Events from './Pages/Events';
import EventDetails from './Pages/EventDetails';
import NewEvent from './Pages/NewEvent';
import EditEvent from './Pages/EditEvent';
import RootLayout from './Pages/Root';
import EventsRootLayout from './Pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true, element: <Events />, loader: async () => {
              const response = await fetch('http://localhost:8080/events');

              if (!response.ok) {
                //...
              } else {
                const resData = await response.json();
                return resData.events;
              }
            }
          },
          { path: ':eventId', element: <EventDetails /> },
          { path: 'new', element: <NewEvent /> },
          { path: ':eventId/edit', element: <EditEvent /> }
        ]
      },

    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
