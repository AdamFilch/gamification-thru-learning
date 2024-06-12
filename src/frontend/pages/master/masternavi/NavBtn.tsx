import React, { ReactNode } from 'react';

type Props = {
  // text: string;
  level: number;
  children: ReactNode;
  nav: string;
};

const NavBtn = ({ children }: Props) => {
  return <button className=" text-justify">{children}</button>;
};

export default NavBtn;
