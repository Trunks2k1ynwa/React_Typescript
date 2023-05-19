import React, { useEffect } from 'react';
import { Icard } from '../utils/interface';

const Card = ({ title = 'trimg', description = 'fff', image = 'ff', link = 'sdà' }: Icard) => {
  useEffect(() => {
    const input = document.querySelector('input') as HTMLInputElement;
    console.log(input.value);
  }, []);
  return <div></div>;
};

export default Card;
