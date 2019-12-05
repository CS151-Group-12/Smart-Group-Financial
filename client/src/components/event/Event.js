import React from 'react';
import MUIDataTable from 'mui-datatables';
import AddCategoryModal from './AddCategory/AddCategoryModal';
import EditCategoryModal from './EditCategory/EditCategoryModal';

const Event = props => {
  return (
    <div className='container'>
      <MUIDataTable
        title={'Category Table'}
        data={props.data}
        columns={props.columns}
        options={props.options}
      />

      <div
        style={{
          width: '190px',
          marginTop: '1rem'
        }}
      >
        <AddCategoryModal
          eventID={props.eventID}
          contribute={props.contribute}
        />
        <EditCategoryModal eventID={props.eventID} edit={props.edit} />
        <div className='row'>
          <button
            style={{
              width: '250px',
              borderRadius: '10px',
              letterSpacing: '1px',
              marginTop: '1rem'
            }}
            onClick={props.calculate}
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
