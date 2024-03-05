import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : "/search");
    setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Form className="d-flex align-items-center" onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          value={query}
          onChange={handleChange}
          placeholder="Search your color"
          aria-label="Search Products"
          aria-describedby="button-search"
        />
        <Button variant="primary" type="submit" id="button-search">
          <i className="fas fa-search"></i> Search
        </Button>
      </InputGroup>
    </Form>
  );
}
