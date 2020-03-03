import React, { Component } from 'react';
import './assets/css/App.css';
// data
import {events} from './eventsBD.json';
// subcomponents
import EventForm from './components/EventForm';

class App extends Component {
  constructor(){
    super();
    this.state={
      events
    }
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }
  removeEvent(index) {
    this.setState({
      events: this.state.events.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddEvent(events) {
    this.setState({
      events: [...this.state.events, events]
    })
  }
  render(){
    const events = this.state.events.map((events, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-3">
            <div className="card-title text-center">
              <h3>{events.title}</h3>
            </div>
            <div className="card-body">
              {events.responsible}  
            </div>
            <div className="card-body">
              {events.description}  
            </div>
            <div>
            <span className="badge badge-pill badge-danger ml-2">
                {events.priority}
              </span>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeEvent.bind(this, i)}>
                X
              </button>
            </div>
          </div>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Eventos
            <span className="badge badge-pill badge-light ml-2">
              {this.state.events.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <EventForm onAddEvent={this.handleAddEvent}></EventForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {events}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
