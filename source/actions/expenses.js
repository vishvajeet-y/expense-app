import { v4 as uuidv4 } from 'uuid'
export const addExpense=({  //destructurng payload and asssigning default value
    description='',
    note='',
    ammount=0,
    createAt=0
}={})=>({
    type:'ADD_EXPENSE',
    expense:{
    id:uuidv4(),
    description,
    note,
    ammount,
    createAt
    }
})
//Remove Expense
export const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
})

//Edit Expense
export const editExpense=(id,updates)=>({
   type:'EDIT_EXPENSE',
   id,updates
})
