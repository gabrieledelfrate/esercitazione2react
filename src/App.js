import './App.css';
import './components/Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/MyNav'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import MyFooter from './components/MyFooter'


function App() {
  return (
    <div>
      <CustomNavbar /> 
      <Welcome />
      <AllTheBooks />
      <MyFooter />      
    </div>
  );
}

export default App;
