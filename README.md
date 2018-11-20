## Flexion NodeJs Code Challenge

```
npm i
npm test
npm start
```

### Code Challenge Instructions:
Write a Node script (v8 preferred) that transforms data.json into data-transformed.json. There is no need for any UI, it’s fine to directly read in data.json from the current directory. 

### Restrictions: 
No for or for…of loops 
No let or var


Checklist:
- [x] use only const or function paramaters (immutable all the way)
- [x] drop name and address
- [x] move customer.id up to the main object
- [x] keep the date, id, and name
- [x] use mocha and chai
- [x] change order to an array
- [x] add revenue to array quant * price


| Change | To | Stays |
| -----------  | -------  | --- | 
| customer.id | customerId | up |
| customer.order | array | true |
I customer.order | add revenue | true |
| customer.name | null | false |
| customer.address | null | false |

You can use http://www.jsondiff.com/ in the files in output to verify

