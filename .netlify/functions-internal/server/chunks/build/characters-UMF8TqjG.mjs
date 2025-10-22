import { _ as __nuxt_component_0 } from './AppHeader-BRsqLyfZ.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-gGWkbi4O.mjs';
import { defineComponent, withAsyncContext, ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useFetch, A as API_ENDPOINTS } from './api-DsX48PZT.mjs';
import './index-9_hv1OMF.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './server.mjs';
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
import 'pinia';
import 'vue-router';
import './composables-CoAFnUYU.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './team-89d0l36M.mjs';
import '@vue/shared';

const itemsPerPage = 12;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "characters",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(API_ENDPOINTS.allCharacters, "$n8jvSNE8IQ")), __temp = await __temp, __restore(), __temp);
    const searchQuery = ref("");
    const currentPage = ref(1);
    const filteredCharacters = computed(() => {
      if (!data.value) return [];
      const query = searchQuery.value.trim().toLowerCase();
      if (query === "") return data.value;
      return data.value.filter(
        (character) => character.name.toLowerCase().includes(query)
      );
    });
    watch(searchQuery, (newValue) => {
      if (newValue.trim() === "") {
        currentPage.value = 1;
      }
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredCharacters.value.length / itemsPerPage);
    });
    const paginatedCharacters = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredCharacters.value.slice(start, end);
    });
    const displayedPages = computed(() => {
      const pages = [];
      const maxVisible = 5;
      let startPage = Math.max(1, currentPage.value - Math.floor(maxVisible / 2));
      let endPage = Math.min(totalPages.value, startPage + maxVisible - 1);
      if (endPage - startPage < maxVisible - 1) {
        startPage = Math.max(1, endPage - maxVisible + 1);
      }
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen w-full bg-[#0f1318] text-offwhite" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<section class="mx-auto w-full max-w-6xl px-6 pt-8 pb-4"><h1 class="font-cinzel text-3xl mb-2">Characters</h1><p class="font-poppins text-white/70">Browse the roster.</p></section><section class="mx-auto w-full max-w-6xl px-6 pb-4"><input type="text"${ssrRenderAttr("value", unref(searchQuery))} placeholder="Search characters by name..." class="w-full p-2 border border-white/10 rounded-lg bg-transparent text-white"><button class="mt-2 px-4 py-2 bg-gold text-black rounded-lg font-poppins hover:brightness-110 transition"> Search </button></section><section class="mx-auto w-full max-w-6xl px-6 pb-10">`);
      if (unref(error)) {
        _push(`<p class="text-red-300 font-poppins"> Failed to load characters. Please try again. </p>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"><!--[-->`);
        ssrRenderList(unref(paginatedCharacters), (c) => {
          _push(`<article class="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition"><img${ssrRenderAttr("src", c.image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop")}${ssrRenderAttr("alt", c.name)} class="w-full h-48 object-cover" loading="lazy"><div class="p-4"><h2 class="font-cinzel text-lg mb-1 line-clamp-1">${ssrInterpolate(c.name)}</h2><p class="font-poppins text-sm text-white/70"> Gender: ${ssrInterpolate(c.gender || "—")}</p></div><footer class="bg-white/[0.04] border-t border-white/10 relative z-10">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/details/${c.id}`,
            class: "block text-center text-sm text-gold font-poppins py-3 hover:bg-white/10 transition cursor-pointer"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View Details `);
              } else {
                return [
                  createTextVNode(" View Details ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</footer></article>`);
        });
        _push(`<!--]--></div>`);
      }
      if (!unref(error) && unref(totalPages) > 1) {
        _push(`<div class="mt-10 flex items-center justify-center gap-2"><button${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""} class="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 font-poppins text-sm hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition"> Previous </button><!--[-->`);
        ssrRenderList(unref(displayedPages), (page) => {
          _push(`<button class="${ssrRenderClass([
            "px-4 py-2 rounded-lg border font-poppins text-sm transition",
            unref(currentPage) === page ? "bg-gold text-[#0f1318] border-gold font-semibold" : "bg-white/[0.04] border-white/10 hover:bg-white/10"
          ])}">${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--><button${ssrIncludeBooleanAttr(unref(currentPage) === unref(totalPages)) ? " disabled" : ""} class="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 font-poppins text-sm hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition"> Next </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/characters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=characters-UMF8TqjG.mjs.map
