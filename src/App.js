
import './App.css';
import Auth from './container/Auth';
import Header from './container/Header';
import { UserContextProvider } from './context/userContext';
function App() { 
 return (
    <UserContextProvider>
        <div className='ui contianer'>
            <Header />
            <Auth />
        </div>
        </UserContextProvider>
    )
}
export default App;