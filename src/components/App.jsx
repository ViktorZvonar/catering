import Container from './Container/Container';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Offers = lazy(() => import('./Offers/Offers'));
const Kontakts = lazy(() => import('./Kontakts/Kontakts'));

export const App = () => {
  return (
    <Router basename="/">
      <Suspense fallback={<p>Wait! I'm loading...</p>}>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Offers />} />
            <Route path="/o-nas" element={<Home />} />
            <Route path="/kontakt" element={<Kontakts />} />
          </Routes>
        </Container>
        <Footer />
      </Suspense>
    </Router>
  );
};
