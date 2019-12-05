import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import EditCategoryPage from '../EditCategory/EditCategoryForm';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function EditCategoryModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='col s1 offset-s6'>
      <button
        style={{
          width: '250px',
          borderRadius: '10px',
          letterSpacing: '1px',
          marginTop: '1rem'

          // marginRight: '1rem'
        }}
        onClick={handleOpen}
        type='submit'
        className='btn btn-large waves-effect waves-light hoverable blue accent-3'
      >
        Edit
      </button>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <EditCategoryPage
            close={handleClose}
            eventID={props.eventID}
            edit={props.edit}
          />
        </div>
      </Modal>
    </div>
  );
}
