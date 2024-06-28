import { g as __nuxt_component_0$1, w as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/supabase-js';
import 'quasar/lang/en-US.mjs';
import 'quasar/icon-set/material-icons.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IconBox",
  __ssrInlineRender: true,
  props: {
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    icon: { type: String, default: "house" },
    color: { type: String, default: "bg-zinc-900" },
    border: { type: String, default: "border-lime-50" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$q.screen.lt.sm ? "ml-6" : ""
      }, _attrs))}><div class="${ssrRenderClass(["relative-position p-3 pl-8 border-2 rounded-md mt-10", __props.color, __props.border])}"><div class="${ssrRenderClass(["absolute -top-7 -left-7 p-2 border-2 rounded-xl bg-primary", __props.border])}">`);
      _push(ssrRenderComponent(_component_q_icon, {
        name: __props.icon,
        size: "md"
      }, null, _parent));
      _push(`</div><div class="text-xl underline pb-1">${ssrInterpolate(__props.title)}</div><div>${ssrInterpolate(__props.description)}</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IconBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_IconBox = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-slate-900/25 p-4 mt-8 border-none"><div class="text-4xl text-bold py-2">Hi, I&#39;m</div><div class="container relative-position"><div class="aboslute top-0 animate-in text-6xl text-bold text-primary py-2"> Garnet Crookes </div></div><div class="text-4xl text-bold py-2">Full Stack Developer</div></div><div class="mt-8 mb-8">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_IconBox, {
          title: "About",
          icon: "import_contacts",
          description: "I am a full stack web developer who can deliver results across the project"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_IconBox, {
            title: "About",
            icon: "import_contacts",
            description: "I am a full stack web developer who can deliver results across the project"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_IconBox, {
          title: "Projects",
          icon: "architecture",
          description: "Check out my side projects, and what I have been working on lately"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_IconBox, {
            title: "Projects",
            icon: "architecture",
            description: "Check out my side projects, and what I have been working on lately"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_IconBox, {
          title: "Contact Me",
          icon: "contact_mail",
          description: "Feel free to reach out for an inquiries or to hire me"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_IconBox, {
            title: "Contact Me",
            icon: "contact_mail",
            description: "Feel free to reach out for an inquiries or to hire me"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="/garnetcrookes.pdf" download>`);
  _push(ssrRenderComponent(_component_IconBox, {
    title: "Get CV",
    icon: "picture_as_pdf",
    description: "Download a PDF copy of my resume"
  }, null, _parent));
  _push(`</a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-73f41abf.mjs.map
