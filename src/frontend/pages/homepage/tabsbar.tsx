import React from 'react'

type Props = {
    label: string;
    page: string;
}

const LinkTabs = ({label}: Props) => {
  return (
    <button>{label}</button>
  )
}


