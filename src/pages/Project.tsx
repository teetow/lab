import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import rehypeHighlight from "rehype-highlight";
import "../style/lang/a11y-dark.scss";
import "./Project.scss";

export type PageDef = {
  Component: React.FC;
  file: string;
  name: string;
  path: string;
  pathname: string;
  desc?: string;
  thumb?: string;
  docs?: string;
  Preview?: React.FC;
};

type Props = {
  page: PageDef;
};

const Project = ({ page }: Props) => {
  const { docs, Preview, Component } = page;
  return (
    <div className="project">
      <Link to="/lab">Back</Link>
      <div className="component">{Preview ? <Preview /> : <Component />}</div>
      {docs && (
        <div className="desc">
          <Markdown rehypePlugins={[rehypeHighlight]} className="markdown">
            {docs}
          </Markdown>
        </div>
      )}
    </div>
  );
};

export default Project;
