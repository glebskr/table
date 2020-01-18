import React from "react";

interface TRItemProps {
  value: string;
  header: string;
}

const TableRowItem: React.FC<TRItemProps> = ({ value, header }) => {
  return <td data-label={header}>{value}</td>;
};

export default TableRowItem;
