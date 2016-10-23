const initState = {
	isOn : false,
	isEditing : false, //indicate the opened editor in edit mode or add(peer|sub) mode
	payload: {}, // data for editing or pre-setting data for adding(peer|sub)
}

function editor(state = initState,action){
	switch(action.type){
		case 'OPEN_EDITOR' : const {isEditing,payload} = action;
							 return Object.assign({},state,{isOn : true,isEditing,payload});
		case 'CLOSE_EDITOR' : return Object.assign({},initState);
		default: return state;
	}
}

export default editor;