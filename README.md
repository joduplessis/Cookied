# Cookied
## Easy cookie management with JS

Module in progress, expect hickups.

### Installation

Install the package via GitHub with `npm install https://github.com/joduplessis/Cookied.git` or `yarn add https://github.com/joduplessis/Cookied.git`.

### Usage

This example assumes ES6 usage.
```
import { Cookied } from './Cookied';

// Instantiate the class
const cookied = new Cookied();

cookied.setCookie("COOKIED", "NICE");
cookied.getCookie("COOKIED");
cookied.deleteCookie("COOKIED");
```
