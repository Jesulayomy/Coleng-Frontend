import Resources from '@/components/Resources';
import React from 'react';


export const metadata = {
  title: 'Resource',
};

const page = ({ params }) => {
  return (
    <Resources book={params.id}/>
  );
};

export default page;
