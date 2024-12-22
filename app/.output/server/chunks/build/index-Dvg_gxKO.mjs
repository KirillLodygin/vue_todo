import { c as cn, u as useTodosStore, _ as _sfc_main$7 } from './todoList.store-B1LVFsD2.mjs';
import { _ as _sfc_main$6, a as _sfc_main$4, b as _sfc_main$1$1, c as _sfc_main$5, d as _sfc_main$3$1, e as _sfc_main$2$1, f as _sfc_main$5$1, g as _sfc_main$8, h as _sfc_main$7$1 } from './DialogTitle-DBTqRLxx.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, ref, computed, withCtx, createTextVNode, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { _ as _export_sfc, a as navigateTo } from './server.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        ),
        style: { "resize": "none", "overflow-y": "auto", "margin-bottom": "15px" }
      }, _attrs), "textarea")} data-v-1c4c2d2a>${ssrInterpolate(unref(modelValue))}</textarea>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/textarea/Textarea.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1c4c2d2a"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NewTodoForm",
  __ssrInlineRender: true,
  setup(__props) {
    const taskTitle = ref("");
    const tasks = ref("");
    const entersCount = ref(1);
    const isAttention = ref(false);
    const isShowed = ref(false);
    const todosStore = useTodosStore();
    const lastTodoId = computed(() => {
      if (!todosStore.todoList.length) return 0;
      return todosStore.todoList[todosStore.todoList.length - 1].id;
    });
    const handleInput = (event) => {
      const target = event.target;
      taskTitle.value = target.value.toUpperCase();
    };
    const onFocus = () => {
      isAttention.value = false;
      if (!tasks.value) {
        tasks.value = `${entersCount.value}. `;
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        entersCount.value += 1;
        tasks.value += `
${entersCount.value}. `;
      }
    };
    const updateRefs = () => {
      tasks.value = "";
      taskTitle.value = "";
      entersCount.value = 1;
      isAttention.value = false;
    };
    const deleteTask = (event) => {
      event.preventDefault();
      updateRefs();
    };
    const createTask = (event) => {
      event.preventDefault();
      if (tasks.value.length && taskTitle.value.length) {
        const tasksArr = tasks.value.split("\n").map((task, index2) => ({
          id: index2 + 1,
          task,
          isDone: false
        }));
        const newTodo = {
          id: lastTodoId.value + 1,
          title: taskTitle.value,
          tasks: tasksArr
        };
        todosStore.createNewTodo(newTodo);
        updateRefs();
        return;
      }
      isAttention.value = true;
    };
    const onHide = () => {
      isShowed.value = false;
    };
    const onShow = () => {
      isShowed.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIButton = _sfc_main$7;
      const _component_UILabel = _sfc_main$8;
      const _component_UIInput = _sfc_main$7$1;
      const _component_UITextarea = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-6 w-full sm:w-11/12 md:w-10/12 2xl:w-3/4 mx-auto" }, _attrs))}><div class="flex items-center justify-between"><h2 class="text-lg mr-5">Create new todo</h2><div>`);
      if (isShowed.value) {
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "default",
          onClick: onHide
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Hide`);
            } else {
              return [
                createTextVNode("Hide")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "destructive",
          onClick: onShow
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Show! `);
            } else {
              return [
                createTextVNode(" Show! ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div>`);
      if (isShowed.value) {
        _push(`<div><form><div>`);
        _push(ssrRenderComponent(_component_UILabel, { for: "name" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Your new task name`);
            } else {
              return [
                createTextVNode("Your new task name")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UIInput, {
          id: "name",
          modelValue: taskTitle.value,
          "onUpdate:modelValue": ($event) => taskTitle.value = $event,
          onFocus: () => {
            isAttention.value = false;
          },
          type: "text",
          placeholder: "Your new todo name",
          onInput: handleInput
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_UILabel, { for: "tasks" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Your new task`);
            } else {
              return [
                createTextVNode("Your new task")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UITextarea, {
          id: "tasks",
          modelValue: tasks.value,
          "onUpdate:modelValue": ($event) => tasks.value = $event,
          onFocus,
          onKeydown: handleKeyDown,
          placeholder: "Type new task here."
        }, null, _parent));
        _push(`</div>`);
        if (isAttention.value) {
          _push(`<p class="pl-3 text-red-700">All fields for creation are not filled in!</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-end gap-x-3">`);
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "default",
          onClick: deleteTask
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Cancel `);
            } else {
              return [
                createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "secondary",
          onClick: createTask
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Create! `);
            } else {
              return [
                createTextVNode(" Create! ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewTodoForm/NewTodoForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Todos",
  __ssrInlineRender: true,
  setup(__props) {
    const todosStore = useTodosStore();
    const showDialog = ref(false);
    const idToDelete = ref(null);
    const todoList = computed(() => todosStore.todoList);
    computed(() => todosStore.isNewTodoListStarted);
    const returnTaskString = (str) => {
      let newStr = str.length > 50 ? str.slice(0, 47) + "..." : str;
      newStr = newStr.split(". ");
      newStr[0] = `${newStr[0]}.`;
      return newStr;
    };
    const selectToView = (id) => {
      todosStore.updateOpenTodoId(id);
      localStorage.setItem("todoId", String(id));
      navigateTo(`/todo_list/${id}`);
    };
    const clearTodos = () => {
      showDialog.value = true;
    };
    const closeDialog = () => {
      showDialog.value = false;
    };
    const deleteTodoPermanently = () => {
      if (idToDelete.value) {
        todosStore.deleteTodo(idToDelete.value);
        idToDelete.value = null;
      } else {
        todosStore.clearTodoList();
      }
      showDialog.value = false;
    };
    const deleteTodo = (id) => {
      showDialog.value = true;
      idToDelete.value = id;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIButton = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full sm:w-11/12 md:w-10/12 2xl:w-3/4 mx-auto" }, _attrs))}>`);
      if (todoList.value.length) {
        _push(`<div class="flex items-center justify-start mb-10"><div class="mr-5">${ssrInterpolate(todoList.value.length)} items in list</div>`);
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "destructive",
          size: "sm",
          onClick: clearTodos
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Clear Todos `);
            } else {
              return [
                createTextVNode(" Clear Todos ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="mb-2 text-lg font-bold">TODOS</h2>`);
      if (todoList.value.length) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"><!--[-->`);
        ssrRenderList(todoList.value, (todo) => {
          _push(`<div class="p-6 rounded shadow-md">`);
          _push(ssrRenderComponent(_component_UIButton, {
            variant: "link",
            onClick: ($event) => selectToView(todo.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="mb-2 text-lg font-bold"${_scopeId}>${ssrInterpolate(todo.title.toUpperCase())}</h3>`);
              } else {
                return [
                  createVNode("h3", { class: "mb-2 text-lg font-bold" }, toDisplayString(todo.title.toUpperCase()), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UIButton, {
            variant: "ghost",
            size: "xs",
            class: "text-red-700 mb-4",
            onClick: ($event) => deleteTodo(todo.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Delete todo! `);
              } else {
                return [
                  createTextVNode(" Delete todo! ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<!--[-->`);
          ssrRenderList(todo.tasks, (task) => {
            _push(`<div class="mb-2 flex items-start gap-x-5"><!--[-->`);
            ssrRenderList(returnTaskString(task.task), (item) => {
              _push(`<div class="${ssrRenderClass([{ "text-red-700": task.isDone }, "leading-tight"])}">${ssrInterpolate(item)}</div>`);
            });
            _push(`<!--]--></div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(_sfc_main$6), { open: showDialog.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "sm:max-w-md" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$1$1), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(idToDelete.value ? "Delete todo ?" : "Clear Todos")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(idToDelete.value ? "Delete todo ?" : "Clear Todos"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3$1), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(idToDelete.value ? "Are you sure you want to delete todo?" : "Are you sure you want to clear todos?")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(idToDelete.value ? "Are you sure you want to delete todo?" : "Are you sure you want to clear todos?"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(idToDelete.value ? "Delete todo ?" : "Clear Todos"), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3$1), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(idToDelete.value ? "Are you sure you want to delete todo?" : "Are you sure you want to clear todos?"), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2$1), { class: "sm:justify-start" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5$1), { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$7), {
                                onClick: closeDialog,
                                type: "button",
                                variant: "default"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` No `);
                                  } else {
                                    return [
                                      createTextVNode(" No ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$7), {
                                onClick: deleteTodoPermanently,
                                type: "button",
                                variant: "secondary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Ok `);
                                  } else {
                                    return [
                                      createTextVNode(" Ok ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$7), {
                                  onClick: closeDialog,
                                  type: "button",
                                  variant: "default"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" No ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$7), {
                                  onClick: deleteTodoPermanently,
                                  type: "button",
                                  variant: "secondary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Ok ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5$1), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$7), {
                                onClick: closeDialog,
                                type: "button",
                                variant: "default"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" No ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$7), {
                                onClick: deleteTodoPermanently,
                                type: "button",
                                variant: "secondary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Ok ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$1$1), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(idToDelete.value ? "Delete todo ?" : "Clear Todos"), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3$1), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(idToDelete.value ? "Are you sure you want to delete todo?" : "Are you sure you want to clear todos?"), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$2$1), { class: "sm:justify-start" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5$1), { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$7), {
                              onClick: closeDialog,
                              type: "button",
                              variant: "default"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" No ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$7), {
                              onClick: deleteTodoPermanently,
                              type: "button",
                              variant: "secondary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Ok ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), { class: "sm:max-w-md" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$1$1), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$5), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(idToDelete.value ? "Delete todo ?" : "Clear Todos"), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3$1), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(idToDelete.value ? "Are you sure you want to delete todo?" : "Are you sure you want to clear todos?"), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$2$1), { class: "sm:justify-start" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$5$1), { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), {
                            onClick: closeDialog,
                            type: "button",
                            variant: "default"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" No ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), {
                            onClick: deleteTodoPermanently,
                            type: "button",
                            variant: "secondary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Ok ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Todos/Todos.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NewTodoForm = _sfc_main$2;
  const _component_Todos = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-10" }, _attrs))}><h1 class="text-4xl font-bold mb-6 pb-2">TODO_LIST</h1><section>`);
  _push(ssrRenderComponent(_component_NewTodoForm, null, null, _parent));
  _push(`</section><section>`);
  _push(ssrRenderComponent(_component_Todos, null, null, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/todo_list/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Dvg_gxKO.mjs.map
