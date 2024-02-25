import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Cover from "./pages/Cover";
import Project, { PageDef } from "./pages/Project";

const projectRoot = "./projects/";

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

const thumbs = import.meta.glob<string>([`./projects/**/thumb.png`], {
  eager: true,
  import: "default",
});

console.log(projects);

const mekTitle = (path: string) =>
  path.split(projectRoot)[1].replace("index.tsx", "").replace(/\/+$/, "");

const getDescFor = (file: string) => {
  const descFile = file.split("/index.tsx")[0] + "/desc.md";
  if (descFile in descs) {
    return descs[descFile];
  }
};

const getDocsFor = (file: string) => {
  const docsFile = file.split("/index.tsx")[0] + "/docs.md";
  if (docsFile in docs) {
    return docs[docsFile];
  }
};

const getThumbFor = (file: string) => {
  const thumbFile = file.split("/index.tsx")[0] + "/thumb.png";
  if (thumbFile in thumbs) {
    return thumbs[thumbFile];
  }
};

const pages = Object.entries(projects).map(
  ([file, Component]): PageDef => ({
    name: Component.displayName || Component.name,
    pathname: mekTitle(file),
    file: file,
    path: mekTitle(file)
      .toLocaleLowerCase()
      .replace(/[^a-zA-Z]/, "-"),
    component: Component,
    desc: getDescFor(file),
    docs: getDocsFor(file),
    thumb: getThumbFor(file),
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
