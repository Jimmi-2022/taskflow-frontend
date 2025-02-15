import ActivityPage from "../pages/Activity/ActivityPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import HomePage from "../pages/Home/HomePage";
import MessagesPage from "../pages/Messages/MessagesPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import SchedulePage from "../pages/Schedule/SchedulePage";
import TasksPage from "../pages/Tasks/TasksPage";
import TeamPage from "../pages/Team/TeamPage";

const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/messages",
    element: <MessagesPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/tasks",
    element: <TasksPage />,
  },
  {
    path: "/schedule",
    element: <SchedulePage />,
  },
  {
    path: "/activity",
    element: <ActivityPage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
];

export default routesConfig;
