import{u as r,_ as d}from"./Bq_7dxGS.js";import{d as i,J as c,m as e,t as _,K as l,A as m,B as u}from"./DCQOYHCu.js";const T=i({__name:"index",setup(f){const s=r();c(()=>{const t=localStorage.getItem("todoList")||"",o=localStorage.getItem("todoId")||"";t.length&&(s.setTodoList(t),o?e(`/todo_list/${o}`):e("/todo_list"))});const a=t=>{t.preventDefault(),s.startNewTodoList(),e("/todo_list")};return(t,o)=>{const n=d;return _(),l(n,{variant:"destructive",onClick:a},{default:m(()=>o[0]||(o[0]=[u(" Приступить к созданию списка задач ")])),_:1})}}});export{T as default};