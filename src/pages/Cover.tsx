import { Link } from "react-router-dom";
import LabLogo from "../ui/LabLogo";
import Stack from "../ui/Stack";
import "./Cover.scss";
import { PageDef } from "./Project";

const Card = (page: PageDef) => {
  return (
    <>
      <li className="covercard">
        <img className="thumb" src={page.thumb} alt={page.name} />
        <span className="title">{page.pathname}</span>
        <p className="desc">{page.desc}</p>
      </li>
    </>
  );
};

const Cover = ({ pages }: { pages: PageDef[] }) => {
  const p = pages.length !== 1;

  return (
    <Stack className="cover">
      <LabLogo />
      <h1>The Lab</h1>
      <h3>{`There ${p ? "are" : "is"} ${pages.length} project${p ? "s" : ""} in the lab`}</h3>
      <div className="cards">
        {pages.map((page, i) => (
          <Link to={page.path} key={`${i}-${page.pathname}`}>
            <Card {...page}></Card>
          </Link>
        ))}
      </div>
    </Stack>
  );
};

export default Cover;
