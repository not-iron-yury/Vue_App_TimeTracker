import { PAGE_TIMERS, HOURS_IN_DAY, START_OF_THE_DAY, ONE_HOUR } from './constants';
import { isPageValid } from './validators';

export function pageHash() {
  const page = window.location.hash.slice(1);
  if (isPageValid(page)) {
    return page;
  }
  return PAGE_TIMERS;
}

export function createTimeLines() {
  const timeLines = [];
  for (let hour = START_OF_THE_DAY; hour < HOURS_IN_DAY; hour++) {
    timeLines.push({ hour: hour });
  }
  return timeLines;
}

export function createTaskListOption(tasks) {
  return tasks.map(tasks => ({ label: tasks.name, value: tasks.id }));
}

export function id() {
  const a = Date.now().toString(12).slice(8);
  const b = Date.now().toString(36).slice(4);
  const c = Math.floor(Math.random() * 10000);
  return a + b + c;
}
