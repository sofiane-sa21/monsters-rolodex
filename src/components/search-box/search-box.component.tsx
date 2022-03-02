import React from 'react';

import './search-box.styles.css';

type SearchBoxProps = {
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBox: React.FunctionComponent<SearchBoxProps> = ({
  placeholder,
  handleChange,
}: SearchBoxProps): JSX.Element => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
