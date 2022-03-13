import Header from '../header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dog from '../dog/Dog';
import Dogs from '../dogs/Dogs';
import Search from '../search/Search';


function App() {
  return (
   <>
   <Header/>
   <Dog/>
   <Dogs/>
   <Search/>
  
   </>
  );
}

export default App;
