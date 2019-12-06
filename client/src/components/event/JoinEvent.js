import React from 'react';

const JoinEvent = props => {
  return (
    <div className='center-align'>
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
                  type='text'
                  id='name'
                  className='validate'
                  value={props.name.value}
                  name='name'
                  onChange={props.onChange}
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
                  Join Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinEvent;
