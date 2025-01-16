import { createApp } from 'vue';
import App from './App.vue';
import './main.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStopwatch, faCircleCheck, faChartLine } from '@fortawesome/free-solid-svg-icons';
library.add([faStopwatch, faCircleCheck, faChartLine]);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
