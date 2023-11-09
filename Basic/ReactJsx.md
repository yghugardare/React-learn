## targett

what is react ?
what is component in react? functional copmponents?
what is jsx?Rules of jsx
what are props?
props children?
List rendering in react?
what is render ? how babel converts hjsx to tree
vDom, reconcilliation,diffing, fibre, need of key in map
What are hooks?
what is useState? counter app, bgChnager,Crud using uaseState
useState interview question on counter

4 - 9 complete vide-
In reactr, what is use of '{ }'? can we write if else or declare a fn
or just write a variable

can we pass array or object in props? how ? use propsName = {jsObj}
what is default props in JS ? what is the need?how to add default value

![image](https://github.com/yghugardare/React-learn/assets/117991996/c8ba1ec4-8eee-479f-9778-7c22c28d6ab3)

- useState sends setfuncs in batches , becoz of the fibre diffing aslgorithm, because of which in this case, the fibre see's all 
setCounters as one thing repeated multiple time's , it sends only one setCounter instead of sending all in a batch for optimization purpose.
- So here the function calls will be sent in batches. So, react will see them as the same operation and perform it only once. So, the counter 
will increase by only 1 count.

![image](https://github.com/yghugardare/React-learn/assets/117991996/f6a71a97-2042-49f9-8ef9-f52b40fb5ed8)

- it will send another batch in second render only if it sees different types of operation being performed on the same setCounter.
- To increase it by four counts, use the callback which the setCounter accepts and increase it one by one. So, the first function will be called first, the callback will be executed and the next function call will be executed.

## onClick
- this rquires a function reference , but what if on click i want that function to have some parameter ? 
- to solve it we use callback
- ```javascript
    <button onClick={()=>changeColor("red")}>Red btn</button>

    ```