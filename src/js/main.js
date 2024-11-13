import Comments from "./comments.js";
import LumeCode from "./lume_code.js";
import LumeCopy from "./lume_copy.js";
import SoftwareList from "./software-list.js";

customElements.define("mastodon-comments", Comments);
customElements.define("software-list", SoftwareList);
customElements.define("lume-code", LumeCode);
customElements.define("lume-copy", LumeCopy);

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.remove("no-js");

  if (document.querySelector("[data-theme-toggle]")) {
    import("./theme.js");
  }
});
