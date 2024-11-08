class SimplePubSub {
    constructor() {
        this.events = {};
    }

    subscribe(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    unsubscribe(event, listener) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(l => l !== listener);
    }

    publish(event, data) {
        if (!this.events[event]) return;
        this.events[event].forEach(listener => listener(data));
    }
}

// 创建 PubSub 实例
const pubSub = new SimplePubSub();

// 定义订阅者
const subscriber1 = (data) => {
    console.log(`Subscriber 1 received: ${data}`);
};

const subscriber2 = (data) => {
    console.log(`Subscriber 2 received: ${data}`);
};

// 订阅事件
pubSub.subscribe('event1', subscriber1);
pubSub.subscribe('event1', subscriber2);

// 发布事件
pubSub.publish('event1', 'Hello, World!');

// 取消订阅
pubSub.unsubscribe('event1', subscriber1);

// 发布事件
pubSub.publish('event1', 'Hello again!');

// 输出应该是如下的样式
/*
Subscriber 1 received: Hello, World!
Subscriber 2 received: Hello, World!
Subscriber 2 received: Hello again!
*/
