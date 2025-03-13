const ArticleStatus = ({ isNew }) => {
  return isNew && <span>"Baru !!!"</span>;
};

const ArticleStatus2 = () => {
  return <span>"Baruuu!!!"</span>;
};

function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Tags: {props.tags.join(", ")}, Date: {props.date}
        {/* {props.isNew && "Baru !!!"} */}
        {/* <ArticleStatus isNew={props.isNew} /> */}
        {props.isNew && <ArticleStatus2 />}
      </small>
    </>
  );
}

export default Article;
