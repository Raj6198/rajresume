import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";

const rstId = new BehaviorSubject(0);

const highlight = new Subject();

export const myService = {
  sentHighlight: (highLight) => highlight.next(highLight),
  getHighlight: () => highlight.asObservable(),
  
  setRestId: (id) => rstId.next(id),
  getRstId: () => rstId.asObservable(),
};
