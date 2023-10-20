import React from "react";
import styled from "styled-components";

const SearchFormDatePicker = React.forwardRef<HTMLLabelElement, { onClick: () => void; placeholder: Date }>((props, ref) => {
  const currentDate = new Date(props.placeholder.toISOString());
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const formattedDate = `${month}/${day}`;

  return (
    <div>
      <Label onClick={props.onClick} ref={ref}>
        {formattedDate}
      </Label>
    </div>
  );
});

const Label = styled.label`
  display: block;
  max-width: 56px;
  width: 56px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  color: #aaaaaa;
  font-size: 13px;
  cursor: pointer;
  background-color: #fff;
`;

export default SearchFormDatePicker;
