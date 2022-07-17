import { AutoComplete, Input } from 'antd';
import type { SelectProps } from 'antd/es/select';
import React, { useState } from 'react';

type optionType = {
  options: [] | null;
};
const { Option } = AutoComplete;
const handleSelect = (value: string) => {
  console.log(value);
};

const AutoSuggestion = ({ options }: optionType) => (
  <AutoComplete
    style={{ width: '260px' }}
    placeholder="search"
    onSelect={handleSelect}
  >
    {options?.map((option: any) => {
      return (
        <Option
          key={option.fsq_id}
          value={`${option.geocodes?.main.latitude},${option.geocodes?.main.latitude}`}
        >
          {option.name}
        </Option>
      );
    })}
  </AutoComplete>
);
export default AutoSuggestion;
