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
        <span className="desc">{page.desc || "An experiment"}</span>
      </li>
    </>
  );
};

const Cover = ({ pages }: { pages: PageDef[] }) => {
  const p = pages.length !== 1;

  return (
    <Stack className="cover">
      <LabLogo className="logo" />
      <h1 className="headertitle">The Lab</h1>

      <div className="summary">
        <span>{`There ${p ? "are" : "is"} ${pages.length} project${p ? "s" : ""} in the lab`}</span>
        <a href="https://hits.seeyoufarm.com">
          <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fteetow%2Flab&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" />
        </a>
      </div>
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
