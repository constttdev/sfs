import { j as attr, c as pop, p as push, k as stringify } from "../../../../chunks/index2.js";
import "../../../../chunks/client.js";
import "byte-size";
import "../../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let iconState = "light";
  $$payload.out += `<form action="upload?/uploadFile" enctype="multipart/form-data" method="post" class="w-screen"><div class="flex h-screen w-full flex-col items-center justify-center overflow-hidden"><input class="static h-0 w-0 bg-transparent text-transparent" type="file" name="file" id="file"> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<label for="file"${attr("class", `outline-dashed-custom outline outline-zinc-700 ${stringify("")} flex h-96 w-2xl items-center justify-center rounded-lg`)}><img class="size-20"${attr("src", `./upload-${stringify(iconState)}.png`)} alt="Upload Icon"></label>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></form>`;
  pop();
}
export {
  _page as default
};
