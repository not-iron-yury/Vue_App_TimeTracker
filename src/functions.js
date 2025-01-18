import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS, HOURS_IN_DAY } from './constants';

export function pageHash() {
  const hash = window.location.hash.slice(1);
  if ([PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS].includes(hash)) {
    return hash;
  }
  return PAGE_TIMERS;
}

export function generateTimeLines() {
  const timeLines = [];
  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timeLines.push({ hour: hour });
  }
  return timeLines;
}
