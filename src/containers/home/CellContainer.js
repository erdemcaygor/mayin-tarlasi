import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Cell, Container } from "../../components";
import { updateUserPoint, startGame } from "../../redux/actions/gameActions";

const CellContainer = (props) => {
  const dispatch = useDispatch();
  const gameReducer = useSelector((state) => state.gameReducer);
  const cellCount = 10;

  useEffect(() => {
    dispatch(startGame());
  }, []);

  const onHandleClick = useCallback((cellIndex, cellValue) => {
    dispatch(updateUserPoint(cellIndex, cellValue));
  });

  const renderRow = (columnIndex) => {
    const rows = [];
    [...Array(cellCount).keys()].map((item, i) => {
      rows.push(
        <Cell
          key={`${columnIndex}${i}`}
          value={gameReducer?.cellValues[`${columnIndex}${i}`]?.value}
          showValue={gameReducer?.cellValues[`${columnIndex}${i}`]?.show}
          borderLeft={"solid 2px black"}
          borderTop={"solid 2px black"}
          borderRight={i === cellCount - 1 ? "solid 2px black" : ""}
          borderBottom={columnIndex === cellCount - 1 ? "solid 2px black" : ""}
          index={`${columnIndex}${i}`}
          onCellClick={onHandleClick}></Cell>
      );
    });
    return rows;
  };

  const renderColumn = () => {
    const columns = [];
    [...Array(cellCount).keys()].map((item, i) => {
      columns.push(<Container key={i}>{renderRow(i)}</Container>);
    });
    return columns;
  };

  return <Container flexDirection="column">{renderColumn()}</Container>;
};

export default CellContainer;
