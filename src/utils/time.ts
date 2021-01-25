export const timeDifferenceInMsToNow = (date: string) => {
    const timePrev = new Date(date).getTime();
    const timeNow = new Date().getTime();

    return timeNow - timePrev;
};
