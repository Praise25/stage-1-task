import { Fragment } from "react";
import LinkItems from "./LinkItems";

const LinkList = () => {
  return (
    <Fragment>
      <LinkItems name="Twitter Link" link="https://twitter.com/PraiseTheDev" />
      <LinkItems name="Zuri Team" link="https://training.zuri.team/" id="btn__zuri" />
      <LinkItems name="Zuri Books" link="http://books.zuri.team" id="books" />
      <LinkItems name="Python Books" link="https://books.zuri.team/python-for-beginners?ref_id=praise" id="book__python" />
      <LinkItems name="Background Check for Coders" link="https://background.zuri.team" id="pitch" />
      <LinkItems name="Design Books" link="https://books.zuri.team/design-rules" id="book__design" />
    </Fragment>
  );
};

export default LinkList;
