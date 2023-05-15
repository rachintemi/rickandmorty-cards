import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import App from "./App";
import { client } from "./apolloClient/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
