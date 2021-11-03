import { createApp } from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';

import Spinner from './components/ui/Spinner';

const app = createApp(App);

app.use(store);
app.use(router);
app.component('spinner', Spinner);

app.mount('#app');
