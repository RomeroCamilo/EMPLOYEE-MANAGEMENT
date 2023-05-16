import { Link } from 'react-router-dom';

const HomePageView = () => {
  return (
    <div>
      <h1>Employee Management System</h1>
      <Link to={'/employees'}> All Employees </Link>
      <br></br>
      <br></br>
      <Link to={'/tasks'}> All Tasks </Link>
      <br></br>
      <br></br>
      <Link to={'/newemployee'}>New Employee? Click here</Link>
    </div>
  );    
}

export default HomePageView;