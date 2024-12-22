import { u as useTodosStore, _ as _sfc_main$1 } from './todoList.store-B1LVFsD2.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as navigateTo } from './server.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
import 'pinia';
import 'lodash';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const todosStore = useTodosStore();
    const startNewTodoList = (event) => {
      event.preventDefault();
      todosStore.startNewTodoList();
      navigateTo("/todo_list");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIButton = _sfc_main$1;
      _push(ssrRenderComponent(_component_UIButton, mergeProps({
        variant: "destructive",
        onClick: startNewTodoList
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u0442\u044C \u043A \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E \u0441\u043F\u0438\u0441\u043A\u0430 \u0437\u0430\u0434\u0430\u0447 `);
          } else {
            return [
              createTextVNode(" \u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u0442\u044C \u043A \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E \u0441\u043F\u0438\u0441\u043A\u0430 \u0437\u0430\u0434\u0430\u0447 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BzQOldip.mjs.map
