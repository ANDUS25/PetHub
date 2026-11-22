import React from 'react';
import { HeaderContainer, ScrollViewContainer } from '../../Container/index';
import { Title } from '../../utils/Strings';
import PetsGridView from './PetsGridView';

const Pets: React.FC = () => {
  return (
    <ScrollViewContainer>
      <HeaderContainer back={true} header={Title.PETS} Drawer={true} />
      <PetsGridView mainPetName={Title.DOG} />
      <PetsGridView mainPetName={Title.CAT} />
      <PetsGridView mainPetName={Title.BIRD} />
      <PetsGridView mainPetName={Title.FISH} />
    </ScrollViewContainer>
  );
};

export default Pets;
