import {useState} from 'react';
import {Pie, PieChart, Tooltip} from 'recharts';
import './EmployeeList_style.css';
import {IEmployee} from './Employee_type';

type Props = {
    list: IEmployee[];
    onDeleteClickHnd: (data: IEmployee) => void;
    onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
    const [search, setSearch] = useState('');
    const {list, onDeleteClickHnd, onEdit} = props;
    return (
        <div>
            <article>
                <h2 className='list-header'>Employee List</h2>
            </article>
            <input
                type='text'
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Name'
                className='search-bar'
            />
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                {list
                    .filter((employee) => {
                        return search.toLowerCase() == ''
                            ? employee
                            : employee.firstName.toLowerCase().includes(search);
                    })
                    .map((employee) => {
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
            <div className='pie-div-class'>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey='Age'
                        isAnimationActive={false}
                        data={list}
                        cx='50%'
                        cy='50%'
                        outerRadius={80}
                        fill='#8884d8'
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default EmployeeList;
