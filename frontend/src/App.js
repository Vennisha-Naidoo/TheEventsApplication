import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Events from './Pages/Events';
import EventDetails from './Pages/EventDetails';
import NewEvent from './Pages/NewEvent';
import EditEvent from './Pages/EditEvent';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/events', element: <Events /> },
  { path: '/events/:eventId', element: <EventDetails /> },
  { path: '/events/new', element: <NewEvent /> },
  { path: '/events/:eventId/edit', element: <EditEvent /> },
  
]);

function App() {
  return <RouterProvider router={ router } />;
}

export default App;
