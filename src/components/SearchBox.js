import React from "react";

const SearchBox = ({searchfield, onsearchChange}) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="text"
                placeholder="search robots"
                value={searchfield}
                onChange={onsearchChange}
            />
        </div>
    );
};



export default SearchBox;