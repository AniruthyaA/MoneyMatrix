import * as react from 'react'
import './App.css'
import './index.css'
import {Route,Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import AmznStock from './Pages/AmznStock'
import MsftStock from './Pages/MsftStock'
import ApplStock from './Pages/ApplStock'
import IbmStock from './Pages/IbmStock'
import Pagenotfound from './Pages/Pagenotfound'
import SignInSide from './Pages/SignInSide'
import SignUp from './Pages/Signup'
export default function App(){
   return (
    <>
    <Routes>
     <Route  path='/' element={<SignInSide/>}/>
      <Route path='/SignInSide' element={<SignInSide/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/AmznStock' element={<AmznStock/>}/>
      <Route path='/MsftStock' element={<MsftStock/>}/>
      <Route path='/ApplStock' element={<ApplStock/>}/>
      <Route path='/IbmStock' element={<IbmStock/>}/>
      <Route path='/*' element={<Pagenotfound/>}/> 
    </Routes>
    </> 
    );
}