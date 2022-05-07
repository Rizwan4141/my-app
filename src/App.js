import React from 'react';
import './App.css';
import Listkey from './Components/Listkey';
import ListTest from './Components/ListTest';
import Routing from './Components/Routing';
import Routingtry from './Components/Routingtry';
import Validation from './Components/Validation';
// import Try from './Components/Try';
// import { Function } from './Components/Function';
// import {ClassComp} from './Components/ClassComp';
// import { Props } from './Components/Props';
// import ClassProjet from './Components/ClassProjet';
// import LifeCycle from './Components/LifeCycle';
// import LifecysleFunct from './Components/LifecysleFunct';
// import Mounting from './Components/Mounting';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      name:"Rizwan",
      email:"rafe4141@gmail.com"
    }
  }
  render(){
    return (
      <div className="App">
        {/* <Routingtry/> */}
        <Validation/>
        {/* <ListTest/> */}
        {/* <Listkey/> */}
        {/* <Routing/> */}
        {/* <Try/> */}
       
        {/* <LifecysleFunct/> */}
      {/* <LifeCycle/> */}
        {/* <Mounting/> */}
       {/* <Function/> */}
       {/* <ClassComp/> */}
       {/* <Props text="Hello Props"/> */}
         {/* <ClassProjet name={this.state.name}/> 
       <ClassProjet email={this.state.email}/>
       <button onClick={()=>this.setState({name:"rafe"})}>Update Name</button>
       <button onClick={()=>this.setState({email:"rizwan@gmail.com"})}>Update Gmail</button>  */}
      </div>
    );
  }
  
}

export default App;
