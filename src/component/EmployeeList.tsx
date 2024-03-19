import './EmployeeList_style.css';
import {IEmployee} from './Employee_type';

type Props = {
    list: IEmployee[];
    onDeleteClickHnd: (data: IEmployee) => void;
    onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
    const {list, onDeleteClickHnd, onEdit} = props;
    return (
        <div>
            <article>
                <h2 className='list-header'>Employee List</h2>
            </article>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                {list.map((employee) => {
                    return (
                        <tr key={employee.id}>
                            <td>
                                {`${employee.firstName} ${employee.lastName}`}
                            </td>
                            <td>{employee.Age}</td>
                            <td>
                                <div>
                                    <input
                                        type='button'
                                        value='Edit'
                                        onClick={() => onEdit(employee)}
                                    />
                                    <input
                                        type='button'
                                        value='Delete'
                                        onClick={() =>
                                            onDeleteClickHnd(employee)
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default EmployeeList;
