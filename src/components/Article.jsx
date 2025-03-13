import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span>"Baru !!!"</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Tags: {props.tags.join(", ")}, Date: {props.date}
        <ArticleStatus isNew={props.isNew} />
      </small>
      <small>Di tulis Oleh {user.username} </small>
    </>
  );
}

export default Article;
