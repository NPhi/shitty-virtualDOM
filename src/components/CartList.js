import {createVirtualDOM} from '../utils/virtualDOM';

//Components
import ContactCart from './ContactCart';

function CartList({contactNode,editableId,collapsedSupIds}){

	const isNotCollapsed = checkSupsNotCollapsed(collapsedSupIds,contactNode.content.id);

	let children = [ContactCart({contact: contactNode.content,editableId,isNotCollapsed})];

	if(contactNode.children.length > 0 && isNotCollapsed){

		const subordinates = contactNode.children.reduce((subList,childNode) => {

			return [...subList,CartList({contactNode: childNode,editableId,collapsedSupIds})];

		},[]);
		
		children.push(createVirtualDOM('ul',{},subordinates));
	}

	return createVirtualDOM('li',{},children);
}

function checkSupsNotCollapsed(collapsedSupIds,currentId){
	return collapsedSupIds.find(id => id === currentId) === undefined
}


export default CartList;