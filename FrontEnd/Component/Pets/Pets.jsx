import React from 'react';
import { HeaderContainer, ScrollViewContainer } from '../../Container/index';
import PetsGridView from './PetsGridView';

const Pets = () => {
  return (
    <ScrollViewContainer>
      <HeaderContainer back={true} header={'Pets'} Drawer={true} />
      <PetsGridView mainPetName={'Dog'} />
      <PetsGridView mainPetName={'Cat'} />
      <PetsGridView mainPetName={'Bird'} />
      <PetsGridView mainPetName={'Fish'} />
    </ScrollViewContainer>
  );
};

export default Pets;
