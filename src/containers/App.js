import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
// eslint-disable-next-line no-unused-vars
import ErrorBoundry from "../components/ErrorBoundry";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: "",
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ robots: users }));
    }

    onsearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
        if (!robots.length) {
            return <h1>Loading...</h1>;
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1 tc">RoboFriends</h1>
                    <SearchBox searchfield={searchfield} onsearchChange={this.onsearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;