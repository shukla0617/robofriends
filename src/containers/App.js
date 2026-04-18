import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
// eslint-disable-next-line no-unused-vars
import ErrorBoundry from "../components/ErrorBoundry";

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setRobots(users));
    }, []);

    const onsearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!robots.length) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="tc">
            <h1 className="f1 tc">RoboFriends</h1>
            <div className="flex justify-center items-center">
                <SearchBox searchfield={searchfield} onsearchChange={onsearchChange} />
                <button className="pa3 ba b--green bg-lightest-blue" onClick={() => setSearchfield("")}>Reset</button>
            </div>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;
