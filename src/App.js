import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

const App = () => {
  const isLogin = useSelector(state => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      {isLogin ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
