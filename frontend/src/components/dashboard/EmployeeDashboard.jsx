import EmployeeList from "./EmployeeList";
import EmployeeStatusBox from "./EmployeeStatusBox";
import Header from "./Header";

function EmployeeDashboard(){
    return(
        <>    
            <Header/>
            <EmployeeStatusBox/>
            <EmployeeList/>
        </>
    )
}

export default EmployeeDashboard