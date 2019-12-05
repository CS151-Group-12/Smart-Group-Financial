import axios from 'axios';

import {
  attemptCreateEventSuccessfully,
  attemptCreateEventFailed
} from '../../actions/event/attemptCreateEventAction';

<<<<<<< HEAD
import { HOST, EVENT_URI } from "../../constant";
=======
import { HOST, EVENT_URI } from '../../constant';
>>>>>>> complete create-event function

export const attemptCreateEvent = eventData => dispatch => {
  axios
    .post(`${HOST}${EVENT_URI}`, eventData)
    .then(res => {
      console.log(res.data);
      dispatch(attemptCreateEventSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptCreateEventFailed(err));
    });
};
