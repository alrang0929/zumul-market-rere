import React from 'react';
import SubTitle from '../../common/SubTitle';
import CardList from '../../common/CardList';
import { DivBox } from '../../../styles/box';

function RequestList(props) {
  return (
    <>
<<<<<<< HEAD
      <ContentBox className="reqiest-list">
=======
      <DivBox className='reqiest-list'>
>>>>>>> feature/product
        <SubTitle
          subTitle={'지금 사람을 구하고 있어요!'}
          linkText={'더 보기+'}
        />
        <CardList type={'board'} />
      </DivBox>
    </>
  );
}

export default RequestList;
