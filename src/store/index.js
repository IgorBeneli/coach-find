import { createStore } from 'vuex';
import coachModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index';
import AuthModule from './modules/auth/index';

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestsModule,
    auth: AuthModule
  }
});

export default store;
