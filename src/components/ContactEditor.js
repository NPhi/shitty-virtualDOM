import {createVirtualDOM} from '../utils/virtualDOM';

//Components
import DepartmentDropDown from './DepartmentDropDown';

const ContactEditor = ({handleOnChange,contact}) => {

	const children = [
		createVirtualDOM("input",{	type: "text",
									placeholder:"first name",
									value:contact.firstName,
									name: "firstName",
									onChange: handleOnChange,	
								}),
		createVirtualDOM("input",{ 	type: "text",
									placeholder:"last name",
									value:contact.lastName,
									name: "lastName",
									onChange: handleOnChange,
								}),
		DepartmentDropDown({handleOnChange,currentDepartment:contact.department}),
		createVirtualDOM("input",{	type: "text",
									placeholder: "account id",
									value:contact.employeeId,
									name: "employeeId",
									onChange: handleOnChange,
								}),
	];

	return createVirtualDOM("div",{className : "contact-editor"},children);
}

export default ContactEditor;