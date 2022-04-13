/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
 export function off(eventType: string, listener: EventListenerOrEventListenerObject) {
    document.removeEventListener(eventType, listener);
}

export function on(eventType: string, listener: EventListenerOrEventListenerObject) {
    document.addEventListener(eventType, listener);
}

export function trigger(eventType: string, data: any = {}) {
    const event = new CustomEvent(eventType, { detail: data });
    document.dispatchEvent(event);
}
