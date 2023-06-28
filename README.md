# mini-ReconciliationAlgorithm

Just excited about knowing how react works under the hood and about the reconciliation algorithm and just wanted to try it to develop a mini version of it.

reconciliation algorithm : This is the power house of react where it takes the state of the component and renders it accordingly which saves a bunch of time for developer without writing all those hectic JS code to manipulate the dom

```
   const childNode = document.createElement('div');
            const h1Att = document.createElement('h1')
            const h2Att = document.createElement('h2')
            h1Att.textContent = data[i].name
            h2Att.textContent = data[i].age
            childNode.appendChild(h1Att)
            childNode.appendChild(h2Att)
            mainContainer.appendChild(childNode)
```

This is where virtualDOM concept comes into picture, It is a javascript object where it stores the current version of DOM tree and everytime the state changes first VDOM would update only the changed state/keys in the object and then try to update the DOM accordingly
with lots of optimzations thanks to REACT and its community.

In This algorithm i used variable VirtualDOM to make it a bit clear how it works under the hood

WARNING : This is Not the real reconcilation algorithm instead it is completely a mini version(or)my view of reconcilation alogrithm.


Improvements :
   1. currently works on ID of the object need to craft it such that it should iterate over every key in the object for more optimization
   2. Improve overall readability of the algorithm.
