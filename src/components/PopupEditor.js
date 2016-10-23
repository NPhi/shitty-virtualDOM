import {createVirtualDOM} from '../utils/virtualDOM';
import {closeEditor} from '../actions/editorActions';
import {editContact,addContact} from '../actions/contactsActions';
import store from '../configStore';

//Components
import ContactEditor from './ContactEditor';

const contactTemplate =   {
    "firstName": "",
    "lastName": "",
    "title": "",
    "department": "Management",
    "project": "",
    "avatar": "avatar.png",
    "employeeId": "",
 };

const PopupEditor = ({payload,isEditing}) => {
	let state = Object.assign({},contactTemplate,payload);
	//update state when inputs are changed in ContactEditor
	function handleOnChange(event){
		state[event.target.name] = event.target.value;
	}

	function handleCloseEditor(){
		saveContact();
		store.dispatch(closeEditor());
	}

	function saveContact(){
		if(isEditing){
			return store.dispatch(editContact(state.id,state));
		}
		return store.dispatch(addContact(state));
	}

	const children = [
		createVirtualDOM("div",{className :"editor-mask",onClick : handleCloseEditor},""),
		ContactEditor({contact: state,handleOnChange}),
	];

	return createVirtualDOM("div",{},children);
}

export default PopupEditor;