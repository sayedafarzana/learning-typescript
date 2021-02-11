import {types} from "mobx-state-tree"
//import {identity} from 'ramda'
import * as R from 'ramda'
let message: string = "First Typescript Demo App";
let n: number;
console.log(types);
//console.log(identity(message));
n=R.add(30, 50);
console.log(n);
const carType= types.model("carType", {isAuthenticated: types.boolean});
console.log(carType);


