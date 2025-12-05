
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import './App.css'
import PublicPages from './Pages/PublicPages.jsx';
import AdminPages from './Pages/AdminPages.jsx';
import Layout from './Pages/Layout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      index: true,
      element: <Navigate to="/kezdolap" replace />,
    },
    {
      path: "kezdolap",
      element: <PublicPages />,
    },
    {
      path: "ujquiz",
      children: [{
        index: "true",
        elemet: <AdminPages />,
      }
      ],
    }
    ],
  },
  {
    path: "*",
    element: (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>404 - Az oldal nem található</h1>
        <a href="/login">Vissza a főoldal</a>
      </div>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
