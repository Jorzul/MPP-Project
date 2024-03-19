import {useState} from 'react';
import './AddEmployeeForm_style.css';
import {IEmployee} from './Employee_type';

type Props = {
    data: IEmployee;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
    const {data, onBackBtnClickHnd, onUpdateClickHnd} = props;

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [age, setAge] = useState(data.Age);

    const onFirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value);
    };

    const onLastNameChangeHnd = (e: any) => {
        setLastName(e.target.value);
    };

    const onAgeChangeHnd = (e: any) => {
        setAge(e.target.value);
    };

    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const updateData: IEmployee = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            Age: age,
        };
        onUpdateClickHnd(updateData);
        onBackBtnClickHnd();
    };

    return (
        <div className='form-container'>
            <div>
                <h2>Update Employee Form</h2>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>First Name : </label>
                    <input
                        type='text'
                        value={firstName}
                        onChange={onFirstNameChangeHnd}
                    />
                </div>
                <div>
                    <label>Last Name : </label>
                    <input
                        type='text'
                        value={lastName}
                        onChange={onLastNameChangeHnd}
                    />
                </div>
                <div>
                    <label>Age Name : </label>
                    <input type='text' value={age} onChange={onAgeChangeHnd} />
                </div>
                <div>
                    <input
                        type='button'
                        value='Back'
                        onClick={onBackBtnClickHnd}
                    />
                    <input type='submit' value='Update' />
                </div>
            </form>
        </div>
    );
};

export default EditEmployee;
