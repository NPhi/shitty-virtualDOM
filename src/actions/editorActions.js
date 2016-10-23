export function openEditor(payload,isEditing){
	return {
		type: 'OPEN_EDITOR',
		isEditing,
		payload,
	}
}

export function closeEditor(){
	return {
		type: 'CLOSE_EDITOR',
	}
}