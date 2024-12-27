import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/index';
import Signup from './pages/Signup/index';
import Cart from './pages/Cart/index';
import Login from './pages/Login/index';
import ProductDetail from './pages/ProductDetail/index';
import ProductSetting from './pages/ProductSetting/index';
import NotFound from './pages/NotFound/index';
import './styles/index.scss';
import ProfileUser from './pages/ProfileUser';
import ProfileEditPage from './pages/ProfileEdit';
const App = () => {

  return (
    <>

        <Router>
          <Routes>
            {/* MainLayout 아래에 자식 라우트 정의 */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="cart" element={<Cart />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="product/setting" element={<ProductSetting />} />
              <Route path="user/:id" element={<ProfileUser />} />
              <Route path="user/edit" element={<ProfileEditPage />} />
              {/* <Route path="user/:id/edilt" element={<ProfileEditPage />} /> */}
            </Route>
            {/* 404 페이지 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </>
  );
};

export default App;
