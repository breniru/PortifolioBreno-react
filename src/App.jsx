import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Meusprojetos from './components/Meusprojetos'
import Sobremim from './components/Sobremim'
import Itens from './components/Itens';

function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/sobre-mim",
      element: <Sobremim/>
    },
    {
      path: "/meus-projetos",
      element: <Meusprojetos/>
    },
    {
      path: "/habilidades",
      element: <Itens/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
