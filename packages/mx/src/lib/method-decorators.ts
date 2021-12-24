export function On(eventName: string) {
    return function (target: any, eventHandler: string) {
        target.__events = target.__events || [];
        target.__events.push({ eventName, eventHandler });
    };
}

export function Dispatch(eventName: string) {
    return function (target: any, eventDispatch: string) {
        target.__dispatchEvents = target.__dispatchEvents || [];
        target.__dispatchEvents.push({ eventName, eventDispatch });
    };
}
