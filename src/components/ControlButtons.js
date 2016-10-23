import {createVirtualDOM} from '../utils/virtualDOM';

const ControlButtons = ({deleteContact,handleOpenEditor,isRoot = false}) => {
	const children = [
		createVirtualDOM('button',
						{onClick : () => handleOpenEditor('edit')},
						'Edit'),
		(isRoot ? '' : createVirtualDOM('button',
										{onClick : () => handleOpenEditor('addPeer')},
										'Peer')),
		createVirtualDOM('button',
						{onClick : () => handleOpenEditor('addSub')},
						'Sub'),
		(isRoot ? '' : createVirtualDOM('button',
										{onClick : deleteContact},
										'Delete')),
	];
	return createVirtualDOM('div',{className: 'contact-btns'},children);
};

export default ControlButtons;