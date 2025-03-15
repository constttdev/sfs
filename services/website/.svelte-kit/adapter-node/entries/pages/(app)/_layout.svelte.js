import { d as sanitize_props, f as spread_props, g as slot, h as ensure_array_like, j as attr, k as stringify, e as escape_html, c as pop, p as push } from "../../../chunks/index2.js";
/* empty css                  */
import { p as page } from "../../../chunks/index3.js";
import { I as Icon } from "../../../chunks/Icon.js";
function Settings($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "3" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "settings" },
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
function Panel_left($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2"
      }
    ],
    ["path", { "d": "M9 3v18" }]
  ];
  Icon($$payload, spread_props([
    { name: "panel-left" },
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
function Upload($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    ],
    ["polyline", { "points": "17 8 12 3 7 8" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "3",
        "y2": "15"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "upload" },
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
function Files($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M20 7h-3a2 2 0 0 1-2-2V2" }],
    [
      "path",
      {
        "d": "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"
      }
    ],
    [
      "path",
      { "d": "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "files" },
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
function House($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
      }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "house" },
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
function Sidebar($$payload, $$props) {
  push();
  let currentUrl = page.url.pathname;
  const menuItems = [
    { name: "Home", href: "/home", icon: House },
    { name: "Files", href: "/files", icon: Files },
    {
      name: "Upload",
      href: "/upload",
      icon: Upload
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings
    }
  ];
  $$payload.out += `<div class="flex">`;
  {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(menuItems);
    $$payload.out += `<div class="flex h-screen w-52 flex-col justify-between overflow-hidden p-2 whitespace-nowrap lg:static"><div><p class="font-inter font-bold">Svelte File Server</p> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      const Icon2 = item.icon;
      $$payload.out += `<div${attr("class", `${stringify(currentUrl === item.href ? "border border-zinc-300 bg-zinc-100 drop-shadow-xs dark:border-zinc-700 dark:bg-zinc-800" : "")} mt-2 flex items-center gap-2 overflow-hidden rounded-lg p-1`)}><!---->`;
      Icon2($$payload, { size: "16" });
      $$payload.out += `<!----> <a${attr("href", item.href)}><span class="font-inter text-sm">${escape_html(item.name)}</span></a></div>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  }
  $$payload.out += `<!--]--> <div><button class="p-1 opacity-5 dark:opacity-25">`;
  Panel_left($$payload, {});
  $$payload.out += `<!----></button></div></div>`;
  pop();
}
const darkModeState = { state: false };
function DarkModeSwitcher($$payload, $$props) {
  push();
  $$payload.out += `<label class="fixed right-0 bottom-0 z-10 m-8 cursor-pointer items-center rounded-lg bg-zinc-200 p-4 text-black dark:bg-black dark:text-white"><input type="checkbox" class="sr-only"${attr("checked", darkModeState.state, true)}> <div>${escape_html("☀️")}</div></label>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children, data } = $$props;
  $$payload.out += `<div class="flex">`;
  if (data.user) {
    $$payload.out += "<!--[-->";
    Sidebar($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  DarkModeSwitcher($$payload);
  $$payload.out += `<!----> `;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _layout as default
};
