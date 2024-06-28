import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _sfc_main$1 } from './BorderedBox-67aba059.mjs';
import { defineComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = "" + publicAssetsURL("logos/github-mark-white.png");
const _imports_1 = "" + publicAssetsURL("logos/youtube.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const description = {
      title: "Projects",
      content: "These are some of the projects I have been working on lately"
    };
    const projects = [
      {
        title: "Rotary Control",
        body: "Developed a control system to adjust pull behind Ag equipment using computer vision. Leveraged hardware in loop simulation to test the system using unity simulations. MEng Capstone Project. Thanks for the support and collaboration of MacDon Industries.",
        logos: [
          { name: "python", link: "https://www.python.org/" },
          { name: "opencv", link: "https://opencv.org/" },
          { name: "unity", link: "https://unity.com/products/unity-engine" },
          { name: "ros", link: "https://www.ros.org/" }
        ]
      },
      {
        title: "EOG Mouse Control",
        body: "A microproccesor based system to control a computer mouse using brainwaves. For the NatHacks Hackathon",
        bullets: [
          "Created a Brain Computer Interface to control a computer mouse from EOG Data",
          "Captured and filtered data from multiple EXG Pill sensors on an Arduino",
          "Used serial communication to transmit data between Arduino and computer"
        ],
        logos: [
          { name: "python", link: "https://www.python.org/" },
          { name: "tensorflow", link: "https://www.tensorflow.org/" },
          { name: "arduino", link: "https://www.arduino.cc/" },
          { name: "exg", link: "https://store.upsidedownlabs.tech/product/bioamp-exg-pill/" }
        ],
        github: "https://github.com/gcrookes/EOGMouseControl",
        youtube: "https://www.youtube.com/watch?v=8hNw2gWGpAQ&ab_channel=MohammedAlhajjaj"
      },
      {
        title: "Ticket System",
        body: "A sample website with a system to purchase tickets for a movie theater chain (Cineplex clone)",
        bullets: [
          "Frontend implemented using React, users can login or use the site as a guest",
          "Backend implemented in Spring Boot, with data stored on a MySQL database"
        ],
        logos: [
          { name: "javascript", link: "https://www.javascript.com/" },
          { name: "react", link: "https://react.dev/" },
          { name: "springboot", link: "https://spring.io/projects/spring-boot/" },
          { name: "mysql", link: "https://www.mysql.com/" }
        ],
        github: "https://github.com/ChengDave/ticket-reservation-system"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BorderedBox = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BorderedBox, {
        title: description.title,
        body: description.content,
        key: description.title
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(projects, (info) => {
        _push(ssrRenderComponent(_component_BorderedBox, {
          title: info.title,
          key: info.title,
          body: info.body
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-left full-width p-2 font-bold"${_scopeId}> Built Using: </div><div class="row q-gutter-md justify-center"${_scopeId}><!--[-->`);
              ssrRenderList(info.logos, ({ name: logo, link }) => {
                _push2(`<div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-5"${_scopeId}><a${ssrRenderAttr("href", link)} target="_blank"${_scopeId}><div class="bg-white rounded-lg p-0.5 border-2 border-green-400 h-12 min-w-12 max-h-12 flex justify-center"${_scopeId}><img${ssrRenderAttr("src", `/logos/${logo}.png`)}${ssrRenderAttr("title", logo)}${ssrRenderAttr("alt", logo)} class="max-h-full max-w-full"${_scopeId}></div></a></div>`);
              });
              _push2(`<!--]--></div><div class="column q-gutter-y-sm absolute top-2 -right-4"${_scopeId}>`);
              if (info.github) {
                _push2(`<a${ssrRenderAttr("href", info.github)} target="_blank"${_scopeId}><div class="bg-zinc-800 border-white border-2 rounded-lg h-8 w-8 p-0.5"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} title="Github" alt="Link to source code on Github" class="max-h-full max-w-full"${_scopeId}></div></a>`);
              } else {
                _push2(`<!---->`);
              }
              if (info.youtube) {
                _push2(`<a${ssrRenderAttr("href", info.youtube)} target="_blank"${_scopeId}><div class="bg-zinc-800 border-white border-2 content-center row rounded-lg h-8 w-8 p-0.5"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} title="Github" alt="Link to demo on Youtube" class="max-h-full max-w-full"${_scopeId}></div></a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "text-left full-width p-2 font-bold" }, " Built Using: "),
                createVNode("div", { class: "row q-gutter-md justify-center" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(info.logos, ({ name: logo, link }) => {
                    return openBlock(), createBlock("div", {
                      class: "col-xl-2 col-lg-2 col-md-2 col-sm-2 col-5",
                      key: logo
                    }, [
                      createVNode("a", {
                        href: link,
                        target: "_blank"
                      }, [
                        createVNode("div", { class: "bg-white rounded-lg p-0.5 border-2 border-green-400 h-12 min-w-12 max-h-12 flex justify-center" }, [
                          createVNode("img", {
                            src: `/logos/${logo}.png`,
                            title: logo,
                            alt: logo,
                            class: "max-h-full max-w-full"
                          }, null, 8, ["src", "title", "alt"])
                        ])
                      ], 8, ["href"])
                    ]);
                  }), 128))
                ]),
                createVNode("div", { class: "column q-gutter-y-sm absolute top-2 -right-4" }, [
                  info.github ? (openBlock(), createBlock("a", {
                    key: 0,
                    href: info.github,
                    target: "_blank"
                  }, [
                    createVNode("div", { class: "bg-zinc-800 border-white border-2 rounded-lg h-8 w-8 p-0.5" }, [
                      createVNode("img", {
                        src: _imports_0,
                        title: "Github",
                        alt: "Link to source code on Github",
                        class: "max-h-full max-w-full"
                      })
                    ])
                  ], 8, ["href"])) : createCommentVNode("", true),
                  info.youtube ? (openBlock(), createBlock("a", {
                    key: 1,
                    href: info.youtube,
                    target: "_blank"
                  }, [
                    createVNode("div", { class: "bg-zinc-800 border-white border-2 content-center row rounded-lg h-8 w-8 p-0.5" }, [
                      createVNode("img", {
                        src: _imports_1,
                        title: "Github",
                        alt: "Link to demo on Youtube",
                        class: "max-h-full max-w-full"
                      })
                    ])
                  ], 8, ["href"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-a89c4a35.mjs.map
