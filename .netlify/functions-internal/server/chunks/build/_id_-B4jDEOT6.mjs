import { _ as __nuxt_component_0 } from './nuxt-link-gGWkbi4O.mjs';
import { _ as __nuxt_component_1 } from './index-9_hv1OMF.mjs';
import { defineComponent, computed, withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useMyTeamStore, i as isEvilCharacter } from './team-89d0l36M.mjs';
import { u as useFetch, A as API_ENDPOINTS } from './api-DsX48PZT.mjs';
import { u as useHead } from './composables-CoAFnUYU.mjs';
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
import 'pinia';
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const placeholder = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = computed(() => Number(route.params.id));
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => API_ENDPOINTS.characterById(id.value),
      { key: `sw-character-${id.value}` },
      "$I9186Pk5AS"
    )), __temp = await __temp, __restore(), __temp);
    const character = computed(() => data.value ?? null);
    const { data: allList } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      API_ENDPOINTS.allCharacters,
      { default: () => [], key: "sw-all" },
      "$qxood2zWVa"
    )), __temp = await __temp, __restore(), __temp);
    const ids = computed(() => (allList.value || []).map((x) => x.id).sort((a, b) => a - b));
    const idx = computed(() => ids.value.findIndex((x) => x === id.value));
    const prevId = computed(() => idx.value > 0 ? ids.value[idx.value - 1] : null);
    const nextId = computed(() => idx.value >= 0 && idx.value < ids.value.length - 1 ? ids.value[idx.value + 1] : null);
    const teamStore = useMyTeamStore();
    const isInTeam = computed(() => teamStore.isInTeam(id.value));
    const evil = computed(() => character.value ? isEvilCharacter(character.value) : false);
    const subtitle = computed(() => {
      const parts = [character.value?.species, character.value?.homeworld].filter(Boolean);
      return parts.length ? parts.join(" • ") : "";
    });
    const hasAffiliations = computed(() => Array.isArray(character.value?.affiliations) && character.value.affiliations.length > 0);
    const hasMasters = computed(() => Array.isArray(character.value?.masters) && character.value.masters.length > 0);
    const hasApprentices = computed(() => Array.isArray(character.value?.apprentices) && character.value.apprentices.length > 0);
    useHead(() => ({
      title: character.value ? `${character.value.name} • Details` : "Character Details"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen w-full bg-[#0f1318] text-offwhite" }, _attrs))} data-v-5475737c><section class="mx-auto w-full max-w-6xl px-6 pt-8" data-v-5475737c><div class="flex items-center justify-between gap-3" data-v-5475737c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/characters",
        class: "inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "solar:arrow-left-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(` Back to Characters `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "solar:arrow-left-bold",
                class: "w-4 h-4"
              }),
              createTextVNode(" Back to Characters ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-3" data-v-5475737c>`);
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
            _push2(` Team ${ssrInterpolate(unref(teamStore).size)}/${ssrInterpolate(unref(teamStore).max)}`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:users-three-duotone",
                class: "w-4 h-4"
              }),
              createTextVNode(" Team " + toDisplayString(unref(teamStore).size) + "/" + toDisplayString(unref(teamStore).max), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden sm:flex items-center gap-2" data-v-5475737c>`);
      if (unref(prevId)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/details/${unref(prevId)}`,
          class: "inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:arrow-left",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(` Prev `);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ph:arrow-left",
                  class: "h-4 w-4"
                }),
                createTextVNode(" Prev ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(nextId)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/details/${unref(nextId)}`,
          class: "inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Next `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:arrow-right",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" Next "),
                createVNode(_component_Icon, {
                  name: "ph:arrow-right",
                  class: "h-4 w-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section class="mx-auto w-full max-w-6xl px-6 py-10" data-v-5475737c>`);
      if (unref(pending)) {
        _push(`<div class="text-white/70 font-poppins" data-v-5475737c>Loading…</div>`);
      } else if (unref(error)) {
        _push(`<div class="text-red-300 font-poppins" data-v-5475737c>Failed to load character. Please try again.</div>`);
      } else if (!unref(character)) {
        _push(`<div class="text-center py-24" data-v-5475737c><h2 class="font-cinzel text-2xl mb-2" data-v-5475737c>Character Not Found</h2><p class="text-white/70 font-poppins" data-v-5475737c>This ID doesn’t exist.</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 xl:grid-cols-[360px,1fr] gap-8 items-start" data-v-5475737c><aside class="xl:sticky xl:top-8 h-fit" data-v-5475737c><div class="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]" data-v-5475737c><div class="relative w-full aspect-[3/4] bg-white/5" data-v-5475737c><img${ssrRenderAttr("src", unref(character).image || placeholder)}${ssrRenderAttr("alt", unref(character).name)} class="absolute inset-0 w-full h-full object-cover" loading="lazy" data-v-5475737c>`);
        if (unref(evil)) {
          _push(`<span class="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-red-500/15 border border-red-400/40 text-red-200 px-2.5 py-0.5 text-[12px] font-poppins" data-v-5475737c>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:warning-octagon-duotone",
            class: "w-4 h-4"
          }, null, _parent));
          _push(` Evil </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4" data-v-5475737c><div class="space-y-2" data-v-5475737c><div class="flex items-center gap-2 text-sm font-poppins" data-v-5475737c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:user",
          class: "w-4 h-4 text-gold"
        }, null, _parent));
        _push(`<span class="text-white/70" data-v-5475737c>Sex:</span><span class="capitalize" data-v-5475737c>${ssrInterpolate(unref(character).gender || "—")}</span></div>`);
        if (unref(character).species) {
          _push(`<div class="flex items-center gap-2 text-sm font-poppins" data-v-5475737c>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:plant-duotone",
            class: "w-4 h-4 text-gold"
          }, null, _parent));
          _push(`<span class="text-white/70" data-v-5475737c>Species:</span><span class="capitalize" data-v-5475737c>${ssrInterpolate(unref(character).species)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(character).homeworld) {
          _push(`<div class="flex items-center gap-2 text-sm font-poppins" data-v-5475737c>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:globe-hemisphere-west-duotone",
            class: "w-4 h-4 text-gold"
          }, null, _parent));
          _push(`<span class="text-white/70" data-v-5475737c>Homeworld:</span><span class="capitalize" data-v-5475737c>${ssrInterpolate(unref(character).homeworld)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-4 flex flex-wrap items-center gap-2" data-v-5475737c>`);
        if (unref(character).wiki) {
          _push(`<a${ssrRenderAttr("href", unref(character).wiki)} target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition" data-v-5475737c>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:link-simple-duotone",
            class: "w-4 h-4"
          }, null, _parent));
          _push(` Wiki </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="${ssrRenderClass([
          unref(isInTeam) ? "border border-white/10 hover:bg-white/10" : unref(evil) ? "border border-red-500/40 text-red-200/80 cursor-not-allowed" : !unref(teamStore).isFull ? "bg-gold text-black hover:brightness-110" : "border border-white/10 opacity-50 cursor-not-allowed",
          "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-poppins transition relative group"
        ])}"${ssrIncludeBooleanAttr(!unref(isInTeam) && unref(teamStore).isFull || !unref(isInTeam) && unref(evil)) ? " disabled" : ""}${ssrRenderAttr(
          "title",
          unref(isInTeam) ? "Remove from Team" : unref(teamStore).isFull ? `Team is full (${unref(teamStore).max})` : "Add to Team"
        )} data-v-5475737c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: unref(isInTeam) ? "ph:user-minus-duotone" : "ph:user-plus-duotone",
          class: "w-4 h-4"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(isInTeam) ? "Remove from team" : "Add to team")} `);
        if (unref(evil) && !unref(isInTeam)) {
          _push(`<span class="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-red-500/90 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50" data-v-5475737c>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:warning-duotone",
            class: "inline w-3 h-3 mr-1"
          }, null, _parent));
          _push(` Evil characters cannot join your team <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500/90 rotate-45" data-v-5475737c></span></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button><span class="ml-auto text-xs text-white/60 font-poppins" data-v-5475737c> Team: ${ssrInterpolate(unref(teamStore).size)}/${ssrInterpolate(unref(teamStore).max)}</span></div></div></aside><main class="space-y-6" data-v-5475737c><header class="rounded-2xl border border-white/10 bg-white/[0.04] p-5" data-v-5475737c><h1 class="font-cinzel text-3xl leading-tight" data-v-5475737c>${ssrInterpolate(unref(character).name)}</h1>`);
        if (unref(subtitle)) {
          _push(`<p class="mt-1 text-sm text-white/60 font-poppins" data-v-5475737c>${ssrInterpolate(unref(subtitle))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</header><section class="grid grid-cols-2 md:grid-cols-5 gap-4" data-v-5475737c><div class="stat-card" data-v-5475737c><p class="stat-label" data-v-5475737c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:ruler-duotone",
          class: "mr-1 inline h-4 w-4"
        }, null, _parent));
        _push(` Height</p><p class="stat-value" data-v-5475737c>${ssrInterpolate(unref(character).height ?? "—")}</p></div><div class="stat-card" data-v-5475737c><p class="stat-label" data-v-5475737c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:scales-duotone",
          class: "mr-1 inline h-4 w-4"
        }, null, _parent));
        _push(` Mass</p><p class="stat-value" data-v-5475737c>${ssrInterpolate(unref(character).mass ?? "—")}</p></div><div class="stat-card" data-v-5475737c><p class="stat-label" data-v-5475737c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:baby-duotone",
          class: "mr-1 inline h-4 w-4"
        }, null, _parent));
        _push(` Born</p><p class="stat-value" data-v-5475737c>${ssrInterpolate(unref(character).born ?? "—")}</p></div><div class="stat-card" data-v-5475737c><p class="stat-label" data-v-5475737c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:skull-duotone",
          class: "mr-1 inline h-4 w-4"
        }, null, _parent));
        _push(` Died</p><p class="stat-value" data-v-5475737c>${ssrInterpolate(unref(character).died ?? "—")}</p></div><div class="stat-card" data-v-5475737c><p class="stat-label" data-v-5475737c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:map-pin-line-duotone",
          class: "mr-1 inline h-4 w-4"
        }, null, _parent));
        _push(` Born at</p><p class="stat-value" data-v-5475737c>${ssrInterpolate(unref(character).bornLocation || "—")}</p></div></section><section class="panel" data-v-5475737c><h3 class="panel-title" data-v-5475737c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:list-bullets-duotone",
          class: "mr-2 inline h-5 w-5 text-gold"
        }, null, _parent));
        _push(` Facts</h3><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm font-poppins" data-v-5475737c><div class="fact" data-v-5475737c><span class="label" data-v-5475737c>Died at:</span> <span data-v-5475737c>${ssrInterpolate(unref(character).diedLocation || "—")}</span></div><div class="fact" data-v-5475737c><span class="label" data-v-5475737c>Eye color:</span> <span class="capitalize" data-v-5475737c>${ssrInterpolate(unref(character).eyeColor || "—")}</span></div><div class="fact" data-v-5475737c><span class="label" data-v-5475737c>Hair color:</span> <span class="capitalize" data-v-5475737c>${ssrInterpolate(unref(character).hairColor || "—")}</span></div><div class="fact" data-v-5475737c><span class="label" data-v-5475737c>Skin color:</span> <span class="capitalize" data-v-5475737c>${ssrInterpolate(unref(character).skinColor || "—")}</span></div><div class="fact" data-v-5475737c><span class="label" data-v-5475737c>Cybernetics:</span> <span data-v-5475737c>${ssrInterpolate(unref(character).cybernetics || "—")}</span></div></div></section><section class="grid md:grid-cols-2 gap-4" data-v-5475737c>`);
        if (unref(hasAffiliations)) {
          _push(`<div class="panel" data-v-5475737c><h3 class="panel-title" data-v-5475737c>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:users-three-duotone",
            class: "mr-2 inline h-5 w-5 text-gold"
          }, null, _parent));
          _push(` Affiliations</h3><ul class="list" data-v-5475737c><!--[-->`);
          ssrRenderList(unref(character).affiliations, (a, i) => {
            _push(`<li data-v-5475737c>${ssrInterpolate(a)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(hasMasters)) {
          _push(`<div class="panel" data-v-5475737c><h3 class="panel-title" data-v-5475737c>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:sword-duotone",
            class: "mr-2 inline h-5 w-5 text-gold"
          }, null, _parent));
          _push(` Masters</h3><ul class="list" data-v-5475737c><!--[-->`);
          ssrRenderList(unref(character).masters, (m, i) => {
            _push(`<li data-v-5475737c>${ssrInterpolate(m)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(hasApprentices)) {
          _push(`<div class="panel md:col-span-2" data-v-5475737c><h3 class="panel-title" data-v-5475737c>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ph:graduation-cap-duotone",
            class: "mr-2 inline h-5 w-5 text-gold"
          }, null, _parent));
          _push(` Apprentices</h3><ul class="list" data-v-5475737c><!--[-->`);
          ssrRenderList(unref(character).apprentices, (p, i) => {
            _push(`<li data-v-5475737c>${ssrInterpolate(p)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section><div class="sm:hidden flex items-center justify-between" data-v-5475737c>`);
        if (unref(prevId)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/details/${unref(prevId)}`,
            class: "inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:arrow-left",
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
                _push2(` Prev `);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ph:arrow-left",
                    class: "h-4 w-4"
                  }),
                  createTextVNode(" Prev ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(nextId)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/details/${unref(nextId)}`,
            class: "inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Next `);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:arrow-right",
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(" Next "),
                  createVNode(_component_Icon, {
                    name: "ph:arrow-right",
                    class: "h-4 w-4"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></main></div>`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/details/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5475737c"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-B4jDEOT6.mjs.map
