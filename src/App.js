
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import './componets/defaultLayout/defaultlayout.css'
import './container/layout/layout.css'
import './container/pages/pages.css'
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
   <AllRoutes/>
    </div>
  );
}

export default App;
