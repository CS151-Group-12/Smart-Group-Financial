import React, { Component } from 'react';

class AddMemberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyID: this.props.partyID,
      create: this.props.create,
      email: '',
      endDate: '',
      startDate: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div class='col-md-6 mt-5 mx-auto'>
            <form noValidate>
              <h5 className='h3 mb-3 font-weight-normal'>New Event</h5>
              <div className='form-party'>
                <label htmlFor='name'>Name of Event</label>
                <input
                  type='text'
                  class='form-control'
                  name='name'
                  placeholder='Enter Name'
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-party'>
                <label htmlFor='date'>Start Date</label>
                <input
                  type='text'
                  className='form-control'
                  name='startDate'
                  placeholder='Start'
                  value={this.state.startDate}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-party'>
                <label htmlFor='date'>End Date</label>
                <input
                  type='text'
                  className='form-control'
                  name='endDate'
                  placeholder='End'
                  value={this.state.endDate}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-party'>
                <label htmlFor='date'>Location</label>
                <input
                  type='text'
                  className='form-control'
                  name='location'
                  placeholder='Location'
                  value={this.state.location}
                  onChange={this.onChange}
                />
              </div>
              <button
                onClick={() => this.state.create(this.state)}
                className='btn btn-lg btn-primary btn-block'
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMemberForm;
