import AppleItem from './AppleItem'
import '../styles/appleBasket.css';
import { observer } from "mobx-react-lite"

function AppleBasket({ appStore }) {
    const { isPicking, buttonText, eatApple, appleNowList, appleNowListWeight, appleEatenList, appleEatenListWeight, pickApple } = appStore
    const getAppleItem = () => {
        if (appleNowList.length === 0) {
            return <div className="empty-tip" key="empty">苹果篮子空空如也</div>
        } else {
            return appleNowList.map(apple => {
                return <AppleItem apple={apple} key={apple.id} eatApple={eatApple} />
            })
        }
    }
    return (
        <div className="appleBusket" >
            <div className="appleBusket">
                <div className="title">苹果篮子</div>

                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">{appleNowList.length}个苹果，{appleNowListWeight}克
                        </div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">{appleEatenList.length}个苹果，{appleEatenListWeight}克</div>
                    </div>
                </div>
                <div className="appleList">
                    {getAppleItem()}
                </div>
            </div>
            <div className="btn-div">
                <button className={isPicking ? 'disabled' : ''} onClick={() => { pickApple() }}>{buttonText}</button>
            </div>
        </div >
    );
}

export default observer(AppleBasket);