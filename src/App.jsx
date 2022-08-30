import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutAs from './pages/AboutAs';
import Products from './pages/Products';
import Layout from './components/Layout';
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';

export const App = () => {
  
  return (
  
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutAs />}/>
        <Route path="products/*" element={<Products />}/>
        <Route path="search" element={<SearchResults />}/>
      </Route>
      <Route path='*' element={<NotFound />}/> 
      
      {/* <Route path="/account" element={<AccountLayout />}>
        <Route path="profile" element={<Profile />}/>
        <Route path="edit" element={<ProfileEdit />}/>
      </Route>
 */}
    </Routes>
 
  )
}

