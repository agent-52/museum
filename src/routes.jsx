import {MuseumHomePage} from './MuseumHomePage/MuseumHomePage.jsx'
import App from './App/App.jsx'
import UserInfoForm from './UserInfoForm/UserInfoForm.jsx';
import ErrorPage from "../Error/Error.jsx";
import ChatBotConnect from './chatBotConnect/ChatBotConnect.jsx';
import { TicketForm } from './TicketForm/TicketForm.jsx';
import SuccessPage from './SuccessPage/SuccessPage.jsx';
import DualityPage from './dualityPage/dualityPage.jsx';

const routes = [
  {
    path: "/",
    element: <DualityPage />
  },
  {
    path: "/app",
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
  },
  {
    path: "/botConnect",
    element: <ChatBotConnect />
  },
  {
    path:"/ticketForm",
    element:<TicketForm />
  },
  {
    path:"/successPage",
    element:<SuccessPage />
  }
];

export default routes;