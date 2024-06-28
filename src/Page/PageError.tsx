import { useRouteError } from "react-router-dom";

function PageError() {
    const error = useRouteError();
    console.error(error);
  return (
    <div>
        <h1>Oops!</h1>
        <p>Une erreur est survenu</p>
        <p>
            Consulter la console pour déterminer l'erreur
        </p>
    </div>
  )
}

export default PageError