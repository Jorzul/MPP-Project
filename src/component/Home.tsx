import {useState} from 'react';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import EmployeeList from './EmployeeList';
import {IEmployee, PageEnum, dummyEmployeeList} from './Employee_type';
import './Home_style.css';

const Home = () => {
    const [employeeList, setEmployeeList] = useState(
        dummyEmployeeList as IEmployee[],
    );

    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

    const onAddEmployeeClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const showListPage = () => {
        setShownPage(PageEnum.list);
    };

    const addEmployeeHnd = (data: IEmployee) => {
        setEmployeeList([...employeeList, data]);
    };

    const deleteEmployee = (data: IEmployee) => {
        const indexToDelete = employeeList.indexOf(data);
        const tempList = [...employeeList];

        tempList.splice(indexToDelete, 1);
        setEmployeeList(tempList);
    };

    const editEmployeeData = (data: IEmployee) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);
    };

    const updateData = (data: IEmployee) => {
        const filterData = employeeList.filter((x) => x.id === data.id)[0];
        const indexOfRecord = employeeList.indexOf(filterData);
        const tempData = [...employeeList];
        tempData[indexOfRecord] = data;
        setEmployeeList(tempData);
    };

    return (
        <>
            <article className='article-header'>
                <header>
                    <h1>React: Simple Laboratory Application</h1>
                    <p>Made my Jorza Ionut</p>
                </header>
            </article>

            <section className='section-content'>
                {shownPage === PageEnum.list && (
                    <>
                        <input
                            type='button'
                            value='Add Employee'
                            onClick={onAddEmployeeClickHnd}
                            className='add-employee-btn'
                        />
                        <EmployeeList
                            list={employeeList}
                            onDeleteClickHnd={deleteEmployee}
                            onEdit={editEmployeeData}
                        />
                    </>
                )}

                {shownPage === PageEnum.add && (
                    <AddEmployee
                        onBackBtnClickHnd={showListPage}
                        onSubmitClickHnd={addEmployeeHnd}
                    />
                )}

                {shownPage === PageEnum.edit && (
                    <EditEmployee
                        data={dataToEdit}
                        onBackBtnClickHnd={showListPage}
                        onUpdateClickHnd={updateData}
                    />
                )}
            </section>
        </>
    );
};

export default Home;
