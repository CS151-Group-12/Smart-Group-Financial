import React, { Component } from 'react';
import { getTokenFromLocalStorage } from '../../../utils';

class AddCategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventID: props.eventID,
      userID: getTokenFromLocalStorage('userID'),
      category: '',
      moneyAmount: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.contribute(this.state);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-5 mx-auto'>
            <form noValidate>
              <h5 className='h3 mb-3 font-weight-normal'>Add New Category</h5>
              <div className='form-party'>
                <label htmlFor='category'>Category</label>
                <input
                  type='text'
                  className='form-control'
                  name='category'
                  placeholder='Enter Category Name'
                  value={this.state.category}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-party'>
                <label htmlFor='moneyAmount'>Amount of Money</label>
                <input
                  type='text'
                  className='form-control'
                  name='moneyAmount'
                  placeholder='Enter amount you pay'
                  value={this.state.moneyAmount}
                  onChange={this.onChange}
                />
              </div>
              <button
                onClick={this.onSubmit}
                className='btn btn-lg btn-primary btn-block'
              >
                Add New category
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCategoryPage;
