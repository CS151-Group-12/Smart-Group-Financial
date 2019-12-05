import React from 'react';

const CreateEvent = props => {
  return (
    <div className='center-align'>
      <div className='col s12' style={{ paddingLeft: '11.250px' }}>
        <h3>
          <b>Create New Event</b>
        </h3>
      </div>
      <div
        style={{ height: '75vh', width: '75vh' }}
        className='container valign-wrapper '
      >
        <div style={{ marginTop: '4rem' }} className='row'>
          <div className='col s12 '>
            <form className='col s12' onSubmit={props.onClick}>
              <div className='input-field col s12'>
                <input
                  placeholder='Event Name'
                  onChange={props.onChange}
                  id='name'
                  value={props.name.value}
                  type='text'
                  name='name'
                />
              </div>
              <div className='input-field col s12'>
                <input
                  placeholder='Start Date'
                  onChange={props.onChange}
                  id='startDate'
                  value={props.startDate.value}
                  type='text'
                  name='startDate'
                />
              </div>
              <div className='input-field col s12'>
                <input
                  placeholder='End Date'
                  onChange={props.onChange}
                  id='endDate'
                  value={props.endDate.value}
                  type='text'
                  name='endDate'
                />
              </div>
              <div className='input-field col s12'>
                <input
                  placeholder='Location'
                  onChange={props.onChange}
                  id='location'
                  value={props.location.value}
                  type='text'
                  name='location'
                />
              </div>

              <div className='col s12' style={{ paddingLeft: '11.250px' }}>
                <button
                  style={{
                    width: '120px',
                    borderRadius: '2px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem'
                  }}
                  type='submit'
                  className='btn btn-large waves-effect waves-light hoverable blue accent-3'
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
