import React from 'react'

const SetBg = ({bg}) => {
  return (
    <img src={bg} className='w-full h-full object-cover absolute
    z-10 left-0 bottom-0 right-0' />
  );
};
export default SetBg
