import {createStore} from './utils/redux';
import reducer from './reducers';
import data from './data';
import {convertContactToTree} from './utils/contactHelper';


const store = createStore(reducer,{
	contacts: convertContactToTree(data),
});

export default store;