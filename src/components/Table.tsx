import React, { useEffect } from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableRowBody from "./TableRow/TableRowBody";
import { connect } from "react-redux";
import { setContent } from "../actions/contentActions";
import { changeColumn, changeDirection } from "../actions/sortActions";
import { ContentAction } from "../interfaces/action";
import { ContentRow } from "../interfaces/content";
import { SortState } from "../interfaces/sort";
import {State} from '../interfaces/state'

import _ from "lodash";

interface TableProps {
  setContent: (content: ContentRow[]) => ContentAction;
  changeDirection: (direction: string) => void;
  changeColumn: (column: string) => void;
  content: ContentRow[];
  sort: SortState;
}

const Table: React.FC<TableProps> = ({ setContent, content, sort, changeDirection, changeColumn }) => {
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/blmzv/ah-frontend-intern/master/profiles.json")
      .then(res => res.json())
      .then(res => {
        setContent(res);
        if (localStorage.getItem("direction") && localStorage.getItem("column")) {
          changeColumn(localStorage.getItem("column"));
          changeDirection(localStorage.getItem("direction"));
        }
      });
  }, []);

  if (!_.isNull(content) && !_.isUndefined(content)) {
    return (
      <table>
        <thead>{<TableHeader headers={Object.keys(content[0])} />}</thead>
        <tbody>
          {content.map((val, i) => (
            <TableRowBody row={val} key={`row${i}`} />
          ))}
        </tbody>
      </table>
    );
  } else return <div className="loading"></div>;
};

const mapStateToProps = (state: State) => {
  return {
    content: state.content.tableContent,
    sort: state.sort
  };
};

export default connect(mapStateToProps, { setContent, changeDirection, changeColumn })(Table);
