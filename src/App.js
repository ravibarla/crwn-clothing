import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    //aware of authentication is changed
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //check if user signs in
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          //listen or subscribe for any changes to the data and get the first state of data
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
