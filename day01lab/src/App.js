import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="conntainer">
      <h1>Thông tin sinh viên</h1>
      <div className='alert alert-danger' role='alert'>
        Họ và tên: Nguyễn Văn Huỳnh
      </div>
      <div className='alert alert-success' role='alert'>
        Lớp: reactjs-k22cntt
      </div>
      <div className='alert alert-primary' role='alert'>
        Mã sinh viên: 2210900031
      </div>
    </div>
  );
  }


export default App;
