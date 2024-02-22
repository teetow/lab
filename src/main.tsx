import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Cover from "./pages/Cover";

const projects = import.meta.glob<React.FC>(["../projects/**/index.tsx"], {
  eager: true,
  import: "default",
});

const mekTitle = (path: string) =>
  path.split("../projects/")[1].replace("index.tsx", "").replace(/\/+$/, "");

const pages = Object.entries(projects).map(([file, Component]) => ({
  name: Component.displayName || Component.name,
  pathname: mekTitle(file),
  file: file,
  path: mekTitle(file)
    .toLocaleLowerCase()
    .replace(/[^a-zA-Z]/, "-"),
  component: Component,
}));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/lab/"
          element={
            <>
              <Cover pages={pages} />
            </>
          }
        />
        {pages.map((page) => (
          <Route
            key={page.file}
            path={page.path}
            element={<page.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./App.tsx";
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/hello",
//         element: <div>Hello</div>,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
