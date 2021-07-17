let lastScroll = 0;

export const wait = (fn, timeToWait = 500) => {
    const time = +new Date();
    if (time > lastScroll + timeToWait) {
        fn();
        lastScroll = time;
    }
};

