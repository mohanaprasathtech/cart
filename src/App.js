import { useState } from 'react';
import './App.css';
import Remote from './Components/Remote';
import Video from './Components/Video';

function App() {
  const[off,setoff]=useState(false);
  const[count,setcount]=useState(90);
  const[volumes,setvolume]=useState(0.500);
  const[videos,setvideos]=useState([
    {
    id:0,
    url:'https://youtu.be/Kb8CW3axqRE'
  },
  {
    id:1,
    url:'https://youtu.be/SMKPKGW083c'
  },
  {
    id:2,
    url:'https://youtu.be/Zv11L-ZfrSg'
  },
  {
    id:3,
    url:'https://youtu.be/LXb3EKWsInQ'
  }, {
    id:4,
    url:'https://youtu.be/linlz7-Pnvw'
  },
  {
    id:5,
    url:'https://youtu.be/lCa4soKWu-A'
  },
  {
    id:6,
    url:'https://youtu.be/c2NmyoXBXmE'
  },{
    id:7,
    url:'https://youtu.be/glENND73k4Q'
  },{
    id:8,
    url:'https://youtu.be/LiiYMEWKVnY'
  },{
    id:9,
    url:'https://youtu.be/nFdBNJsW46Y'
  },
  {
    id:10,
    url:'https://youtu.be/ejgpomz8eUs'
  },
  {
    id:11,
    url:'https://youtu.be/XH6ER3cNrCY'
  }
]);
const[index,setindex]=useState(0);
function haddleup() {
  setindex(index+1)
}
  function hadnledown() {
    setindex(index-1)
  }
  function handleswitch() {
    setoff(!off);
  }
  function handlesleep() {
    alert("The channel will off in 10 seconds");
    setTimeout(()=>{
      setoff(false);
    },10000)
  }
  function handlebright() {
    setcount(count+20)
  }
  function handledecrease() {
    setcount(count-20)
  }
  function handlevolume() {
    setvolume(volumes+0.100);
  }
  function handlevolumedecrease() {
    setvolume(volumes-0.100);
  }
  return (
    <div className="App">
      <div className="row">
      <div style={{filter:`brightness(${count}%)`}} className="col-md-8 col-sm-6">
        { off && <Video videos={videos[index].url} volumes={volumes}></Video> }
        {!off && <div><img className="picture" src="https://www.pinclipart.com/picdir/big/94-948489_tv-border-frame-transparent-clipart.png" alt="" srcset="" /></div> }
        { !off && <div className="text-center"><h2 style={{color:"black",position:"absolute",left:"430px",top:"220px"}}>Switched off</h2></div> }
      </div>  
      <div className="col-md-4 col-sm-6">
      <Remote handleswitch={handleswitch} 
      handlesleep={ handlesleep } 
      handlebright={handlebright} 
      handledecrease={handledecrease} 
      handlevolume={handlevolume}
      handlevolumedecrease={handlevolumedecrease}
      haddleup={haddleup}
      hadnledown={hadnledown}></Remote>
      </div>
      </div>
    </div>
  );
}

export default App;
