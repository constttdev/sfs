import { d as sanitize_props, f as spread_props, g as slot, j as attr, c as pop, p as push, h as ensure_array_like, e as escape_html, k as stringify } from "../../../../chunks/index2.js";
import byteSize from "byte-size";
import "../../../../chunks/client.js";
import { I as Icon } from "../../../../chunks/Icon.js";
function File($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }]
  ];
  Icon($$payload, spread_props([
    { name: "file" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Delete($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
      }
    ],
    ["path", { "d": "m12 9 6 6" }],
    ["path", { "d": "m18 9-6 6" }]
  ];
  Icon($$payload, spread_props([
    { name: "delete" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Download($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    ],
    ["polyline", { "points": "7 10 12 15 17 10" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "15",
        "y2": "3"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "download" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function PublicStateButton($$payload, $$props) {
  push();
  let { $$slots, $$events, ...inputProps } = $$props;
  $$payload.out += `<div class="flex h-[28px] items-center gap-2 rounded-lg bg-blue-300 px-4 py-1 dark:bg-blue-500"><p>Public:</p> <div class="flex items-center"><form action="files?/changePublicState" method="post"><input type="checkbox"${attr("checked", inputProps.publicState, true)} name="state" id="state" class="checked:bg-slate hover:sbg-slate-200 h-4 w-4 rounded border border-slate-300 bg-white shadow"> <input type="hidden"${attr("value", inputProps.recordId)} class="rounded-xl p-1" name="recordId" id="recordId"></form></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.files);
  $$payload.out += `<div class="mt-20 flex flex-col gap-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let file = each_array[$$index];
    $$payload.out += `<div class="flex gap-4"><div class="font-inter flex w-13 items-center justify-center rounded-md bg-zinc-200 dark:bg-zinc-900">`;
    File($$payload, {});
    $$payload.out += `<!----></div> <div class="font-inter flex w-4xl justify-between p-2 text-[14px]"><div><p class="font-semibold">${escape_html(file.fileName)}</p> <p>${escape_html(byteSize(file.fileSize))}</p></div> <div class="flex gap-4"><a${attr("href", `/download?file=${stringify(file.id)}`)} class="flex h-[27.7px] cursor-pointer items-center gap-3 rounded-lg bg-green-300 p-1 px-2 py-1 dark:bg-green-500">`;
    Download($$payload, { class: "size-5" });
    $$payload.out += `<!----> Download</a> <form action="files?/deleteFile" method="post"><button class="flex cursor-pointer items-center gap-3 rounded-lg bg-red-300 p-1 px-2 py-1 dark:bg-red-500">`;
    Delete($$payload, { class: "size-5" });
    $$payload.out += `<!----> Delete</button> <input type="hidden"${attr("value", file.id)} id="recordId" name="recordId"></form> `;
    PublicStateButton($$payload, {
      recordId: file.id,
      publicState: file.publicState
    });
    $$payload.out += `<!----></div></div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
