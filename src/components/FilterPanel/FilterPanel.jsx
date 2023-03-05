import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearFilter, removeFilter } from "../../store/filter/filter-action";
import { selectFilter } from "../../store/filter/filter-selectors";
import Badge from "../../UI/Badge";
import Clear from "../../UI/Clear";
export const Wraper = styled.div`
  width: 1412px;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid #878787;
  align-items: center;
`;
const FilterPanel = () => {
  const activeFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Wraper>
      {activeFilter.map((filter) => {
        return (
          <Badge onClick={() => dispatch(removeFilter(filter))}>{filter}</Badge>
        );
      })}
      <Clear onClear={() => dispatch(clearFilter())} />
    </Wraper>
  );
};

export { FilterPanel };
