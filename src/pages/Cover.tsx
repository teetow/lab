import React from "react";
import { Link } from "react-router-dom";
import LabLogo from "../ui/LabLogo";
import Stack from "../ui/Stack";
import "./Cover.css";

type PageDef = {
  pathname: string;
  path: string;
  component: React.FC;
};

const Cover = ({ pages }: { pages: PageDef[] }) => {
  const p = pages.length !== 1;

  return (
    <Stack className="cover">
      <LabLogo />
      <h1>The Lab</h1>
      <h3>{`There ${p ? "are" : "is"} ${pages.length} project${
        p ? "s" : ""
      } in the lab`}</h3>
      <div className="rollup">
        {pages.map((page, i) => (
          <li key={`${i}-${page.pathname}`}>
            <Link to={page.path}>{page.pathname}</Link>
          </li>
        ))}
      </div>
    </Stack>
  );
};

export default Cover;
