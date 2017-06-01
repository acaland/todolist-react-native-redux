import  {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  DOWNLOAD_INITIALTODOLIST,
  DOWNLOAD_INITIALTODOLIST_START,
  DOWNLOAD_INITIALTODOLIST_SUCCESS
} from './types';

let nextTodoId = new Date().getTime();  // generiamo un intero random a partire dalla data

const saveTodoToNetwork = (text, id) => {
  fetch('https://todolistmvc-lap2.rhcloud.com/parse/classes/Todo2', {
    method: 'POST',
    headers: {
      'X-Parse-Application-Id': 'TodoListMVC20160611',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: text,
      done: false,
      id: id
    })
  })
  .then((response) => console.log("Saved successfully", response))
  .catch(error => console.log("some error occurred while saving", error))
}


export const addTodo = text => {
  const id = nextTodoId++;
  const action = {
  	type: ADD_TODO,
  	title: text,
    id: id
	};
  saveTodoToNetwork(text, id);
	return action;
};

export const toggleTodo = id => {
  const action = {
    type: TOGGLE_TODO,
    id: id
  }
  return action;
};

export const setVisibilityFilter = filter => {
	return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
}

export const downloadInitialTodolist = () => {
  const loadDataAsync = (dispatch) => {
    // fetch('https://www.dmi.unict.it/~calanducci/LAP2/initialTodolist.json')
    dispatch({ type: DOWNLOAD_INITIALTODOLIST_START });

    fetch('https://todolistmvc-lap2.rhcloud.com/parse/classes/Todo2', {
      headers: {
        'Cache-Control': 'no-cache',
        'X-Parse-Application-Id': 'TodoListMVC20160611'
      }
    })
      .then(response => response.json())
      .then(data => {
          dispatch({
            type: DOWNLOAD_INITIALTODOLIST,
            // payload: data.todolist
            payload: data.results
          });
          dispatch({ type: DOWNLOAD_INITIALTODOLIST_SUCCESS })
        })
      .catch(error => console.log("some error occured", error));
  }
  return loadDataAsync;
};
