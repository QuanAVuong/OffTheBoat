import configureStore from '../store/configureStore';
import {fetchUser} from '../actions/stepActions';



let store = configureStore();

export  function onUsersEnter() {
	store.dispatch(fetchUser());
}
