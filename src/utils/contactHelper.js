import Tree from './tree';

export function convertContactToTree(data){
	let tree = new Tree();

	data.forEach(contact => {
	    if(tree.root && tree.contains(contact.id)){
	    	return; //do nothing
	    }

	    if(contact.superiorId === undefined){
	       return tree.add(contact);
	    }
	    tree.add(contact,contact.superiorId)
	})

	return tree;
};

export function fullName(first,name){
	return first + ' ' + name;
}

