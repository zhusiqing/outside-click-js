type EventList = Array<DocumentEventMap>;
interface ClickOutsideOptions {
  el: Element;
  events?: EventList;
  handler: (event: DocumentEventMap, element: Element) => void;
  middleware?: (event: DocumentEventMap, element: Element) => boolean;
}

declare function clickOutside(options: ClickOutsideOptions): void;

declare function removeClickOutside(targetElement?: Element): void;

declare const $outsideClick: {
  clickOutside: (options: ClickOutsideOptions) => void;
  removeClickOutside: (targetElement?: Element) => void;
};

export default $outsideClick;
