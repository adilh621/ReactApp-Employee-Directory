import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import UserView from "./components/UserView";

class App extends React.Component {


  state = {
    allUsers: [],
    filteredUsers : []
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Form />
        <UserView />
      </div>
    )
  }
}

export default App;
