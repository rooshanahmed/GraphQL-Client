import React from "react";
import client from "./config/gql_config";
import { ApolloProvider } from "@apollo/client";
import Students from "./Students";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Students />
    </ApolloProvider>
  );
}

export default App;
