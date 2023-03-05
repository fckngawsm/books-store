import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectFilter } from "../../store/filter/filter-selectors";
import Badge from "../../UI/Badge";
export const Wraper = styled.div`
  width: 1412px;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid #878787;
`;
const FilterPanel = ({ onClear }) => {
  const activeFilter = useSelector(selectFilter);
  return (
    <Wraper>
      {activeFilter.map((filter) => {
        return <Badge onClick={onClear}>{filter}</Badge>;
      })}
    </Wraper>
  );
};

export { FilterPanel };
