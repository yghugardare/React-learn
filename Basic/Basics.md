# Basics of React
## What is react?
- It is a JS based UI library for building Web and Native(mobile) applications.
- React is in two parts 
    1. ReactDom -> built for web applications
    2. ReactNative -> built for mobile applications

## what is component in React ? 
- React applications are built from isolated pieces of UI called components. A React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page.

## What is JSX ? what are rules of JSX?
- JSX (JavaScript XML) is an extension syntax used in React for writing the structure and logic of components in a more expressive and intuitive manner. It allows you to write HTML-like code directly within JavaScript, making it easier to create and manipulate user interfaces.
- Rules - 
    1. Return a single root element
    2. To return multiple elements from a component, **wrap them with a single parent tag.**This empty tag is called a *[Fragment.](https://react.dev/reference/react/Fragment)* Fragments let you group things without leaving any trace in the browser HTML tree.  `<> Code here </>` 
    3. Close all tags - if self closing using <img /> use this
    4. Camel Case most things - 
        - Use **`className`** instead of **`class`** for applying CSS classes.
        - Use **`htmlFor`** instead of **`for`** for associating labels with form inputs. 
    5. First letter of the component inside JSX must be capital. Eg)<Component/>

## what are curly braces in react?
- Within JSX, you can embed JavaScript expressions using curly braces {}. This allows you to include dynamic values, variables, and function calls.
- There primary purpose is to evaluate JS and not Run it. So do not if-else inside it.
- Double Curly braces -  {{ and }} is not special syntax, it’s a JavaScript object tucked inside JSX curly braces.
- You can tuck in style , object,arr whatever you want.
- we can also give, function references inside it. If function needs to passed in with an argument we can give reference using a **callback**.
- Examples) 
    ```javascript
        function App(){
            let name = "Yash";
            return (
                <div style={{backgroundColor:"red"}}>
                    {name}
                    <button onClick={()=>changeColor("red")}>Add</button>
                    <button onClick={functionRef}>Increase value</button>
                </div>
            )
        }
    ```

## what are props in react
- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.
- props meaning properties, just like we have html attributes like src,href,etc.
- Props are passed from parent to child components.
- They cannot be changed by the child component.
- If any changes need to be made then they should be done at the parent level.
- They internally work as an object.

### how to pass prop to child component
```javascript
export default function Profile() {
    
  return (
    <Avatar
      person={{ name: 'yash',age: 21  }}
      size={100}
      job="developer"
    />
  );
}
```
### reading props inside a child component
- If someone else is working in your codebase, he may forget to pass in one or more prop, in that case we use **default prop**
```javascript
function Avatar({person,size=100,job}){
    <>
        <h3>{person.name}</h3>
        <p>{person.age}</p>
        <p>{job}</p>
        <img src="img.png" width={size} height={size}/>
    </>
}
```
### passing JSX as children
- When you nest content inside a JSX tag, the parent component will receive that content in a prop called children. For example, the Card component below will receive a children prop set to <Avatar /> and render it in a wrapper div:
- components are usually in this format `<Component/>`.
- But when a component has a component inside it , it becomes like this `<Component><Child/></Component>`  , then in this case we require childrem as prop.

```javascript
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```
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