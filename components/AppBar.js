import * as React from 'react';
import { Appbar } from 'react-native-paper';
const Header = () => {
return (
    <Appbar.Header style={{marginTop:40, backgroundColor:'indigo'}}>
      
      <Appbar.Content title="Kris TechNews Updates 2022" />
      
    </Appbar.Header>
  );
};
export default Header;