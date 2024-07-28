import Container from './Container/Container';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import Loader from './Loader/Loader';

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Offers = lazy(() => import('./Offers/Offers'));
const Kontakts = lazy(() => import('./Kontakts/Kontakts'));
const OfferDetails = lazy(() =>
  import('../components/Offers/OfferItem/OfferDetails/OfferDetails')
);

export const App = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Loader />
        </div>
      }
    >
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Offers />} />
          <Route path="/o-nas" element={<Home />} />
          <Route path="/kontakt" element={<Kontakts />} />
          <Route path="/details/:id" element={<OfferDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Suspense>
  );
};
