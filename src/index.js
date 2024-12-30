import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")); // cria a raiz do React a partir do id root
root.render(
	// renderiza o conteúdo na raiz
	<h1 id="title">
		<span>Hello World!</span>
	</h1>, // html dentro do JS já é JSX (React sendo usado)
);
