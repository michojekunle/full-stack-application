import React from 'react'
import Navigation from "../Navigation/Navigation";
import Logo from '../Logo/Logo';
import Rank from '../rank/Rank';
import LinkForm from '../linkForm/LinkForm';

const Dashboard = () => {
  return (
    <div>
        <Navigation />
        <Logo/>
        <Rank/>
        <LinkForm/>
    </div>
  )
}

export default Dashboard