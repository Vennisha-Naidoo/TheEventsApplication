import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: 'event1',
        title: 'Image Gallery Showing'
    },
    {
        id: 'event2',
        title: 'Art Gallery Showing'
    }
];

function Events() {
    return <>
    <h1>Events Page</h1>
    <ul>
        {
            DUMMY_EVENTS.map(event => <li key={ event.id }>  
                <Link to={ event.id }> { event.title } </Link>
            </li>)
        }
    </ul>
    </>
}

export default Events;