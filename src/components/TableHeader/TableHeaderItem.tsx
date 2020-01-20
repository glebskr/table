import React from "react";
import { changeColumn, changeDirection } from "../../actions/sortActions";
import { State } from "../../interfaces/state";
import { connect } from "react-redux";

interface THItemProps {
  name: string;
  sortDirection: string;
  sortedColumn: string;
  changeDirection: (direction: string) => void;
  changeColumn: (column: string) => void;
}

const TableHeaderItem: React.FC<THItemProps> = ({
  name,
  sortDirection,
  sortedColumn,
  changeDirection,
  changeColumn
}) => {
  const sortHandler = () => {
    if (sortedColumn !== name) {
      changeColumn(name);
    } else {
      const newDirection = sortDirection === "asc" ? "desc" : "asc";
      changeDirection(newDirection);
    }
  };

  return (
    <th onClick={sortHandler}>
      {name} {sortedColumn === name ? (sortDirection === "asc" ? "▲" : "▼") : null}
    </th>
  );
};

const mapStateToProps = (state: State) => {
  return {
    sortDirection: state.sort.sortDirection,
    sortedColumn: state.sort.sortedColumn
  };
};

export default connect(mapStateToProps, { changeColumn, changeDirection })(TableHeaderItem);
