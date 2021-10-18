import {createApp} from "vue";
import App from "./App.vue";
import "./index.css";
import "./lib/icon/svg.js";
import {setupRouter} from "./router";
import "github-markdown-css";

function bootstrap() {
    const app = createApp(App);
    setupRouter(app);
    app.mount("#app", true);
}

bootstrap();
