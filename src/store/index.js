import { createStore } from 'vuex';

import requestsModule from './modules/requestsModule';

const store = createStore({
    modules: {
        requests: requestsModule,
    }
})

export default store;