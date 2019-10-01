import { createReducer } from '../../app/common/utils/reducerUtils';
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENT } from './eventConstants';

 const initialData = [];
  
  const createEvent = (state, payload) => {
      return [...state, payload.event];
  }

  const updateEvent = (state, payload) => {
      return [...state.filter(event => event.id !== payload.event.id), payload.event]
  }

  const deleteEvent = (state, payload) => {
    return [...state.filter(event => event.id !== payload.eventId)]
  }

 const fetchEvents = (state, payload) => {
   return payload.events
 }  

export default createReducer(initialData, {
      [CREATE_EVENT] : createEvent,
      [UPDATE_EVENT] : updateEvent,
      [DELETE_EVENT] : deleteEvent,
      [FETCH_EVENT]: fetchEvents,
  })