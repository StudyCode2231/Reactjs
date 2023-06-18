import './Video.css';

function Video({title,id,channel="Coder Dost",views,time,verified}) {
   
  
  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>
  );
}

export default Video;

//  {/* Step-1 Type :
//       let verify = true;
//       let classJSX;
//       if(verify){
//         classJSX= <div className="channel">{channel}</div>
//       }else{
//         classJSK = <div className="channel">{channel}✅</div>
//       } */}
//       {/*Step-2 of verfication
//        {verified ? <div className="channel">{channel}</div> : <div className="channel">{channel}✅</div> } */}
//       {/*Step-3 :easily way of writing */}