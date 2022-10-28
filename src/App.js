import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Router/Route/Route';

function App() {
  return (
    <div >
      
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="bottom-center"/>
    </div>
  );
}

export default App;
