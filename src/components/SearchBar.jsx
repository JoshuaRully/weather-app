import React, { useState, useEffect, useCallback } from "react";

import useDebounce from '../hooks/Debounce';
import { TextField } from "@material-ui/core";

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 1000);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section className="search">
      <form className="search__form" onSubmit={event => event.preventDefault()}>
        <TextField
          className="radius"
          spellCheck="false"
          placeholder="Search City"
          name="search"
          type="text"
          style={{margin: "2vh"}}
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </form>
    </section>
  );
}