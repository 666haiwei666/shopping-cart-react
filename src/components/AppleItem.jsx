import '../styles/appleItem.css';
import applePng from '../images/apple.png'
import { observer } from "mobx-react-lite"

function AppleItem({ apple, eatApple }) {
  return (
    <div className="appleItem">
      <div className="apple"><img src={applePng} alt="" /></div>
      <div className="info">
        <div className="name">红苹果 - {apple.id + 1} 号</div>
        <div className="weight">{apple.weight}克</div>
      </div>
      <div className="btn-div">
        <button onClick={() => eatApple(apple.id)}> 吃掉 </button>
      </div>
    </div>
  );
}

export default observer(AppleItem);