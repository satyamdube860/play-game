import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import RowView from "./rowView";
import TableHeader from "./tableHeader";
import Divider from "@material-ui/core/Divider";
import Pagination from "./pagination";

const ScoreTable = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  var tableData = [localStorage.getItem("CasinoGameData")];
  tableData = [...props.auth.gamedata];
  console.log(tableData);

  localStorage.setItem("CasinoGameData", JSON.stringify(tableData));
  var casinoData = JSON.parse(localStorage.getItem("CasinoGameData"));

  const currentdata = casinoData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="table_main">
      <div className="rows_div">
        <TableHeader
          id="ID"
          slot_1="SLOT 1"
          slot_2="SLOT 2"
          slot_3="SLOT 3"
          time="TIME"
        />
        <Divider variant="middle" />
        {currentdata.map((item) => {
          console.log(item);
          return (
            <div key={item.id}>
              <RowView
                id={item.id}
                slot_1={item.slot1}
                slot_2={item.slot2}
                slot_3={item.slot3}
                time={item.time}
              />
              <Divider variant="middle" />
            </div>
          );
        })}

        <Divider variant="middle" />
      </div>
      <div>
        <Pagination
          postPerPage={postPerPage}
          totalPost={casinoData.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      AddData: actions.AddData,
      AddDataToStorage: actions.AddDataToStorage,
      CalculateBalance: actions.CalculateBalance,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable);
