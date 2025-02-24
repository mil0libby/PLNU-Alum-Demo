import React, { useEffect, useState } from "react";

const SearchBar = ({ profiles, setIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an Alumni");
  const [max, setMax] = useState(10);

  const options = [];

  const getOptions = () => {
    let options = [];
    for (let i = 1; i <= max; i++) {
      console.log(profiles[i]);
      options.push(
        <button
          className="dropdown__btn"
          onClick={() => {
            setIndex(i);
          }}
        >
          <li className="dropdown-item">
            {profiles[i].name + " -- " + profiles[i].title}
          </li>
        </button>
      );
    }

    return options;
  };

  useEffect(() => {
    console.log(profiles);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        {selectedOption} <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul className="dd__list">{getOptions()}</ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
