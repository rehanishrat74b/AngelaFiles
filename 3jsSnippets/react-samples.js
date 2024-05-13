//using ternary operator
<button style={{ backgroundColor: isMouseOver ? 'black' : 'white' }} >Submit</button>
//--------------------------------------------------
return (
  <div className="container">
    {isLoggedIn ? <h1>Welcome</h1> : <Login isRegistered={isRegistered} />}
    {myTime < 20 && <h1>Working too hard</h1>
      //h1 will render only if condition is true
    }
    {myTime < 15 ? <h1>Missing home</h1> : <h2>Its time to sleep</h2>
      //ternary operator. condition ?true : false
    }
  </div>
);




//using arrow function
import dataList from './notesData';
/*const notes = dataList.map(data => {
  return <Note title={data.title} content={data.content} />;
});*/
const notes = dataList.map(data => <Note title={data.title} content={data.content} />);
//------------------------------------------------------

const emojis = emojiList.map((emoji, index) => (
  <Emoji index={index} name={emoji.name} emoji={emoji.emoji} meaning={emoji.meaning} />
));