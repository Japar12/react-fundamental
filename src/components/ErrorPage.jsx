import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <div>Oh, Ada Erorr!!</div>;
}

export default ErrorPage;
