import { Link } from "react-router-dom";
import LabLogo from "../ui/LabLogo";
import Stack from "../ui/Stack";
import "./Cover.scss";
import { PageDef } from "./Project";
import { Fragment } from "react";

const Card = ({ Preview, thumb, name, desc, pathname }: PageDef) => {
  return (
    <>
      <li className="covercard">
        {Preview ? <Preview /> : <>{thumb && <img className="thumb" src={thumb} alt={name} />}</>}
        <div className="details">
          <span className="title">{pathname}</span>
          {desc && <span className="desc">{desc || "An experiment"}</span>}
        </div>
      </li>
    </>
  );
};

const Cover = ({ pages }: { pages: PageDef[] }) => {
  const p = pages.length !== 1;

  return (
    <Stack className="cover">
      <div className="header">
        <LabLogo className="logo" />

        <h1 className="title">The Lab</h1>

        <a className="curio" href="https://hits.seeyoufarm.com">
          <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fteetow%2Flab&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" />
        </a>
      </div>

      <div className="cards">
        {pages.map((page, i) => (
          <Fragment key={`${i}-${page.pathname}`}>
            {page.Preview ? (
              <Link to={page.path}>
                <Card {...page}></Card>
              </Link>
            ) : (
              <>
                <Link to={page.path}>
                  <Card {...page}></Card>
                </Link>
              </>
            )}
          </Fragment>
        ))}
      </div>

      <span className="summary">{`${pages.length} project${p ? "s" : ""} in the lab`}</span>
    </Stack>
  );
};

export default Cover;
