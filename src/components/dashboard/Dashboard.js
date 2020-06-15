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
            restart : false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleItemSubmit=this.handleItemSubmit.bind(this);
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('data');
            this.setState({...JSON.parse(json)});
        } catch (error) {};
    }
    componentDidUpdate(prevProps, prevState) {  
        const json = JSON.stringify(this.state);
        localStorage.setItem('data', json);
    }
    handleChange = (e) => {
        this.setState({value : e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.addList(this.state);
        this.setState({value : ""});
    }
    handleItemSubmit = (e) => {
        e.preventDefault();
        let list = [...this.state.tessio, this.state.value];
        list = list.filter(item => item !== "");
        this.setState({tessio : list})
        this.setState({value : ""});
    }
    
    addList = (list) => {
        list = this.state.value.match(/(.+)/g);
        list = list.filter(item => item !== "");
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
    startOver = () => {
        localStorage.clear();
        window.location.reload(true);
    }
    toggle = () => {
        const restart = !this.state.restart;
        this.setState({restart : restart});
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
                { this.state.restart ? (
                    <div className="start-over-modal">
                        <span className="restart-ask">Start Over? </span>
                        <button className="restart-btns" onClick={this.startOver}>yes</button>
                        <button className="restart-btns" onClick={this.toggle}>no</button>
                    </div>
                ) : (
                    <div>
                    </div>
                )}
                <div className="dashboard-body-container">
                    <div>
                        <Tessio 
                            value={this.state.value}
                            tessio={this.state.tessio}
                            complete={this.state.complete}
                            completeItem={this.completeItem}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}  
                            handleItemSubmit={this.handleItemSubmit}  
                        />
                    </div>
                </div>
                <div className="dashboard-foot-container" style={{display : this.state.tessio.length ? "block" : "none"}}>
                    <button className="submit" onClick={this.removeCompletedItems}>- refresh list -</button>
                    <button className="start-over" onClick={this.toggle}>start over</button>
                </div>
            </div>
        )
    }
}
export default Dashboard;