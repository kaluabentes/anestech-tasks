import React from "react";

import { Container, Row, Head, Data } from "./styles";

export default function Table({ children }) {
  return <Container>{children}</Container>;
}

Table.Row = Row;
Table.Head = Head;
Table.Data = Data;
