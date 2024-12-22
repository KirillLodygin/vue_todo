import { u as useTodosStore, _ as _sfc_main$7, c as cn } from './todoList.store-B1LVFsD2.mjs';
import { useSSRContext, defineComponent, ref, computed, reactive, withCtx, createTextVNode, unref, toDisplayString, createVNode, mergeModels, useModel, mergeProps, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import _ from 'lodash';
import { a as navigateTo } from './server.mjs';
import { _ as _sfc_main$6, a as _sfc_main$4, b as _sfc_main$1$1, c as _sfc_main$5, d as _sfc_main$3$1, e as _sfc_main$2$1, f as _sfc_main$5$1, g as _sfc_main$8, h as _sfc_main$7$1 } from './DialogTitle-DBTqRLxx.mjs';
import { useForwardPropsEmits, CheckboxRoot, CheckboxIndicator } from 'radix-vue';
import { CheckIcon } from '@radix-icons/vue';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
import 'pinia';
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
import '@vueuse/core';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TaskTitle",
  __ssrInlineRender: true,
  props: {
    newTitle: {},
    oldTitle: {}
  },
  emits: ["updateNewTitle"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const titleIsNotEditing = ref(true);
    const taskTitle = ref(props.oldTitle.toUpperCase() || "");
    const emit = __emit;
    const cancelEditing = () => {
      emit("updateNewTitle", "");
      titleIsNotEditing.value = true;
    };
    const editTitle = () => {
      titleIsNotEditing.value = false;
    };
    const setNewTaskTitle = () => {
      emit("updateNewTitle", taskTitle.value);
      titleIsNotEditing.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIButton = _sfc_main$7;
      const _component_UILabel = _sfc_main$8;
      const _component_UIInput = _sfc_main$7$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (titleIsNotEditing.value) {
        _push(`<div class="flex justify-start gap-x-3 mb-5"><h2>${ssrInterpolate(_ctx.newTitle.toUpperCase() || _ctx.oldTitle.toUpperCase())}</h2><div>`);
        if (!_ctx.newTitle.length) {
          _push(ssrRenderComponent(_component_UIButton, {
            variant: "outline",
            size: "xs",
            onClick: editTitle
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Edit `);
              } else {
                return [
                  createTextVNode(" Edit ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_UIButton, {
            variant: "outline",
            size: "xs",
            onClick: cancelEditing
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Cancel Editing `);
              } else {
                return [
                  createTextVNode(" Cancel Editing ")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div></div>`);
      } else {
        _push(`<div><div>`);
        _push(ssrRenderComponent(_component_UILabel, {
          for: "name",
          class: "mb-5"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`New todo name`);
            } else {
              return [
                createTextVNode("New todo name")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UIInput, {
          id: "name",
          modelValue: taskTitle.value,
          "onUpdate:modelValue": ($event) => taskTitle.value = $event,
          type: "text",
          class: "mb-5",
          placeholder: "Your new todo name"
        }, null, _parent));
        _push(`</div><div class="flex justify-end gap-x-3">`);
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "default",
          onClick: cancelEditing
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
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
          onClick: setNewTaskTitle
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Done! `);
            } else {
              return [
                createTextVNode(" Done! ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TaskTitle/TaskTitle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: {},
    id: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    modelValue: { type: Boolean }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    useModel(__props, "modelValue");
    const delegatedProps = computed(() => {
      const { class: _2, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CheckboxRoot), mergeProps(unref(forwarded), {
        checked: props.modelValue,
        "onUpdate:checked": (value) => emits("update:modelValue", value),
        class: unref(cn)(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          props.class
        )
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CheckboxIndicator), { class: "flex h-full w-full items-center justify-center text-current" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(unref(CheckIcon), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(unref(CheckIcon), { class: "h-4 w-4" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CheckboxIndicator), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(unref(CheckIcon), { class: "h-4 w-4" })
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/checkbox/Checkbox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Tasks",
  __ssrInlineRender: true,
  props: {
    tasksInStore: {},
    tasks: {}
  },
  emits: ["deleteTaskPermanently", "setNewTaskTitle", "createTask"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { cloneDeep } = _;
    const emit = __emit;
    const showDialog = ref(false);
    const isShowed = ref(false);
    const taskText = ref("");
    const deletedTaskId = ref(null);
    const currentTasks = reactive(
      cloneDeep(
        props.tasks.map((task) => ({
          id: task.id,
          label: task.task.split(". ").splice(1).join(". ")
        }))
      )
    );
    const editTaskId = ref(null);
    const isShowCancelButton = computed(() => {
      const modifiedTasks = props.tasks.filter((task) => task.task.split(". ").splice(1).join(". ")).map((task) => task.id);
      console.log(modifiedTasks);
      const idsForFilter = [];
      modifiedTasks.forEach((id) => {
        const index1 = props.tasksInStore.findIndex((task) => task.id === id);
        const index2 = props.tasks.findIndex((task) => task.id === id);
        if (index1 !== -1 && index2 !== -1 && props.tasksInStore[index1].task.split(". ").splice(1).join(". ") !== props.tasks[index2].task.split(". ").splice(1).join(". ")) {
          idsForFilter.push(id);
        }
      });
      return idsForFilter;
    });
    const deleteTask = (id) => {
      showDialog.value = true;
      deletedTaskId.value = id;
    };
    const closeDialog = () => {
      showDialog.value = false;
    };
    const deleteTaskPermanently = () => {
      if (deletedTaskId.value) {
        emit("deleteTaskPermanently", deletedTaskId.value);
        const index = currentTasks.findIndex((task) => task.id === deletedTaskId.value);
        currentTasks.splice(index, 1);
      }
      deletedTaskId.value = null;
      showDialog.value = false;
    };
    const taskById = computed(() => {
      console.log("taskById editTaskId.value ", editTaskId.value);
      if (editTaskId.value) {
        const index = currentTasks.findIndex((task) => task.id === editTaskId.value);
        console.log("index ", index);
        if (index !== -1) {
          return currentTasks[index];
        }
      }
      return null;
    });
    const getEditTaskId = (id) => {
      editTaskId.value = id;
    };
    const cancelEditing = () => {
      editTaskId.value = null;
    };
    const cancelChanges = (id) => {
      emit("setNewTaskTitle", id, "");
    };
    const setNewTaskTitle = () => {
      const index = currentTasks.findIndex((task) => task.id === editTaskId.value);
      if (index !== -1) {
        emit("setNewTaskTitle", editTaskId.value, currentTasks[index].label);
      }
      editTaskId.value = null;
    };
    const onHide = () => {
      isShowed.value = false;
    };
    const onShow = () => {
      isShowed.value = true;
    };
    const deleteNewTask = (event) => {
      event.preventDefault();
      taskText.value = "";
    };
    const createTask = (event) => {
      event.preventDefault();
      currentTasks.push({
        id: props.tasks[props.tasks.length - 1].id + 1,
        label: taskText.value
      });
      emit("createTask", {
        id: props.tasks[props.tasks.length - 1].id + 1,
        task: `${props.tasks.length + 1}. ${taskText.value}`,
        isDone: false
      });
      taskText.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UILabel = _sfc_main$8;
      const _component_UIInput = _sfc_main$7$1;
      const _component_UIButton = _sfc_main$7;
      _push(`<!--[--><div class="mb-5"><h2 class="mb-2 text-lg font-bold">TASKS IN TODO</h2><div class="max-h-[650px] overflow-y-auto"><!--[-->`);
      ssrRenderList(_ctx.tasks, (task) => {
        _push(`<div><div class="flex justify-between items-center mb-3">`);
        if (editTaskId.value && editTaskId.value === task.id) {
          _push(`<div class="w-2/3"><div>`);
          _push(ssrRenderComponent(_component_UILabel, {
            for: "name",
            class: "mb-5"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Edit task`);
              } else {
                return [
                  createTextVNode("Edit task")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UIInput, {
            id: "name",
            modelValue: taskById.value.label,
            "onUpdate:modelValue": ($event) => taskById.value.label = $event,
            type: "text",
            class: "w-full px-2 mb-5",
            placeholder: "Edit task"
          }, null, _parent));
          _push(`</div><div class="flex justify-end gap-x-3">`);
          _push(ssrRenderComponent(_component_UIButton, {
            variant: "default",
            onClick: cancelEditing
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Cancel `);
              } else {
                return [
                  createTextVNode(" Cancel ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UIButton, {
            variant: "secondary",
            onClick: setNewTaskTitle
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Done! `);
              } else {
                return [
                  createTextVNode(" Done! ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<div class="flex justify-start gap-x-3">`);
          _push(ssrRenderComponent(unref(_sfc_main$2), {
            modelValue: task.isDone,
            "onUpdate:modelValue": ($event) => task.isDone = $event,
            id: task.id
          }, null, _parent));
          _push(ssrRenderComponent(_component_UILabel, {
            for: task.id
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(task.task.split(". ").splice(1).join(". ") ? task.task.split(". ").splice(1).join(". ") : _ctx.tasksInStore.filter((item) => item.id === task.id)[0].task.split(". ").splice(1).join(". "))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(task.task.split(". ").splice(1).join(". ") ? task.task.split(". ").splice(1).join(". ") : _ctx.tasksInStore.filter((item) => item.id === task.id)[0].task.split(". ").splice(1).join(". ")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        }
        _push(`<div>`);
        if (isShowCancelButton.value.includes(task.id)) {
          _push(ssrRenderComponent(_component_UIButton, {
            variant: "outline",
            size: "xs",
            onClick: ($event) => cancelChanges(task.id)
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Cancel Editing `);
              } else {
                return [
                  createTextVNode(" Cancel Editing ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "outline",
          size: "xs",
          onClick: ($event) => getEditTaskId(task.id)
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`editTask`);
            } else {
              return [
                createTextVNode("editTask")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "outline",
          size: "xs",
          class: "text-red-700",
          onClick: ($event) => deleteTask(task.id)
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`deleteTask`);
            } else {
              return [
                createTextVNode("deleteTask")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="mb-6 w-3/4 mx-auto"><div class="flex items-center justify-between"><h2 class="text-lg mr-5">Create new task</h2><div>`);
      if (isShowed.value) {
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "default",
          onClick: onHide
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
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
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
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
        _push(`<div><form><div class="mb-5">`);
        _push(ssrRenderComponent(_component_UILabel, { for: "name" }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`New task`);
            } else {
              return [
                createTextVNode("New task")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UIInput, {
          id: "name",
          modelValue: taskText.value,
          "onUpdate:modelValue": ($event) => taskText.value = $event,
          type: "text",
          placeholder: "New task"
        }, null, _parent));
        _push(`</div><div class="flex justify-end gap-x-3">`);
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "default",
          onClick: deleteNewTask
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
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
          disabled: !taskText.value.length,
          onClick: createTask
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
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
      _push(ssrRenderComponent(unref(_sfc_main$6), { open: showDialog.value }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "sm:max-w-md" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$1$1), null, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Delete task ?`);
                            } else {
                              return [
                                createTextVNode("Delete task ?")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3$1), null, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Are you sure you want to delete task? `);
                            } else {
                              return [
                                createTextVNode(" Are you sure you want to delete task? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createTextVNode("Delete task ?")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3$1), null, {
                            default: withCtx(() => [
                              createTextVNode(" Are you sure you want to delete task? ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2$1), { class: "sm:justify-start" }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5$1), { "as-child": "" }, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$7), {
                                onClick: closeDialog,
                                type: "button",
                                variant: "default"
                              }, {
                                default: withCtx((_6, _push6, _parent6, _scopeId5) => {
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
                                onClick: deleteTaskPermanently,
                                type: "button",
                                variant: "secondary"
                              }, {
                                default: withCtx((_6, _push6, _parent6, _scopeId5) => {
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
                                  onClick: deleteTaskPermanently,
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
                                onClick: deleteTaskPermanently,
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
                            createTextVNode("Delete task ?")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3$1), null, {
                          default: withCtx(() => [
                            createTextVNode(" Are you sure you want to delete task? ")
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
                              onClick: deleteTaskPermanently,
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
                          createTextVNode("Delete task ?")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3$1), null, {
                        default: withCtx(() => [
                          createTextVNode(" Are you sure you want to delete task? ")
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
                            onClick: deleteTaskPermanently,
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tasks/Tasks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const todosStore = useTodosStore();
    const { cloneDeep, isEqual } = _;
    const showDialog = ref(false);
    const isChangesNotSaved = ref(false);
    const openTodoId = computed(() => todosStore.openTodoId);
    const newTitle = ref("");
    const tasks = reactive(openTodoId.value ? cloneDeep(todosStore.getTodoById(openTodoId.value).tasks) : []);
    const isChanged = computed(
      () => openTodoId.value && newTitle.value && todosStore.getTodoById(openTodoId.value).title !== newTitle.value || openTodoId.value && !isEqual(tasks, todosStore.getTodoById(openTodoId.value).tasks)
    );
    const deleteTodo = () => {
      showDialog.value = true;
    };
    const closeDialog = () => {
      showDialog.value = false;
      if (isChangesNotSaved.value) {
        isChangesNotSaved.value = false;
        navigateTo("/todo_list/");
      }
    };
    const saveChanges = () => {
      if (isChanged.value && openTodoId.value) {
        todosStore.updateTodo(openTodoId.value, newTitle.value, tasks);
        isChangesNotSaved.value = false;
        newTitle.value = "";
      }
    };
    const doAction = () => {
      if (isChangesNotSaved.value && openTodoId.value) {
        todosStore.updateTodo(openTodoId.value, newTitle.value, tasks);
        showDialog.value = false;
        newTitle.value = "";
        localStorage.setItem("todoId", String(""));
        navigateTo("/todo_list/");
        return;
      }
      if (openTodoId.value) {
        todosStore.deleteTodo(openTodoId.value);
      }
      showDialog.value = false;
      localStorage.setItem("todoId", String(""));
      navigateTo("/todo_list/");
    };
    const returnToTodoList = () => {
      if (openTodoId.value && !isEqual(tasks, todosStore.getTodoById(openTodoId.value).tasks)) {
        tasks.forEach((task) => {
          if (!task.task.split(". ").splice(1).join(". ") && openTodoId.value) {
            task.task = task.task.split(". ")[0] + ". " + todosStore.getTodoById(openTodoId.value).tasks.filter((item) => item.id === task.id)[0].task.split(". ").splice(1).join(". ");
          }
        });
      }
      if (openTodoId.value && newTitle.value && todosStore.getTodoById(openTodoId.value).title !== newTitle.value || openTodoId.value && !isEqual(tasks, todosStore.getTodoById(openTodoId.value).tasks)) {
        isChangesNotSaved.value = true;
        showDialog.value = true;
        return;
      }
      localStorage.setItem("todoId", String(""));
      navigateTo("/todo_list/");
    };
    const updateNewTitle = (newVal) => {
      newTitle.value = newVal;
    };
    const deleteTaskPermanently = (id) => {
      const index = tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        tasks.splice(index, 1);
        tasks.forEach((task, index2) => {
          const label = task.task.split(". ");
          label[0] = `${index2 + 1}`;
          task.task = label.join(". ");
        });
      }
    };
    const setNewTaskTitle = (id, label) => {
      const index = tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        tasks.forEach((task) => {
          task.task = task.task.split(". ").splice(1).join(". ");
        });
        tasks[index].task = label;
        tasks.forEach((task, index2) => {
          task.task = `${index2 + 1}. ${task.task}`;
        });
      }
    };
    const undoChanges = () => {
      if (openTodoId.value) {
        newTitle.value = "";
        tasks.splice(0, tasks.length);
        todosStore.getTodoById(openTodoId.value).tasks.forEach((task) => {
          tasks.push(cloneDeep(task));
        });
      }
    };
    const createTask = (obj) => {
      tasks.push(obj);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIButton = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-start gap-x-2 mb-5">`);
      _push(ssrRenderComponent(_component_UIButton, {
        variant: "ghost",
        size: "xs",
        class: "text-red-700 mb-4",
        onClick: deleteTodo
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete todo `);
          } else {
            return [
              createTextVNode(" Delete todo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isChanged.value) {
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "destructive",
          size: "xs",
          class: "mb-4",
          onClick: saveChanges
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Save \u0441hanges `);
            } else {
              return [
                createTextVNode(" Save \u0441hanges ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isChanged.value) {
        _push(ssrRenderComponent(_component_UIButton, {
          variant: "default",
          size: "xs",
          class: "mb-4",
          onClick: undoChanges
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Undo \u0441hanges `);
            } else {
              return [
                createTextVNode(" Undo \u0441hanges ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UIButton, {
        variant: "ghost",
        size: "xs",
        class: "mb-4",
        onClick: returnToTodoList
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Return `);
          } else {
            return [
              createTextVNode(" Return ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full sm:w-11/12 md:w-10/12 2xl:w-3/4 mx-auto">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        "new-title": newTitle.value,
        "old-title": openTodoId.value ? unref(todosStore).getTodoById(openTodoId.value).title : "",
        onUpdateNewTitle: updateNewTitle
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        onDeleteTaskPermanently: deleteTaskPermanently,
        onSetNewTaskTitle: setNewTaskTitle,
        onCreateTask: createTask,
        "tasks-in-store": openTodoId.value ? unref(todosStore).getTodoById(openTodoId.value).tasks : [],
        tasks
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), { open: showDialog.value }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "sm:max-w-md" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$1$1), null, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(isChangesNotSaved.value ? "Changes not saved!" : "Delete todo?")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(isChangesNotSaved.value ? "Changes not saved!" : "Delete todo?"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3$1), null, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(isChangesNotSaved.value ? "Do you want to save changes?" : "Are you sure you want to delete todo?")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(isChangesNotSaved.value ? "Do you want to save changes?" : "Are you sure you want to delete todo?"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(isChangesNotSaved.value ? "Changes not saved!" : "Delete todo?"), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3$1), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(isChangesNotSaved.value ? "Do you want to save changes?" : "Are you sure you want to delete todo?"), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2$1), { class: "sm:justify-start" }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5$1), { "as-child": "" }, {
                          default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$7), {
                                onClick: closeDialog,
                                type: "button",
                                variant: "default"
                              }, {
                                default: withCtx((_6, _push6, _parent6, _scopeId5) => {
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
                                onClick: doAction,
                                type: "button",
                                variant: "secondary"
                              }, {
                                default: withCtx((_6, _push6, _parent6, _scopeId5) => {
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
                                  onClick: doAction,
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
                                onClick: doAction,
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
                            createTextVNode(toDisplayString(isChangesNotSaved.value ? "Changes not saved!" : "Delete todo?"), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3$1), null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(isChangesNotSaved.value ? "Do you want to save changes?" : "Are you sure you want to delete todo?"), 1)
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
                              onClick: doAction,
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
                          createTextVNode(toDisplayString(isChangesNotSaved.value ? "Changes not saved!" : "Delete todo?"), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3$1), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(isChangesNotSaved.value ? "Do you want to save changes?" : "Are you sure you want to delete todo?"), 1)
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
                            onClick: doAction,
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/todo_list/[todo_list_id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DZCWDvxD.mjs.map
