import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';
import { Link } from 'react-router-dom';

const Event = props => {
  return (
    <div className='container'>
      <MUIDataTable
        title={'Category Table'}
        data={props.data}
        columns={props.columns}
        options={props.options}
      />

      <div className='row'>
        <Link to='/new-category-form'>
          <div className='col s8'>
            <button
              style={{
                width: '200px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem'
              }}
              type='submit'
              className='btn btn-large waves-effect waves-light hoverable blue accent-3'
            >
              Add Category
            </button>
          </div>
        </Link>

        <div className='col s6'>
          <button
            style={{
              width: '200px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
              marginTop: '1rem'
            }}
            onClick={props.onClickCalculate}
            type='submit'
            className='btn btn-large waves-effect waves-light hoverable blue accent-3'
          >
            Calculate Final Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
