> ## Design Patterns [The art of writing code/softwares with best practice]

- Reusable ways/patterns of writing programs to build systems that serves a specific use case

- these ways/patterns are generalized and can be applied again and again to similar systems where the goal /use -case overlaps

- clean, concise, less buggy, best practices approach

**NOTE- though uncecessary use of design patterns where it is not needed will make the code even messier compared to the code without design patters**

> 1. ✔ Null Object Pattern [Saving you from repeated null checks]

**Scenario-description**

- 📝anytime we have null object to return, we have to apply checks wheather the object is null or not bcz if we try to access prop/methods of an null object then it gives a null error

- 📝the idea is to create an object that is returned instead of null error that has the exact prop & signature and it will have default values and return those instead of null error.

- example- we have a an item.Price , Price can be null or number so we need to check wheather its null then handle that if a number then do something, now here we will have null object that will return the default value of the Price instead of null.

- 🎯:IMP consider a guest and normal user case ref: null_object_pattern.js

> 2. ✔ Builder Pattern

**Scenario-description**

- 📝 used for objects that comprise of multiple intermediatory parts or options & required fields i.e for a composition style kinda object.

- ref:🎯 builder_pattern_way1.js
