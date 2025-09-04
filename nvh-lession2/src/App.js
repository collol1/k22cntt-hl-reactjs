import './App.css';
import NvhJsxExpression from './components/NvhJsxExpression';
import NvhFuncomp from './components/NvhFuncomp';
import NvhClasscomp from './components/NvhClasscomp';

function App() {
  return (
    <div className="container border">
      <h1> làm việc với các thành phần cơ bản trong react</h1>
      <hr/>
      
      <NvhJsxExpression/>
      <hr/>
    <NvhFuncomp/>
    
    <NvhFuncomp name="Nguyễn Văn Huỳnh" age="21"></NvhFuncomp>

        <NvhClasscomp ></NvhClasscomp>
        <NvhClasscomp fullName="Nguyễn Văn Huỳnh" company="FitNTU" />
        <NvhClasscomp fullName="Nguyễn Văn Huỳnh" company="K22CNTx" />
    </div>
  );
}

export default App;
