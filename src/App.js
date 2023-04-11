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
import { loader } from './pages/Home/Home'
import Details from './pages/Details/Details';
import RootCatalogPage from './pages/RootCatalog/RootCatalog';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    loader: () => loader(),
    children: [{ index: true, element: <Home />, },
    {
      path: 'catalog', element: <RootCatalogPage />,
      children: [{
        path: ':realestateId', id: 'catalog-id', children: [
          { index: true, element: <Details /> }
        ]
      },{
        path: 'sell', element: <SellingPage />
      },
      { path: 'buy', element: <BuyingPage /> },
    { path: 'rent', element: <RentingPage /> },
      ]
    }
      ,
    { path: 'finance', element: <FinancePage /> },
    { path: 'contacts', element: <ContactsPage /> },
    // { path: 'auth/', element: <AuthenticationPage /> }
    ]
  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
