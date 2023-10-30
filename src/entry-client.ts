import { createApp } from './main';
import VConsole from 'vconsole';
const { app, router } = createApp();

const vConsole = new VConsole()

router.isReady().then(() => {
  app.mount('#app');
});
