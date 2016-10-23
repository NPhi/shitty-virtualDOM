import {combineReducers} from '../utils/redux';

import contacts from './contacts';
import editor from './editor';
import collapsedSupIds from './collapsedSupIds';
import editableId from './editableId';

export default combineReducers({
	contacts,
	editor,
	editableId,
	collapsedSupIds,
});