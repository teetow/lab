import { Plugin } from "vite";
import fs from "fs";
import path from "path";

const projectsRouter = (): Plugin => {
  return {
    name: "projects-router",
    configResolved(config) {
      const projectsDir = path.join(config.root, "src", "projects");
      const dirs = fs
        .readdirSync(projectsDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

      const routes = dirs
        .map(
          (dir) => `{
        path: "/projects/${dir}",
        element: <div>Project: ${dir}</div>,
      }`
        )
        .join(",\n");
    },
  };
};

export default projectsRouter;
