import Header from "./components/Header";
import { useState } from "react";
import MusicPlaylist from "./components/MusicPlaylist";
import MusicPlayer from "./components/MusicPlayer";
import { musicData } from "./data";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  return (
    <>
      <div className="min-h-scree bg-gray-950">
        <Header setSidebar={setSidebar} sidebar={sidebar} />
        <MusicPlaylist
          sidebar={sidebar}
          setSidebar={setSidebar}
          curIndex={curIndex}
          setCurIndex={setCurIndex}
        />

        <MusicPlayer curIndex={curIndex} setCurIndex={setCurIndex} />
      </div>
    </>
  );
};

export default App;
