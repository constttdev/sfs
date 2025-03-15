import { e as escape_html, j as attr, c as pop, p as push } from "../../../../chunks/index2.js";
import "../../../../chunks/client.js";
import byteSize from "byte-size";
function _page($$payload, $$props) {
  push();
  let { data, form } = $$props;
  $$payload.out += `<div class="flex h-screen w-full items-center justify-center"><div class="text-dtext dark:text-text items-center justify-center rounded-xl bg-zinc-900 px-40 py-20 dark:bg-zinc-200"><h1>${escape_html(data.fileName.replace("inline; filename=", ""))}</h1> <p>${escape_html(byteSize(data.fileSize))}</p> <form method="post" action="?/downloadFile"><button class="text-text cursor-pointer rounded-xl bg-zinc-300 p-2">Download</button> <input type="hidden" name="fileId" id="fileId"${attr("value", data.fileId)}></form></div></div>`;
  pop();
}
export {
  _page as default
};
