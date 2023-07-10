import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux/es/exports';
import store from './utils/store';
import Navbar from './components/Navbar';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Main from './components/Main';
import WatchPage from './components/WatchPage';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Main/>
      },
      {
        path:'watch',
        element:<WatchPage/>
      },
    ],
  },
]);

function App() {




  return (
      <Provider store={store}>
        <Navbar/>
        <RouterProvider router={appRouter}/>
      </Provider>
  );
}

export default App;
