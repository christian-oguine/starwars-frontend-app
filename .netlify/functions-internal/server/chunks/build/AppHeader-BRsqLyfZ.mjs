import { _ as __nuxt_component_0$1 } from './nuxt-link-gGWkbi4O.mjs';
import { _ as __nuxt_component_1 } from './index-9_hv1OMF.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useMyTeamStore } from './team-89d0l36M.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const team = useMyTeamStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "font-cinzel text-xl text-gold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`StarWars`);
          } else {
            return [
              createTextVNode("StarWars")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/team",
        class: "inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition",
        title: "Open My Team"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:users-three-duotone",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(` Team ${ssrInterpolate(unref(team).size)}/${ssrInterpolate(unref(team).max)}`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:users-three-duotone",
                class: "w-4 h-4"
              }),
              createTextVNode(" Team " + toDisplayString(unref(team).size) + "/" + toDisplayString(unref(team).max), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "AppHeader" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=AppHeader-BRsqLyfZ.mjs.map
