import React from "react";
import * as _ from "lodash";
import TableRowItem from "./TableRowItem";
interface RowInfo {
  [key: string]: string;
}

interface TRBodyProps {
  row: RowInfo;
}

const TableRowBody: React.FC<TRBodyProps> = ({ row }) => {
  const finalRow = Object.keys(row)
  .map((property: string, i: number) => (
    <TableRowItem value={row[property]} key={`item${i}`} header={property} />
  ));

  return <tr>{finalRow}</tr>;
};

export default TableRowBody;
