import {useState} from 'react';
import './AddEmployeeForm_style.css';
import {IEmployee} from './Employee_type';

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);

    const {onBackBtnClickHnd, onSubmitClickHnd} = props;

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
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            Age: age,
        };
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    };
    return (
        <div className='form-container'>
            <div>
                <h2>Add Employee Form</h2>
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
                    <input type='submit' value='Confirm' />
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;
