// import Layout from 'components/Layout';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;