import React from 'react';
// import Tessio from '../tessio/Tessio';
// import Toadhouse from '../toadhouse/Toadhouse';
import '../../styles/dashboard.css';

class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: "",
            tessio : [],
            toad : [],
            page : true,
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
        this.addToadList(this.state);
        this.setState({value : ""});
    }
    // Tessio --------------------------------------
    addTessioList = (list) => {
        list = this.state.value.match(/\d[a-zA-Z] [a-zA-Z]+/g).map((item, index) => item.id = index);
        this.setState({tessio : list});
    }
    // ToadHouse -----------------------------------
    addToadhouseList = (list) => {
        list = this.state.value.match(/\d[a-zA-Z] [a-zA-Z]+/g).map((item, index) => item.id = index);
        this.setState({toad : list});
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
                            <span><span className="switch" onClick={this.togglePage}>(switch)</span> to { this.state.page ? <span>Tessio</span> : <span>Toad House</span> }</span>
                        </div>
                    </div>
                        { this.state.page ? <h1>Toad House</h1> : <h1>Tessio</h1> }
                    <h5>{currentDate}</h5>
                    <h6>{currentDay}</h6>
                </div>
                <div className="dashboard-body-container">
                    { this.state.page ? (
                        <div>
                            {/* <Tessio /> */}
                        </div>
                    ) : (
                        <div>
                            {/* <Toadhouse /> */}
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