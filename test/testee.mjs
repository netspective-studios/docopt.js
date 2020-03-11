import {getDoc} from './test_helper.mjs'
import docopt from "../dist/docopt.js";

getDoc()
  .then(doc => {
    console.log(JSON.stringify(docopt(doc)))
  })
  .catch(e => {
    console.log('"user-error"')
  });
