## Flexion NodeJs Code Challenge

### Code Challenge Instructions:
Write a Node script (v8 preferred) that transforms data.json into data-transformed.json. There is no need for any UI, it’s fine to directly read in data.json from the current directory. 

### Restrictions: 
No for or for…of loops 
No let or var


Checklist:
- [ ] use only const or function paramaters (immutable all the way)
- [ ] drop name and address
- [ ] move customer.id up to the main object
- [ ] keep the date, id, and name
- [ ] use mocha and chai
- [ ] change order to an array
- [ ] add revenue to array quant * price


| Change | To | Stays |
| -----------  | -------  | --- | 
| customer.id | customerId | up |
| customer.order | array | true |
I customer.order | add revenue | true |
| customer.name | null | false |
| customer.address | null | false |

