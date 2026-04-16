import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

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
        if (!robots.length) {
            return <h1>Loading...</h1>;
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1 tc">RoboFriends</h1>
                    <SearchBox searchfield={searchfield} onsearchChange={this.onsearchChange} />
                    <Scroll>                        
                        <CardList robots={robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()))} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;