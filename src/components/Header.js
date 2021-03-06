import { useDispatch, useSelector } from 'react-redux';

import * as authActions from '../store/authSlice';
import classes from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.auth.isAuthenticated);

    const logoutHandler = () => {
        dispatch(authActions.logout());
    }

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                <ul>
                    {
                        isLogin && (
                            <>
                                <li>
                                    <a href='/'>My Products</a>
                                </li>
                                <li>
                                    <a href='/'>My Sales</a>
                                </li>
                                <li>
                                    <button onClick={logoutHandler}>Logout</button>
                                </li>
                            </>
                        ) 
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;
