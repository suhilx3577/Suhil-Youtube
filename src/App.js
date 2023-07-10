import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { Provider } from 'react-redux/es/exports';
import store from './utils/store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Navbar/>
      <Body/>

      </Provider>
    </div>
  );
}

export default App;
