import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import gameReducer from "../../redux/reducers/gameReducer";

const CellContainer = styled.div`
  width: 50px;
  height: 50px;
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) =>
    getMapColor(props.value, props.showValue, props.gameFinished)};
`;

const mapColor = {
  0: "#d9534f",
  1: "#5bc0de",
  2: "#0275d8",
  3: "#5cb85c",
  finished: "#f7f7f7",
};

const getMapColor = (value, showValue, gameFinished) => {
  if (value != null) {
    if (showValue) {
      return mapColor[value];
    } else if (gameFinished) {
      return value === 0 ? mapColor[value] : mapColor.finished;
    }
  }
  return "";
};

const CellComponent = (props) => {
  const {
    value,
    onCellClick,
    index,
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    showValue,
    gameFinished,
  } = props;
  const getValue = () => {
    if (showValue || gameFinished) {
      if (value === 0) {
        return <img src="bomb.png" width="20" alt="bomb" />;
      }
      return value;
    }
    return "";
  };
  return (
    <CellContainer
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderTop={borderTop}
      borderBottom={borderBottom}
      value={value}
      showValue={showValue}
      gameFinished={gameFinished}
      onClick={() => {
        if (gameFinished) return;
        onCellClick(index, value);
      }}>
      {getValue()}
    </CellContainer>
  );
};

CellComponent.propTypes = {
  borderLeft: PropTypes.string,
  borderRight: PropTypes.string,
  borderTop: PropTypes.string,
  borderBottom: PropTypes.string,
  value: PropTypes.number,
  onCellClick: PropTypes.func,
  index: PropTypes.string,
  showValue: PropTypes.bool,
  gameFinished: PropTypes.bool,
};

CellComponent.defaultProps = {
  onCellClick: () => {},
  showValue: false,
};

const Cell = React.memo(CellComponent);

export { Cell };
