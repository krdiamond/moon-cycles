TERMINAL
- install redux yarn add redux

SRC -> INDEX.JS
- import requirements: react, provider, createStore, reducer, app   
- create a new store --- const store = createStore(reducer)
- render app
- wrap the app in the "provider", a react component, this provides the store to the entire app

SRC -> REDUCER.JS
- define constant for the default state and set a state, this takes in the state and an action
- define constant for the reducer
  INCLUDE A SWITCH (start by returning the default state)
    - to create a switch it will accept an (action.type) as a parameter
    - if no case provided return the original state (start with this in the beginning)
