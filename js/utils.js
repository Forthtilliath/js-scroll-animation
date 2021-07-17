let lastScroll = 0;

export const wait = (fn, timeToWait = .5) => {
    const time = +new Date();
    if (time > lastScroll + timeToWait * 1000) {
        fn();
        lastScroll = time;
    }
};

