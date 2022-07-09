> # 🎁 collection of miscellaneous topics with snippets and explainations

**this repo contains snippets, walkthorugh, study content for intermediate & advance topics in different domains.**

> ## 1. RXJS higher order mapping operators (use in observable env)

    [ref- https://www.learnrxjs.io/]

        #to trans-compile ts-->js
        npx ts-node index.ts

> of

- it emits an observable stream

                # so this will emit an observable stream forst 2000 then 1000
                of(2000,1000);

                # so we can subscribe to these observable streams
                source.subscribe((value)=>{
                    console.log(value)
                })

> map in rxjs

- takes the current value that is being emitted in observable streams and it allows to transform to anything that we want.

> NOTE- **in the world of observables everything is a stream**

> NOTE- **.pipe() method is used to incorporate multiple rxjs operators and then generate an observable stream as an rxjs observable.**

> concatMap

- **flattens all the inner observables**
- it is going to handle each value in observable stream sequentially i.e in the order they were emitted initially

- **it will not move to the next value in observable stream until it has completed the current value processing. like if [2000,1000] , so first it will process 2000 then move to 1000.**

> mergeMap (not-sequential i.e unlike concatMap)

- maps each value that an observable emits similar to map and concatMap.

- **the difference in mergeMap is that all the values in th observable stream gets passed to the pipe() at the same time, example [2000,1000] on using with mergeMap will print out 1000, 2000 i.e reverse order because all the values were provided to the pipe at the same time in mergeMap**

> 📝:IMP exhaustMap (only concerned about current processing observable while other observables are ignored)

- **ref: index.ts**

- **used in situation where we need to merge two observable streams and we need to just have concern on the observable stream processing that gets executed first while the other streams get ignored completely.**

> switchMap (pretty similar to exhaustMap, but instead of ignoring the other observable values getting emitted it switches to the observable value that is already processed in the pipe while dropping the old one)

- **📝: IMP example- click listener, when user clicks then we stop what we are doing and process the new click event**
