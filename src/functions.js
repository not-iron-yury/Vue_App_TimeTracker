import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS } from './constants';

export function pageHash() {
  const hash = window.location.hash.slice(1);
  if ([PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS].includes(hash)) {
    return hash;
  }
  return PAGE_TIMERS;
}
