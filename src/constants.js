import { id } from './functions';

export const PAGE_TIMERS = 'timers';
export const PAGE_TASKS = 'tasks';
export const PAGE_PROGRESS = 'progress';

export const HOURS_IN_DAY = 24;
export const START_OF_THE_DAY = 0;
export const ONE_HOUR = 3600;

export const BUTTON_TYPE_BASIC = 'basic';
export const BUTTON_TYPE_DANGER = 'danger';
export const TYPES_OF_BUTTONS = [BUTTON_TYPE_BASIC, BUTTON_TYPE_DANGER];

export const TIMERS_LIMIT = [
  { label: '00:10', value: '10' },
  { label: '00:20', value: '20' },
  { label: '00:30', value: '30' },
  { label: '00:40', value: '40' },
];

export const TASKS_LIST = [
  {
    id: id(),
    name: 'Тренировка',
    secondsToComplete: ONE_HOUR / 4,
  },
  {
    id: id(),
    name: 'Кодинг',
    secondsToComplete: ONE_HOUR * 2,
  },
  {
    id: id(),
    name: 'Бытовуха',
    secondsToComplete: ONE_HOUR * 1,
  },
  {
    id: id(),
    name: 'Кушац',
    secondsToComplete: ONE_HOUR / 2,
  },
  {
    id: id(),
    name: 'Магазин',
    secondsToComplete: ONE_HOUR,
  },
];
