import MuseumHomePage from './MuseumHomePage/MuseumHomePage.jsx'
import App from './App/App.jsx'
import UserInfoForm from './UserInfoForm/UserInfoForm.jsx';
import ErrorPage from "../Error/Error.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/museumHomePage/:museumNumber",
    element: <MuseumHomePage />,
  },
  {
    path: "/userInfoForm",
    element: <UserInfoForm />
  }
];

export default routes;