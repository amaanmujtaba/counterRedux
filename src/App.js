import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";


import { authActions } from "./store/index";
import { UseSelector, useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth)
  console.log(isAuth);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>

  );
}

export default App;
