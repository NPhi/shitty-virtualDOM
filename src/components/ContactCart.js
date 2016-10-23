import {createVirtualDOM} from '../utils/virtualDOM';
import {removeContact} from '../actions/contactsActions';
import {openEditor} from '../actions/editorActions';
import store from '../configStore';

//Components
import ControlButtons from './ControlButtons';
import ContactCartInfor from './ContactCartInfor';

const ContactCart = ({contact,editableId,isNotCollapsed}) => {

	function deleteContact(){
		return store.dispatch(removeContact(contact.id));
	}

	function editContact(){
		contact = Object.assign({},contact); //prevent far-away reference
		return store.dispatch(openEditor(contact,true));
	}

	function addPeerContact(){
		const {superiorId,department} = contact;
		return store.dispatch(openEditor({superiorId,department},false));
	}

	function addSubContact(){
		const superiorId = contact.id;
		return store.dispatch(openEditor({superiorId},false));
	}

	function handleOpenEditor(type){
		switch(type){
			case 'edit': return editContact();
			case 'addPeer': return addPeerContact();
			case 'addSub' : return addSubContact();
			default: return ; //do nothing
		}
	}

	function collapseSubs(){
		store.dispatch({type: 'ADD_COLLAPSED_ID',id: contact.id});	
	}

	function expandSubs(){
		store.dispatch({type: 'REMOVE_COLLAPSED_ID',id : contact.id});		
	}

	function handleToggleButtons(){
		//remove control buttons when the card is already selected
		const newId =  editableId === contact.id ? undefined : contact.id;
		store.dispatch({type: 'ASSIGN_EDITABLE_ID',id: newId});
	}

	function handleExpandSubs(e){
		//stop contact-card container to catch a `click` event
		e.stopPropagation();
		if(isNotCollapsed){
			return collapseSubs();
		}
		return expandSubs();

	}

	//FIX ME : 
	//isRoot is a short-cut way. 
	//need to be improved by using the tree's root

	const controlButtons = 	contact.id === editableId ? ControlButtons({handleOpenEditor,
																		deleteContact,
																		isRoot : (contact.superiorId === undefined),
											}) : undefined;

	const children = [
		createVirtualDOM('img',{src: '/images/' + contact.avatar}),
		ContactCartInfor({contact}),
		controlButtons,
		createVirtualDOM('button',
						{className: "toggle-btn",
						onClick : handleExpandSubs},isNotCollapsed ? '-' : '+')
	];

	return createVirtualDOM('a',{}, createVirtualDOM('div',
									{className: 'contact-card',
									onClick : handleToggleButtons},children));
};

export default ContactCart;
