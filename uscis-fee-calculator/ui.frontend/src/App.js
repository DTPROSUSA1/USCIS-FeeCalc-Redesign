import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import FeeCal from './FeeCal';

// This component is the application entry point
class App extends Page {
  render() {
    return (

     
       <FeeCal />
      
    );
  }
}

export default withModel(App);
