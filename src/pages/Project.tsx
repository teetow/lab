import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "../style/lang/a11y-dark.scss";
import "./Project.scss";

export type PageDef = {
  component: React.FC;
  file: string;
  name: string;
  path: string;
  pathname: string;
  desc?: string;
  docs?: string;
  thumb?: string;
};

type Props = {
  page: PageDef;
};

const Project = ({ page }: Props) => {
  return (
    <div className="project">
      <div className="component">
        <page.component />
      </div>
      <div className="desc">
        <Markdown rehypePlugins={[rehypeHighlight]} className="markdown">
          {page.docs}
        </Markdown>
      </div>
    </div>
  );
};

export default Project;
