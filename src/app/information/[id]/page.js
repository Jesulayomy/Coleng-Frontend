import EachEvent from '@/atomic_components/EachEvent';
import React from 'react';


export const metadata = {
  title: 'Info',
};

const page = (props) => {
  let {id} = props.params;

  return (
    <EachEvent id={id} />
  );
};

export default page;
