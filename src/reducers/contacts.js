import Tree from '../utils/tree';

const initState = new Tree();

export default function contacts(state = initState,action){
	switch(action.type){
		case 'ADD_CONTACT' : const {newContact} = action;
							 state.add(newContact,newContact.superiorId);
							 return Object.assign(new Tree(),state);

		case 'REMOVE_CONTACT' : state.remove(action.id);
								return Object.assign(new Tree(),state);

		case 'EDIT_CONTACT' : 	const {id,updatedContact} = action;
								let contactNode = state.findBFS(id);
								contactNode.content = Object.assign({},contactNode.content,updatedContact);
								return Object.assign(new Tree(),state);
		default : return state;
	}
}
