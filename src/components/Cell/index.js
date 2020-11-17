import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
`;

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
  } = props;
  const getValue = () => {
    if (showValue) {
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
      onClick={() => {
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
};

CellComponent.defaultProps = {
  onCellClick: () => {},
  showValue: false,
};

const Cell = React.memo(CellComponent);

export { Cell };
