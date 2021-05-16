import {Suspense} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import NavBar from './components/NavBar'



function App() {
  return (
<Suspense fallback="Loading...">
{/* <NavBar/> */}
<Header/>
<Main /> 
</Suspense>
  );
}

export default App;
