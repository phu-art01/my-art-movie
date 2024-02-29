import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import axios from '../config/axios';


interface Movie {
    name: string;
    streak: string;
   
  }

const SearchInput: React.FC<{ placeholder: string; style: React.CSSProperties }> = (props) => {
  const [data, setData] = useState<SelectProps['options']>([]);
  const [value, setValue] = useState<string>();

  useEffect(() => {
    const Movies = async () => {
      const response = await axios.get("/movies");
      setMovies(response.data);
      setPosts(response.data); 
    };
  Movies();
  }, []);

  const handleSearch = (newValue: string) => {
    fetch(newValue, setData);
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Select
      showSearch
      value={value}
      placeholder={props.placeholder}
      style={props.style}
      defaultActiveFirstOption={false}
      suffixIcon={null}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      options={(data || []).map((d) => ({
        value: d.value,
        label: d.text,
      }))}
    />
  );
};

const App: React.FC = () => <SearchInput placeholder="input search text" style={{ width: 200 }} />;

export default App;