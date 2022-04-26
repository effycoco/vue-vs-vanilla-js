A simple project from [Vue - The Complete Guide, Section 1](https://www.udemy.com/course/vuejs-2-the-complete-guide/)

First built with vanilla JS, then re-built with Vue.

## What I Learned

1.  ```js
    {
        data(){
            return ;
        }
    }
    ```
    is the same as
    ```js
    {
        data:(){
            return ;
        }
    }
    ```
2.  `data`所返回的数据在 js 中使用时前面要加`this.`, 在 html 中使用时不需要加。js 中 `this` 指 data 返回的对象。

## Reference

1. [Use vue without a build step](https://vuejs.org/guide/quick-start.html#without-build-tools)
