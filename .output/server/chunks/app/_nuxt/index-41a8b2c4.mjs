import { _ as _sfc_main$1 } from './BorderedBox-67aba059.mjs';
import { n as navigateTo, _ as __nuxt_component_1$1 } from '../server.mjs';
import { u as useFetch } from './fetch-e35a6eba.mjs';
import { f as fail } from './notify-6243cb12.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const startWorkout = async (type) => {
      const { data: workout, error } = await useFetch(
        `/api/fitnessTracker/startWorkout/${type}`,
        {
          method: "post",
          watch: false
        },
        "$kw03fNlJVU"
      );
      if (error && error.value) {
        fail(error.value.data.message);
      }
      console.log(workout);
      await navigateTo("/fitness/workout/" + workout.value.id);
    };
    const { data: workoutTypes } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/fitnessTracker/workoutTypes",
      "$sdVWlAieVC"
    )), __temp = await __temp, __restore(), __temp);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/fitnessTracker/workouts", "$Vmq8SlJtnQ")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BorderedBox = _sfc_main$1;
      const _component_q_btn = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}><div class="text-4xl q-pb-md">Fitness Tracker</div>`);
      _push(ssrRenderComponent(_component_BorderedBox, { title: "Start a New Workout" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-w-[20rem] flex justify-between q-px-sm"${_scopeId}><!--[-->`);
            ssrRenderList(unref(workoutTypes), (workout) => {
              _push2(ssrRenderComponent(_component_q_btn, {
                label: workout.name,
                key: workout.id,
                onMousedown: ($event) => startWorkout(workout.id)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "min-w-[20rem] flex justify-between q-px-sm" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(workoutTypes), (workout) => {
                  return openBlock(), createBlock(_component_q_btn, {
                    label: workout.name,
                    key: workout.id,
                    onMousedown: ($event) => startWorkout(workout.id)
                  }, null, 8, ["label", "onMousedown"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(data), (workout) => {
        _push(`<div>${ssrInterpolate(workout.id)}</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fitness/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-41a8b2c4.mjs.map
