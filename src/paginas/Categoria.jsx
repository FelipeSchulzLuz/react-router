import React from "react";
import { useParams } from "react-router-dom";
import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import { Route, useRouteMatch } from "react-router-dom";

const Categoria = () => {
  const { id } = useParams();
  const { path } = useRouteMatch();
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias></ListaCategorias>
      <Route exact path={`${path}/`}>
        <ListaPost url={`/posts?categoria=${id}`}></ListaPost>
      </Route>
    </>
  );
};

export default Categoria;
