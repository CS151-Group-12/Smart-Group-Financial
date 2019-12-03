import React from 'react';
import { Link } from 'react-router-dom';

const CreateNewCategory = props => {
  return (
    <div className='container'>
      <div style={{ marginTop: '4rem' }} className='row'>
        <div className='col s8 offset-s2'>
          <div className='col s12' style={{ paddingLeft: '11.250px' }}>
            <h4>
              <b>New Category Form</b>
            </h4>
          </div>
          <form noValidate onSubmit={props.onClick}>
            <div className='input-field col s12'>
              Category Name
              <input
                onChange={props.onChange}
                value={props.category}
                id='category'
                type='category'
                name='category'
              />
              {/* <label htmlFor='email'>Email</label> */}
            </div>
            <div className='input-field col s12'>
              Amount of Money
              <input
                onChange={props.onChange}
                value={props.moneyAmount}
                id='moneyAmount'
                type='moneyAmount'
                name='moneyAmount'
              />
            </div>
            <div className='col s12' style={{ paddingLeft: '11.250px' }}>
              <button
                style={{
                  width: '150px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                  marginTop: '1rem'
                }}
                type='submit'
                className='btn btn-large waves-effect waves-light hoverable blue accent-3'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCategory;
