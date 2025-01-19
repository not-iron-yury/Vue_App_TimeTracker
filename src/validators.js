import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS, HOURS_IN_DAY } from './constants';

export function isCurrentPageValid(currentPage) {
  return [PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS].includes(currentPage);
}

export function isTimeLineDataValid({ hour }) {
  return typeof hour === 'number' && hour < HOURS_IN_DAY && hour > -1;
}

export function isOptionValid(options) {
  return options.every(({ label, value }) => typeof label === 'string' && typeof value === 'number');
}

export function isTimeLinesValid(timeLines) {
  return timeLines.every(({ hour }) => typeof hour === 'number' && hour < HOURS_IN_DAY && hour > -1);
}
