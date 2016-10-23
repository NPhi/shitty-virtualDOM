import {createElement,createVirtualDOM} from './utils/virtualDOM';
import store from './configStore';

//components
import CartList from './components/CartList';
import PopupEditor from './components/PopupEditor';

//listen to the change of store's state
store.subscribe(render);

render();

function render(){
	const {contacts,editor : {isOn,payload,isEditing},editableId,collapsedSupIds} = store.getState();

	const root = document.getElementById('root');
	
	const App = createVirtualDOM('ul',{},CartList({contactNode : contacts.root,editableId,collapsedSupIds}));

	root.innerHTML = ''; //reset the view to re-render all components. Not efficient :(

	root.appendChild(createElement(App));

	//editor is on
	if(isOn){
		root.appendChild(createElement(PopupEditor({payload,isEditing})));
	}

}

