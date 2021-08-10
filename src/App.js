import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css';
import { WorkflowEditor } from './WorkflowEditor';

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <WorkflowEditor />
    );
  }
}
export default App;

