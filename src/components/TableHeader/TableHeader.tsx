import React from "react";
import TableHeaderItem from "./TableHeaderItem";

interface THProps {
  headers: string[];
}

const TableHeader: React.FC<THProps> = ({ headers }) => {
  return (
    <tr>
      {headers.map((val: string, i: number) => (
        <TableHeaderItem name={val} key={`head${i}`} />
      ))}
    </tr>
  );
};

export default TableHeader;
