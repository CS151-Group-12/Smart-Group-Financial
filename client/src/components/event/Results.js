import React from 'react';
import MUIDataTable from 'mui-datatables';
import { Link } from 'react-router-dom';

const Results = props => {
  return (
    <div className='container'>
      <MUIDataTable
        title={'Results'}
        data={props.data}
        columns={props.columns}
        options={props.options}
      />
      <Link to={{ pathname: `/event/${props.eventID}` }}>
        <button
          style={{
            width: '250px',
            borderRadius: '10px',
            letterSpacing: '1px',
            marginTop: '1rem'
          }}
          type='submit'
          className='btn btn-large waves-effect waves-light hoverable blue accent-3'
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default Results;
