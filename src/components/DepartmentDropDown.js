import {createVirtualDOM} from '../utils/virtualDOM';

const departments = [
	"Management",
	"IT",
	"Delivery",
	"Technology Services",	
];

const DepartmentDropDown = ({handleOnChange,currentDepartment}) => {

	const children = departments.map(depart => {

		return createVirtualDOM("option",{value: depart,selected : (currentDepartment === depart)},depart);
	});

	return createVirtualDOM("select",{	name: "department",
										onChange: handleOnChange},children);
};

export default DepartmentDropDown;