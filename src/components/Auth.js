import classes from './Auth.module.css';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';



const Auth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state=>state.auth.isAuth);
  
  function handleLogin(){
    dispatch(authActions.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
