
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import ReportIcon from '@material-ui/icons/Report';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import Home from "../views/home/Home"
import DashboardPage from "../views/dashboard/Dashboard"

import Reports from "../views/reports/Reports"
import UserGuide from "../views/user-guide/UserGuide"

import LogOff from "../views/logoff/LogOff";

const context = "/";
const routes = [
  {
    path: context + "home",
    name: "Home",
    component: Home,
    icon: HomeIcon
  },
  {
    path: context + "dashboard",
    name: "Dashboard",
    component: DashboardPage,
    icon: DashboardIcon
  },  
  {
    path: context + "reports",
    name: "Reports",
    component: Reports,
    icon: ReportIcon
  },
  {
    path: context + "user-guide",
    name: "UserGuide",
    component: UserGuide,
    icon: LibraryBooksIcon
  },
  {
    path: context + "logoff",
    name: "LogOff",
    component: LogOff,
    icon: ExitToAppIcon
  }
];

export default routes;
