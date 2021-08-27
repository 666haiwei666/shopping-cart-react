import { action, makeObservable, observable, computed } from "mobx"

export default class appStore {
    constructor() {
        this.appleList = [
            {
                id: 0,
                weight: 233,
                isEaten: false
            },
            {
                id: 1,
                weight: 235,
                isEaten: true
            },
            {
                id: 2,
                weight: 256,
                isEaten: false
            }
        ]
        this.buttonText = '摘苹果'
        this.isPicking = true;
        makeObservable(this, {
            isPicking: observable,
            buttonText: observable,
            appleList: observable,
            appleNowList: computed,
            appleNowListWeight: computed,
            appleEatenList: computed,
            appleEatenListWeight: computed,
            pickApple: action.bound,
            eatApple: action.bound
        })
    }
    get appleEatenList() {
        return this.appleList.filter(apple => apple.isEaten)
    }
    get appleNowList() {
        return this.appleList.filter(apple => !apple.isEaten)
    }
    get appleEatenListWeight() {
        return this.appleEatenList.reduce((total, apple) => {
            return total + apple.weight
        }, 0)
    }
    get appleNowListWeight() {
        return this.appleNowList.reduce((total, apple) => {
            return total + apple.weight
        }, 0)
    }
    pickApple = () => {
        this.isPicking = true
        this.buttonText = '正在采摘...'
        setTimeout(() => {
            let weight = Math.floor(200 + Math.random() * 50);
            this.isPicking = false;
            this.buttonText = '摘苹果';
            this.appleList.push({
                id: this.appleList.length,
                weight: weight,
                isEaten: false
            });
        }, 500)
    }
    eatApple = (appleId) => {
        let targetIndex = '';
        this.appleList.forEach((apple, index) => {
            if (apple.id == appleId) {
                targetIndex = index
            }
        });
        this.appleList[targetIndex].isEaten = true;
    }
}