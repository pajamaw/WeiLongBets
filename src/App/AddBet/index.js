import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddBet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Wager: 0,
      Duration: '',
      Category: 'Select Category',
      Description: '',
      Title: '',
      Challenger: 'address',
      wagerLabel: false,
      descriptionLabel: false,
      titleLabel: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name.charAt(0).toUpperCase()]: event.target.value,
      [`${event.target.name}Label`]: !(event.target.value === ''),
    });
  }
  handleDateChange(event, date) {
    console.log(`${date}`)
    this.setState({
      Duration: date,
    });
  }

  render() {
    return (
      <styledDiv>
        <h1>&bull; Create Bet &bull;</h1>
        <div className="underline">
          <div className="icon_wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.144 0-9.39-3.905-9.938-8.905l2.385.635 1.355-4.983-2.894-.887c1.578-3.451 5.056-5.86 9.092-5.86 4.047 0 7.532 2.421 9.104 5.886l-2.907.86 1.355 4.983 2.384-.635c-.546 5.001-4.792 8.906-9.936 8.906zm-.936-6.032l-.671.907c-.181.246-.571.31-.821.125-.263-.192-.32-.56-.126-.823l.67-.905c.194-.262.561-.318.823-.126.262.192.319.56.125.822zm-1.187-.868l-.675.915c-.179.244-.562.306-.819.118-.261-.193-.322-.553-.129-.814l.676-.914c.191-.261.559-.318.82-.126.263.192.321.561.127.821zm-1.186-.866l-.671.907c-.182.248-.574.308-.822.126-.262-.192-.319-.561-.127-.822l.672-.907c.191-.262.559-.319.822-.125.263.191.318.559.126.821zm8.282.452c.23.229.23.602 0 .832-.229.229-.603.229-.831 0l-1.688-1.688c-.055-.055-.144-.057-.202-.004-.062.057-.065.154-.005.213l1.562 1.563c.229.23.229.602 0 .832s-.602.23-.832 0l-1.27-1.271c-.057-.057-.148-.057-.205-.001-.062.057-.062.151-.003.21l1.054 1.054c.229.23.229.601 0 .832-.229.229-.602.229-.832 0l-.544-.545c.141-.868-.497-1.576-1.276-1.644-.207-.492-.668-.821-1.185-.865-.198-.476-.654-.82-1.187-.867-.422-1.007-1.799-1.193-2.459-.293l-.367.496c-.373-.141-.777-.258-1.241-.367l1.062-3.904c1.584-.014 2.83-1.515 4.291-.591-.479.591-.87 1.063-1.462 1.409-.473.276-.694.817-.551 1.347.181.664.854 1.128 1.641 1.128 1.04 0 2.116-.854 2.935-1.468.481.48 3.191 3.146 3.595 3.592zm-4.846 1.326c.262.191.318.56.125.82l-.672.91c-.18.246-.568.311-.822.125-.262-.192-.318-.56-.127-.822l.674-.91c.191-.258.558-.317.822-.123zm5.356-6.718l1.08 3.973c-.387.173-.774.374-1.178.622 0 0-2.604-2.57-3.378-3.344-.412-.413-.697-.469-1.174-.085-.607.489-1.35.985-1.898 1.178-1.076.376-1.664-.54-1.163-.832 1.017-.593 1.513-1.448 2.366-2.415.237-.269.52-.368.807-.368.313 0 .635.117.912.261 1.264.653 2.415 1.099 3.626 1.01zm-4.266 7.874c.406.406.106.832-.346.832-.117 0-.246-.027-.375-.094.195-.265.482-.618.589-.871l.132.133z"/>
            </svg>
            <path d="M70.865,101.78c0,4.774,3.886,8.657,8.66,8.657c4.774,0,8.657-3.883,8.657-8.657c0-4.773-3.883-8.656-8.657-8.656    C74.751,93.124,70.865,97.006,70.865,101.78z"></path>
          </div>
          <form onSubmit={this.props.handleSubmit} id="bet_htmlForm">
            <div className="title">
              <TextField
                floatingLabelText="Title"
                value={this.state.title}
                onChange={this.handleChange}
                name="title"
                floatingLabelFixed={this.state.titleLabel}
                required
              />
            </div>
            <div className="description">
              <TextField floatingLabelFixed={this.state.descriptionLabel} floatingLabelText="Description - Try and detail it well!"  multiLine={true} name="description" value={this.state.description} onChange={this.handleChange} id="description_input" rows={5} required />
            </div>
            <div className="category">
              <label htmlFor="category" />
              <select
                name="category"
                id="category_input"
                value={this.state.category}
                onChange={this.handleChange}
                required
              >
                <option>Science & Tech</option>
                <option>Health & Medicine</option>
                <option>Politics</option>
              </select>
            </div>
            <div className="wager">
              <label htmlFor="wager" />
              <TextField floatingLabelFixed={this.state.wagerLabel} floatingLabelText="Wager Amount" type="number" name="wager" value={this.state.wager} onChange={this.handleChange} id="wager_input" required />
            </div>
            <div className="duration">
              <label htmlFor="Duration"></label>
              <DatePicker container="inline" value={this.state.Duration} onChange={this.handleDateChange} id="duration" floatingLabelText="Select End Date" mode="landscape" />
            </div>
            <div className="submit">
              <RaisedButton type="submit" label="Create New Bet" id="form_button" />
            </div>
          </form>
        </div>
      </styledDiv>
    )
  }
}

export default AddBet;
