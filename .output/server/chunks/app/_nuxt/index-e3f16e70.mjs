import { _ as _sfc_main$1 } from './BorderedBox-67aba059.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const aboutMe = [
      {
        title: "About",
        content: "Hi, it's Garnet. I'm an ex-mechanical engineer converted into a software enthusiast. This website serves as a showcase for my skills and projects. Please feel free to explore!"
      },
      {
        title: "Full Stack Engineer",
        content: "I am a full stack software engineer focused on delivering great user experiences. I have experience developing web frontends using Vue, Nuxt, and React. I have developed REST backends using .NET and Springboot."
      },
      {
        title: "Mechanical Engineer",
        content: "In addition to software engineering I also have a degree in Mechanical Engineering and experience designing mechanical systems. Not only has this helped me better design software it makes me particularialy well suited to work in projects that interact with the physics of the real world."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BorderedBox = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(aboutMe, (info) => {
        _push(ssrRenderComponent(_component_BorderedBox, {
          title: info.title,
          body: info.content,
          key: info.title
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-e3f16e70.mjs.map
