import MuseumHomePage from './MuseumHomePage/MuseumHomePage.jsx'
import App from './App/App.jsx'

import ErrorPage from "../Error/Error.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "museumHomePage/:museum",
    element: <MuseumHomePage />,
  },
];

export default routes;