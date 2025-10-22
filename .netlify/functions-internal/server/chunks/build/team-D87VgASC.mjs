import { _ as __nuxt_component_0 } from './AppHeader-BRsqLyfZ.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-gGWkbi4O.mjs';
import { _ as __nuxt_component_1 } from './index-9_hv1OMF.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useMyTeamStore } from './team-89d0l36M.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-CoAFnUYU.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';

const placeholder = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "team",
  __ssrInlineRender: true,
  setup(__props) {
    const teamStore = useMyTeamStore();
    const slotNames = ["Alpha", "Bravo", "Charlie", "Delta", "Echo"];
    const slots = computed(() => {
      const filled = [...teamStore.members];
      while (filled.length < teamStore.max) filled.push(null);
      return filled.slice(0, teamStore.max);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen w-full bg-[#0b0f15] text-offwhite relative overflow-x-hidden" }, _attrs))} data-v-615323f9>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<section class="relative mx-auto w-full max-w-6xl px-6 pt-8" data-v-615323f9><div class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6" data-v-615323f9><div class="pointer-events-none absolute inset-0 opacity-[0.08]" style="${ssrRenderStyle({ "background-image": "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)", "background-size": "28px 28px" })}" data-v-615323f9></div><div class="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-v-615323f9><div data-v-615323f9><h1 class="font-cinzel text-3xl sm:text-4xl tracking-wide" data-v-615323f9>Strike Team</h1><p class="font-poppins text-white/70 mt-1" data-v-615323f9>Assemble 5 heroes and prepare for deployment.</p></div><div class="w-full sm:w-80" data-v-615323f9><div class="flex items-center justify-between text-xs font-poppins text-white/70 mb-1" data-v-615323f9><span data-v-615323f9>Battle Readiness</span><span data-v-615323f9>${ssrInterpolate(unref(teamStore).size)} / ${ssrInterpolate(unref(teamStore).max)}</span></div><div class="h-2 rounded-full bg-white/[0.07] overflow-hidden" data-v-615323f9><div class="${ssrRenderClass([unref(teamStore).size === unref(teamStore).max ? "bg-emerald-400" : "bg-amber-400", "h-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${Math.min(100, unref(teamStore).size / unref(teamStore).max * 100)}%` })}" data-v-615323f9></div></div><div class="mt-3 flex gap-2" data-v-615323f9>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/characters",
        class: "inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-gold text-black font-poppins text-sm hover:brightness-110 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:user-plus-duotone",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(` Add More `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:user-plus-duotone",
                class: "w-4 h-4"
              }),
              createTextVNode(" Add More ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button${ssrIncludeBooleanAttr(unref(teamStore).size === 0) ? " disabled" : ""} class="${ssrRenderClass([unref(teamStore).size === 0 ? "opacity-50 cursor-not-allowed" : "", "inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 text-sm font-poppins hover:border-gold/60 transition"])}" data-v-615323f9>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:broom-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Clear All </button><button class="${ssrRenderClass([unref(teamStore).size === unref(teamStore).max ? "bg-emerald-400/20 text-emerald-200" : "opacity-50 cursor-not-allowed", "ml-auto inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-poppins transition border border-white/10 hover:border-emerald-400/60"])}"${ssrIncludeBooleanAttr(unref(teamStore).size !== unref(teamStore).max) ? " disabled" : ""} title="Launch is enabled at 5/5" data-v-615323f9>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:rocket-launch-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Launch Mission </button></div></div></div></div></section><section class="mx-auto w-full max-w-6xl px-6 py-8" data-v-615323f9><h2 class="font-cinzel text-xl mb-4 tracking-wide" data-v-615323f9>Formation</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" data-v-615323f9><!--[-->`);
      ssrRenderList(unref(slots), (slot, i) => {
        _push(`<div class="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition" data-v-615323f9><div class="absolute left-3 top-3 z-10 text-[11px] font-poppins tracking-wider uppercase rounded-full px-2 py-0.5 bg-white/10 border border-white/20 text-white/80" data-v-615323f9>${ssrInterpolate(slotNames[i])}</div>`);
        if (slot) {
          _push(`<!--[--><div class="relative" data-v-615323f9><img${ssrRenderAttr("src", slot.image || placeholder)}${ssrRenderAttr("alt", slot.name)} class="w-full aspect-[4/5] object-cover" loading="lazy" data-v-615323f9><div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/50 via-transparent to-transparent" data-v-615323f9></div></div><div class="p-4" data-v-615323f9><h3 class="font-cinzel text-lg leading-tight line-clamp-1" data-v-615323f9>${ssrInterpolate(slot.name)}</h3><p class="mt-0.5 text-xs font-poppins text-white/70 capitalize" data-v-615323f9>${ssrInterpolate(slot.gender || "—")}</p><div class="mt-4 flex items-center gap-2" data-v-615323f9>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/details/${slot.id}`,
            class: "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-poppins border border-white/10 hover:border-gold/60 transition"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:eye-duotone",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(` View `);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ph:eye-duotone",
                    class: "w-4 h-4"
                  }),
                  createTextVNode(" View ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<button class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-poppins border border-red-400/40 text-red-300 hover:bg-red-500/10 transition" data-v-615323f9>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:user-minus-duotone",
            class: "w-4 h-4"
          }, null, _parent));
          _push(` Recall </button></div></div><!--]-->`);
        } else {
          _push(`<div class="flex h-full min-h-[320px] flex-col items-center justify-center p-6" data-v-615323f9>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:shield-duotone",
            class: "w-10 h-10 text-white/30 mb-3"
          }, null, _parent));
          _push(`<p class="font-cinzel text-lg mb-1" data-v-615323f9>Empty Slot</p><p class="text-white/60 text-sm font-poppins mb-4 text-center" data-v-615323f9> Deploy a warrior to this position. </p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/characters",
            class: "inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-gold text-black font-poppins text-sm hover:brightness-110 transition"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:user-plus-duotone",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(` Deploy `);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ph:user-plus-duotone",
                    class: "w-4 h-4"
                  }),
                  createTextVNode(" Deploy ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
      if (unref(teamStore).size === 0) {
        _push(`<section class="mx-auto w-full max-w-6xl px-6 pb-16" data-v-615323f9><div class="text-center mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-10" data-v-615323f9>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:users-duotone",
          class: "w-16 h-16 text-white/30 mx-auto mb-4"
        }, null, _parent));
        _push(`<h2 class="font-cinzel text-2xl mb-2" data-v-615323f9>No team members yet</h2><p class="text-white/70 font-poppins mb-6" data-v-615323f9>Browse characters and add them to your team.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/characters",
          class: "inline-flex items-center gap-2 px-6 py-3 bg-gold text-[#0f1318] font-poppins font-semibold rounded-xl hover:brightness-110 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:users-three-duotone",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(` Browse Characters `);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ph:users-three-duotone",
                  class: "w-5 h-5"
                }),
                createTextVNode(" Browse Characters ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const team = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-615323f9"]]);

export { team as default };
//# sourceMappingURL=team-D87VgASC.mjs.map
