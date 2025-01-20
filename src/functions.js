import { PAGE_TIMERS, HOURS_IN_DAY, START_OF_THE_DAY } from './constants';
import { isPageValid } from './validators';

export function pageHash() {
  const page = window.location.hash.slice(1);
  if (isPageValid(page)) {
    return page;
  }
  return PAGE_TIMERS;
}

export function generateTimeLines() {
  const timeLines = [];
  for (let hour = START_OF_THE_DAY; hour < HOURS_IN_DAY; hour++) {
    timeLines.push({ hour: hour });
  }
  return timeLines;
}

export function createTaskListOption(tasks) {
  return tasks.map((itm, index) => ({ label: itm, value: index }));
}
