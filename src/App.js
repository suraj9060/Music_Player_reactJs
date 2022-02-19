import { useState } from 'react';
import './App.css';
import AudioLish from './components/AudioList/AudioLish';
import FixFooter from './components/fix-footer/FixFooter';
import Header from './components/Header/Header';
import SearchInput from './components/SearchInput/SearchInput';
import Tabs from './components/Tabs/Tabs';

function App() {
  const [list, setList] = useState(false)
  const onBackButtonPress = () => {
    setList(false)
  }
  return (
    <div className="App m-20 app-quote">
      <Header />
      <h2>Search the best Music for your choice</h2>
      <SearchInput />
      <Tabs />
      {list && <AudioLish onBackButtonPress={onBackButtonPress} />}
      {/* <button onClick={() => setList(true)}>btn</button> */}
      <FixFooter />
    </div>
  );
}

export default App;
