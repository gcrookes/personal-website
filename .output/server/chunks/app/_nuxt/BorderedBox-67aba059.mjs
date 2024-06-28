import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BorderedBox",
  __ssrInlineRender: true,
  props: {
    title: { type: String, default: "" },
    body: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-zinc-900/75 relative-position mt-8 font-white border-primary border-2 rounded-md p-2 body-border max-w-3xl" }, _attrs))}><div class="absolute text-2xl p-2 mx-2 rounded-2 top-0 left-1/2 transform -translate-x-[53%] -translate-y-1/2 rounded-xl bg-slate-900"><div class="bg-zinc-900/75 max-w-[70vw] ellipsis px-4 border-2 rounded-md">${ssrInterpolate(__props.title)}</div></div><div class="text-lg px-4 pt-4 text-center">`);
      if (__props.body) {
        _push(`<div>${ssrInterpolate(__props.body)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BorderedBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BorderedBox-67aba059.mjs.map
