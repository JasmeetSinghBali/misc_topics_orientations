import {of, interval, merge} from "rxjs";
import  {
    concatMap,
    delay,
    map,
    mergeMap,
    take,
    switchMap,
    exhaustMap
} from "rxjs/operators";

// 📝: an observable stream that emits 2000 then 1000 values
let source = of(2000,1000);

// console.log('\n[BASIC]  a  observable stream of numbers one after another in the order they were emitted via of():');
// // 📝: subscribe function can be used on this observable stream to get these values
// source.subscribe((value)=>{
//     console.log(value)
// });

// console.log('\n[MAP] applying transforms(add 100) via map&pipe in rxjs to each value observable stream: ');
// // basics- map in rxjs, transform values of the observable stream
// source = source.pipe(
//     map((value)=>{
//         return value+100;
//     })
// );


// source.subscribe((value)=>{
//     console.log(value)
// });

// console.log('\n [concatMap]');
// // 1. concatMap
// const concatMapExample = source.pipe(
//     // 📝: the inner "of" observable is flattened as the value emit from this of() is the final value emitted from concatMap rxjs operators
//     concatMap(value=> of(`Delayed by ${value}ms`).pipe(delay(value)))
// );

// concatMapExample.subscribe((value)=>{
//     console.log(value)
// });

// console.log('\n [mergeMap]');
// // 2. mergeMap
// const mergeMapExample = source.pipe(
//     mergeMap(value=> of(`Delayed by ${value}ms`).pipe(delay(value)))
// );

// mergeMapExample.subscribe((value)=>{
//     console.log(value)
// });

// 📝: an observable via interval() that emits number every 1000 ms i.e 1 sec
const sourceInterval = interval(1000);
// 📝: a second observable , delaying with only 10 ms and take only first four number emmited by sourceInterval observable
const delayedInterval = sourceInterval.pipe(delay(10),take(4));

console.log('\n [exhaustMap]');
// 3. exhaustMap

// 📝: rxjs merge() is used to merge different observable streams so that they run at same time
merge(
    delayedInterval, // delayed observable that gets completely ignored by exhaustMap
    of(true) // instant observable that returns true , hence we get 5 values not 4 values
).pipe(exhaustMap(_ => sourceInterval.pipe(take(5)))).subscribe(val=>{
    console.log(val)
})