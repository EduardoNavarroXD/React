// Componente pai
import './App.css';

//importar o componente filho
import FunctionalComponent from './assets/components/FuncionalComponents';
import ClassComponent from './assets/components/ClassComponent';
import PropsExample from './assets/components/PropsExample';

function App() {
  return (
    <>
    <h1>Hello World React</h1>
    <FunctionalComponent />
    <ClassComponent/>
    <PropsExample nome="Dudu" idade={19}/>
    </>
  )
}

export default App
