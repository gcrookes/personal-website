import { k as useRoute } from '../server.mjs';
import { u as useFetch } from './fetch-e35a6eba.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './BorderedBox-67aba059.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: workout } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/fitnessTracker/workouts/${route.params.id}`,
      "$ej8UYIN05t"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: unref(workout).type.name
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>${ssrInterpolate(unref(workout).start_time)}</div><div${_scopeId}>${ssrInterpolate(unref(workout))}</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(unref(workout).start_time), 1),
              createVNode("div", null, toDisplayString(unref(workout)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fitness/workout/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-8e2753db.mjs.map
