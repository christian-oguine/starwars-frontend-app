import { _ as __nuxt_component_0 } from './AppHeader-BRsqLyfZ.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-gGWkbi4O.mjs';
import { _ as __nuxt_component_1 } from './index-9_hv1OMF.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './team-89d0l36M.mjs';
import 'pinia';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import './server.mjs';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-CoAFnUYU.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen w-full bg-[#0f1318] text-white flex flex-col fixed inset-0 text-offwhite overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main class="flex-1"><section class="mx-auto w-full max-w-6xl px-6 pt-10 pb-12"><h1 class="font-cinzel text-[clamp(2rem,6vw,4rem)] leading-tight"> Enter the <span class="text-gold">Galaxy</span><br> Build Your Legendary Squad </h1><p class="mt-4 max-w-2xl text-white/80 font-poppins"> Recruit up to five heroes and keep the dark side out. </p><div class="mt-8 flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/characters",
        class: "inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-gold text-black font-poppins hover:brightness-110 transition shadow-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "solar:users-group-rounded-bold",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(` Start Building Characters `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "solar:users-group-rounded-bold",
                class: "w-5 h-5"
              }),
              createTextVNode(" Start Building Characters ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/team",
        class: "inline-flex items-center gap-2 rounded-xl px-6 py-3 border border-white/15 hover:border-gold/60 font-poppins transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "solar:shield-star-bold",
              class: "w-5 h-5 text-gold"
            }, null, _parent2, _scopeId));
            _push2(` View My Team `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "solar:shield-star-bold",
                class: "w-5 h-5 text-gold"
              }),
              createTextVNode(" View My Team ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="mx-auto w-full max-w-6xl px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><article class="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><h3 class="font-cinzel text-xl mb-1">Galaxy Roster</h3><p class="text-sm text-white/80 font-poppins">Browse characters with images and quick stats.</p></article><article class="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><h3 class="font-cinzel text-xl mb-1">Assemble 5 Heroes</h3><p class="text-sm text-white/80 font-poppins">Pick up to five members and manage them anywhere.</p></article><article class="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><h3 class="font-cinzel text-xl mb-1">Smart Rules</h3><p class="text-sm text-white/80 font-poppins">Blocks Sith/Darth automatically while selecting.</p></article></section></main><footer class="w-full border-t border-white/10"><div class="mx-auto w-full max-w-6xl px-6 py-6 text-xs text-white/60 font-poppins"> © ${ssrInterpolate(unref(year))} Star Wars Team Builder — All rights reserved. </div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D3mh20aT.mjs.map
