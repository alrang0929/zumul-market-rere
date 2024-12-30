import React from 'react';
import { DivBox } from '../../styles/box';
import { UserInfoWrap } from './components/UserInfo';

export const ProductManagePage = () => {
  return (
    <>
      <div
        className="product-Manage-page"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <UserInfoWrap />
        <DivBox>
          <SellProductList />
        </DivBox>
      </div>
    </>
  );
};
