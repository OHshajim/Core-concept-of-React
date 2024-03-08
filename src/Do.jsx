// export default function Do({task ,isDone}){
//     return(
//         <li>Task : {task}</li>
//     )
// }


// conditional rendering -1
// export default function Do({task ,isDone}){
//     if (isDone) {
//         return(<li>Finished : {task}</li>)
//     }
//     else{
//         return(<li>Work on : {task}</li>)
//     }
// }


// conditional rendering -2
// export default function Do({task ,isDone}){

//     if (isDone) {
//         return(<li>Finished : {task}</li>)
//     }
//         return(<li>Work on : {task}</li>)
// }


// // conditional rendering -3 : ternary operator
// export default function Do({task ,isDone}){

//         return(<li>{isDone? 'Finished' : 'Work on'} : {task}</li>)
// };


// // conditional rendering -4 : and operator &&
// export default function Do({task ,isDone}){

//         return(<li> {task} {isDone && ': Finished'} </li>)
// };


// // conditional rendering -5 : or operator ||
// export default function Do({ task, isDone }) {

//     return (<li> {task} {isDone || ': Work on'} </li>)
// };


// // conditional rendering -6
export default function Do({ task, isDone }) {
    let list;
    if (isDone) {
        list = <li>Finished : {task}</li>
    }
    else {
        list = <li>Work on : {task}</li>
    }
    return list;
};