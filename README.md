> 🎁 collection of miscellaneous topics with snippets and explainations

- this repo contains snippets, walkthorugh, study content for intermediate & advance topics in different domains.

1.  RXJS higher order mapping operators (use in observable env)
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
