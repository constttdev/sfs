import { d as sanitize_props, f as spread_props, g as slot, j as attr, k as stringify, c as pop, p as push, e as escape_html } from "../../../../chunks/index2.js";
import "../../../../chunks/client.js";
import { I as Icon } from "../../../../chunks/Icon.js";
function Eye($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "3" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "eye" },
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
function PasswordInput($$payload, $$props) {
  push();
  let { $$slots, $$events, ...inputProps } = $$props;
  $$payload.out += `<div class="flex justify-between gap-2"><input${attr("class", `border-primary bg-secondary text-text font-inter rounded-md border p-2 outline-none ${stringify(inputProps.font)} w-96`)}${attr("type", "password")}${attr("name", inputProps.name)}${attr("placeholder", inputProps.placeholder)}${attr("required", inputProps.required, true)}${attr("minlength", inputProps.minlenght)}> <button type="button">`;
  {
    $$payload.out += "<!--[!-->";
    Eye($$payload, { class: "text-secondary size-6 font-thin" });
  }
  $$payload.out += `<!--]--></button></div>`;
  pop();
}
function TextInput($$payload, $$props) {
  push();
  let { $$slots, $$events, ...inputProps } = $$props;
  $$payload.out += `<div class="flex justify-between gap-2"><input${attr("class", `border-primary bg-secondary text-text font-inter rounded-md border p-2 outline-none ${stringify(inputProps.font)} w-96`)} type="text"${attr("name", inputProps.name)}${attr("placeholder", inputProps.placeholder)}${attr("required", inputProps.required, true)}></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { form } = $$props;
  $$payload.out += `<div class="grid h-screen items-center justify-center"><form class="flex flex-col gap-4" action="/login?/login" method="POST"><h1 class="font-inter text-3xl font-bold">Login</h1> `;
  TextInput($$payload, {
    placeholder: "email@email.com",
    font: "font-JBMono",
    required: "true",
    name: "email"
  });
  $$payload.out += `<!----> `;
  PasswordInput($$payload, {
    placeholder: "supersecretpassword",
    font: "font-inter",
    required: "true",
    name: "password"
  });
  $$payload.out += `<!----> <button class="bg-primary text-text cursor-pointer rounded-lg p-3">Login</button> `;
  if (form?.error) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-red-500">${escape_html(form?.error)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></form></div>`;
  pop();
}
export {
  _page as default
};
