// // console.log('App,js is running')
//
//
// /*    count++
//     renderCounterApp()
// }
//
// const minusOne = () => {
//     count--
//     renderCounterApp()
// }
//
// const reset = () => {
//     count = 0
//     renderCounterApp()
// }
//
// let templateTwo = (
//     <div>
//         <h2>count: {count}</h2>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// )*/
//
// //
// // let optionsJsx = app.options ? app.options.map(option => <li>{option}</li>) : []
// //
// //
// // let template = (
// //     <div>
// //         <h1>{app.title}</h1>
// //         <p>{app.subtitle}</p>
// //         <ol>
// //             {app.options ? optionsJsx : 'no options'}
// //         </ol>
// //     </div>
// // );
//
// // let user = {
// //     name: 'Evgeny',
// //     age: 17,
// //     location: 'Voronezh'
// // }
// //
// // function getLocation(location) {
// //     if (location) {
// //         return location
// //     } else return 'unknown'
// // }
//
// //
// // let templateTwo = (
// //     <div>
// //         <h1>{user.name ? user.name : 'unknown'}</h1>
// //         <p>age: {user.age ? user.age : 'unknown'}</p>
// //         <p>{getLocation(user.location)}</p>
// //         {user.age >= 18 && <p>YEah >18</p>}
// //     </div>
// // );
//
//
// /*const renderCounterApp = () => {
//
//     let templateTwo =
//         <div>
//             <h2>count: {count}</h2>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//
//     console.log('called')
// }*/
//
// //let count = 0
//
//
// /*let appRoot = document.getElementById('app')
//
// let app = {
//     title: 'This is JSX from app.js',
//     subtitle: 'some info',
//     options: ['one', 'two', 'three']
// }
//
// const onFormSubmit = (e) =>{
//     e.preventDefault(); //stop full page refresh
//     console.log('submited')
//
//     const option = e.target.elements.option.value
//
//     if(option) {
//         app.options.push(option)
//     }
// }
//
// let template =(
//     <div>
//         <div>
//             <h1>{app.title}</h1>
//             <p>yo</p>
//         </div>
//         <form onSubmit={onFormSubmit}>
//             <input type = "text" name = "option"/>
//             <button>Add option</button>
//         </form>
//     </div>
//
// )
//
// ReactDOM.render(template, appRoot) //рендерит реакт элемент в DOM элемент*/
//
//
// /**
//  * todoList App
//  **/
// let appRoot = document.getElementById('app')
//
// const appData = {
//     title: 'todolist app',
//     todolist: ['item', 'item2']
// }
//
// let handleSubmit = (event) => {
//     event.preventDefault()
//     appData.todolist.push(event.target.item.value)
//     event.target.item.value = ''
//     render()
// }
//
// let removeAll = () => {
//     appData.todolist = []
//     render()
// }
//
// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * appData.todolist.length);
//     const action = appData.todolist[randomNum]
//     alert(action)
// }
//
// const render = () => {
//     const todoList = appData.todolist.map((item) =>
//         <li>{item}</li>
//     )
//     const app = (
//         <div>
//             <h1>{appData.title}</h1>
//             {todoList}
//             <h2>Add item!</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type='text' name='item'/>
//                 <button>go!</button>
//             </form>
//             <button disabled={!appData.todolist.length} onClick={onMakeDecision}>What should I do?</button>
//             <h3>done?</h3>
//             <a><button onClick={removeAll}>remove all!</button></a>
//
//         </div>
//     )
//     ReactDOM.render(app, appRoot)
// }
//
// render()










