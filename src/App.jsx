import './App.css'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/Homepage/homepage'

function App() {
  return (
    <>
    <Router>
     <Homepage/>
     </Router>
    </>
  )
}
export default App
