import React, { Component } from "react";
import DateBox from "../components/DateBox";
import FactBox from "../components/FactBox";
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        const date = new Date().toISOString().replace(/T.*$/, "");
        const [ year, month, day ] = date.split('-')
        this.state = {
            day,
            month,
            year,
            fact: '',
        }
    }
    componentDidMount() {
        this.getFact();

    }
    fetchFact = (day, month) => {
        fetch(`http://numbersapi.com/${month}/${day}/date`)
            .then(response => response.text())
            .then(data => {
                this.setState(() => ({ fact: data }))
            })
    } 
    getFact = () => {
        this.fetchFact(this.state.day, this.state.month)
    }

    onDateChange = (e) => {
        const [ year, month, day ] = e.target.value.split('-');
        this.setState(() => ({ day, month, year}));
        this.fetchFact(day, month);
    }
    render() {
        return (
            <div className="v-btm">
                <h1 className="f1 tc">Date check</h1>
                <div className="v-btm">
                    <DateBox 
                        day={this.state.day} 
                        month={this.state.month} 
                        year={this.state.year} 
                        onDateChange={this.onDateChange}
                        />
                    <FactBox fact={this.state.fact} onGetFact={this.getFact} />
                </div>

            </div>
        )
    }
}

export default App;