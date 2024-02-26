import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Cover from "./pages/Cover";
import Project, { PageDef } from "./pages/Project";

const projects = import.meta.glob<React.FC>([`./projects/**/index.tsx`], {
  eager: true,
  import: "default",
});

const docs = import.meta.glob<string>([`./projects/**/docs.md`], {
  eager: true,
  import: "markdown",
});

const descs = import.meta.glob<string>([`./projects/**/desc.md`], {
  eager: true,
  import: "markdown",
});

const thumbs = import.meta.glob<string>([`./projects/**/thumb.svg`], {
  eager: true,
  import: "default",
});

const previews = import.meta.glob<React.FC>([`./projects/**/Preview.tsx`], {
  eager: true,
  import: "default",
});

function getImport<T>(component: string, collection: Record<string, T>) {
  const base = component.replace("index.tsx", "");

  const fileKey = Object.keys(collection).find((key) => key.includes(base));

  if (fileKey) {
    return fileKey in collection ? collection[fileKey] : undefined;
  }
}

const mekTitle = (path: string) =>
  path.split("./projects/")[1].replace("index.tsx", "").replace(/\/+$/, "");

const pages = Object.entries(projects).map(
  ([file, Component]): PageDef => ({
    name: Component.displayName || Component.name,
    pathname: mekTitle(file),
    file: file,
    path: mekTitle(file)
      .toLocaleLowerCase()
      .replace(/[^a-zA-Z]/, "-"),
    Component: Component,
    Preview: getImport(file, previews),
    desc: getImport(file, descs),
    thumb: getImport(file, thumbs),
    docs: getImport(file, docs),
  })
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/lab/" element={<Cover pages={pages} />} />
        {pages.map((page) => (
          <Route key={page.file} path={`/lab/${page.path}`} element={<Project page={page} />} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
