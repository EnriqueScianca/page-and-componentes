import { initRouter } from "./router";
import { init as headerComponent } from "./components/header-component";
import { init as footerComponent } from "./components/footer-component";

(function () {
  headerComponent();
  const root = document.querySelector(".root");
  initRouter(root);
  footerComponent();
})();
