import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AuthenticationPage from './pages/Auth/AuthenticationPage';
import BuyingPage from './pages/Buying/BuyingPage';
import ContactsPage from './pages/Contacts/ContactsPage';
import FinancePage from './pages/Finance/FinancePage';
import Home from './pages/Home/Home';
import RentingPage from './pages/Renting/RentPage';
import RootLayout from './pages/Root/Root';
import SellingPage from './pages/Selling/Selling';

const router = createBrowserRouter([
  {path:'/',
element:<RootLayout/>,
id: 'root',
children:[{index:true, element:<Home/>},
{path: 'sell', element:<SellingPage/>},
{path: 'buy', element:<BuyingPage/>},
{path: 'rent', element:<RentingPage/>},
{path: 'finance', element:<FinancePage/>},
{path: 'contacts', element:<ContactsPage/>},
{path: 'auth', element:<AuthenticationPage/>}
]
}
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
