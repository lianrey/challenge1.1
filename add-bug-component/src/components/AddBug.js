import React from "react";
import BaseComponent from './BaseComponent.js'
import uuid from 'uuid';

class AddBug extends BaseComponent{
  constructor(props){
    super(props);
    const data = {}

    this.bind(['handleSubmit', 'onFieldhanged']);    

    this.state = {
      data: data,
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.updateData('id', uuid());
    this.props.sendData(this.state.data);
  }

  onFieldhanged(e){
    this.updateData(e.currentTarget.attributes['name'].value,e.currentTarget.value)
  }

  updateData(indexName, value){
    let newState = this.state;
    
    const data = newState.data;
    data[indexName] = value;

    this.setState(newState);
  }

  render() {
    return (
      <div>
          <h1>Bug Tracker</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="status">Status:</label>
            <select id="status" name="status" onChange={this.onFieldhanged} required>
              <option value="">Select</option>
              <option value="Open">Open</option>
              <option value="Rejected">Rejected</option>
              <option value="Closed">Closed</option>
            </select>
            <br />
            <label htmlFor="priority">Priority:</label>
            <select id="priority" name="priority" onChange={this.onFieldhanged} required>
              <option value="">Select</option>
              <option value="Minor">Minor</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <br />
            <label htmlFor="owner">Owner:</label>
            <input id="owner" type="text" value={this.state.data["Owner"]} name="owner"
              onChange={this.onFieldhanged} placeholder="Owner" required/>
            <br />
            <label htmlFor="description">Description:</label>
            <input id="description" type="text" value={this.state.data["Description"]} name="description"
              onChange={this.onFieldhanged} placeholder="Description" required/>
            <br />
            <button type="submit">ADD</button>
          </form>
      </div>
    );
  }
}

AddBug.propTypes = {
};

export default AddBug;