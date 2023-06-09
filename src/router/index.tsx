import { createBrowserRouter, Outlet } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/pages/Home";
import CreatePage from "@/pages/Create";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "edit/:id",
        element: <div>Edit Page</div>,
      },
      {
        path: "create",
        element: <CreatePage />,
      }
    ],
  },
]);

// eslint-disable-next-line react-refresh/only-export-components
function Router() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
