import React from 'react';
import Tessio from '../tessio/Tessio';
import '../../styles/dashboard.css';

class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: "",
            tessio : [],
            complete : [],
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({value : e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.addList(this.state);
        this.setState({value : ""});
    }
    
    addList = (list) => {
        list = this.state.value.match(/\d(.*)/g);
        this.setState({tessio : list}, () => {
            console.log("tessio ", this.state.tessio);
        });
    }
    completeItem = (index) => {
        if(this.state.complete.includes(this.state.tessio[index])) {
            const i = this.state.complete.indexOf(this.state.tessio[index]);
            let complete = this.state.complete;
            complete.splice(i, 1);
            this.setState({complete : complete}, () => {
                console.log("complete ", this.state.complete);
            });
        } else {
            const complete = [...this.state.complete, this.state.tessio[index]];
            this.setState({complete : complete}, () => {
                console.log("complete ",this.state.complete);
            });
        }
    }
    removeCompletedItems = (array) => {
        let tessio = [], complete = [];
        this.state.tessio.forEach(item => !this.state.complete.includes(item) ? tessio.push(item) : item);
        this.setState({tessio : tessio});
        this.setState({complete : complete});
    }

    render() {
        const currentDate = new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
        const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
        
        return (
            <div className="dashboard-container">
                <div className="dashboard-head-container">
                    <h1>{currentDate}</h1>
                    <h2>{currentDay}</h2>
                </div>
                <div className="dashboard-body-container">
                    <div>
                        <Tessio 
                            value={this.state.value}
                            tessio={this.state.tessio}
                            complete={this.state.complete}
                            completeItem={this.completeItem}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}    
                        />
                    </div>
                </div>
                <div className="dashboard-foot-container" style={{display : this.state.tessio.length ? "block" : "none"}}>
                    <button className="subnit" onClick={this.removeCompletedItems}>remove completed</button>
                </div>
            </div>
        )
    }
}
export default Dashboard;