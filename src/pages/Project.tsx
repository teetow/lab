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
    <>
      <page.component />
      <Markdown rehypePlugins={[rehypeHighlight]} className={"codeblock"}>
        {page.docs}
      </Markdown>
    </>
  );
};

export default Project;
