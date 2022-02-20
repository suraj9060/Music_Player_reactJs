import { useEffect, useState } from 'react';
// import { appData } from '../../server/mock';
import './App.css';
import AudioLish from './components/AudioList/AudioLish';
import FixFooter from './components/fix-footer/FixFooter';
import Header from './components/Header/Header';
import SearchInput from './components/SearchInput/SearchInput';
import Tabs from './components/Tabs/Tabs';
import { baseUrl } from './config';

function App() {
  const [list, setList] = useState(false)
  const [appData, setAppData] = useState({})
  const [audioList , setAudioList] = useState([])

  const onBackButtonPress = () => {
    setList(false)
  }

  const onItemSelect = (tab, type) => {
    const audioList = appData[tab][type]
    setAudioList(audioList)
    setList(true)
  }

  useEffect(() => {
    fetch(`${baseUrl}/song`)
      .then(res=> res.json())
      .then(jsonResp => {
        console.log({ jsonResp });
        setAppData(jsonResp.appData);
      })
      .catch(error => {
      console.log({error})
    })
 },[])

  return (
    <div className="App m-20 app-quote">
      <Header />
      <h2>Search the best Music for your choice</h2>
      <SearchInput />
      <Tabs onItemSelect={onItemSelect} tabData={appData["homeScreen"]} />
      {list && (
        <AudioLish
          audioList={audioList}
          onBackButtonPress={onBackButtonPress}
        />
      )}
      {/* <button onClick={() => setList(true)}>btn</button> */}
      <FixFooter />
    </div>
  );
}

export default App;
