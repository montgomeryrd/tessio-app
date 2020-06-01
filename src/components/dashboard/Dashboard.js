import React from 'react';
import Tessio from '../tessio/Tessio';
import Toadhouse from '../toadhouse/Toadhouse';
import '../../styles/dashboard.css';

class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: "",
            page : true,
            tessio : [],
            toad : [],
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleTessioSubmit=this.handleTessioSubmit.bind(this);
        this.handleToadSubmit=this.handleToadSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({value : e.target.value})
    }
    handleTessioSubmit = (e) => {
        e.preventDefault();
        this.addTessioList(this.state);
        this.setState({value : ""});
    }
    handleToadSubmit = (e) => {
        e.preventDefault();
        this.addToadhouseList(this.state);
        this.setState({value : ""});
    }
    // Tessio --------------------------------------
    addTessioList = (list) => {
        list = this.state.value.match(/\d[a-zA-Z] [a-zA-Z]+/g);
        this.setState({tessio : list}, () => {
            console.log("tessio ", this.state.tessio);
        });
    }
    // ToadHouse -----------------------------------
    addToadhouseList = (list) => {
        list = this.state.value.match(/\d[a-zA-Z] [a-zA-Z]+/g);
        const toad = list;
        this.setState({toad : toad}, () => {
            console.log("toad ", this.state.toad);
        });
    }
    // Other functions -----------------------------
    togglePage = () => {
        const page = !this.state.page;
        this.setState({page : page});
    }

    render() {
        const currentDate = new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
        const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
        
        return (
            <div className="dashboard-container">
                <div className="dashboard-head-container">
                    <div className="hamburger-container">
                        <div className="toggle-business">
                            <span><span className="switch" onClick={this.togglePage}>(switch)</span> to { this.state.page ? <span>Toad House</span> : <span>Tessio</span> }</span>
                        </div>
                    </div>
                        { this.state.page ? <h1>Tessio</h1> : <h1>Toad House</h1> }
                    <h5>{currentDate}</h5>
                    <h6>{currentDay}</h6>
                </div>
                <div className="dashboard-body-container">
                    { this.state.page ? (
                        <div>
                            <Tessio 
                                value={this.state.value}
                                page={this.state.page}
                                tessio={this.state.tessio}
                                handleChange={this.handleChange}
                                handleTessioSubmit={this.handleTessioSubmit}    
                            />
                        </div>
                    ) : (
                        <div>
                            <Toadhouse 
                                value={this.state.value}
                                page={this.state.page}
                                toad={this.state.toad}
                                handleChange={this.handleChange}
                                handleToadSubmit={this.handleToadSubmit}
                            />
                        </div>
                    )}
                </div>
                <div className="dashboard-foot-container">

                </div>
            </div>
        )
    }
}
export default Dashboard;