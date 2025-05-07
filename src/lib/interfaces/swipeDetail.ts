export interface SwipeDetail {
    direction: 'left' | 'right';
    pointerType: string;
    target: HTMLElement;
}

type swipeCustomEvent = CustomEvent<SwipeDetail>