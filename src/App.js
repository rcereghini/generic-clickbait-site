import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";

import "./App.css";

class App extends React.Component {
  // componentDidMount() {
  //   const { setCurrentUser } = this.props;

  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //         });
  //       });
  //     }

  //     setCurrentUser(userAuth);
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" render={HomePage} />
          <Route exact path="/article" component={ArticlePage} />
          {/* <Route exact path='/shop' component={ShopPage} /> 
          <Route exact exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInOnlyPage />)} /> 
          <Route exact exact path='/signup' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignUpOnlyPage />)} />  */}{" "}
          */}
        </Switch>
      </div>
    );
  }
}

export default App;
