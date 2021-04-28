import {removeExpense,addExpense,editExpense} from '../../actions/expenses'

test('should setup remove expense action object',()=>{
    const result=removeExpense({id:'abc123'})
    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id:'abc123'
    })
})

test('should setup edit expense action object',()=>{
    const id='abc123'
   const updates={
        desc:'hello',
        ammount:400
    }
    const result=editExpense(id,updates)
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:'abc123',
        updates:{
            desc:'hello',
            ammount:400
        }     
    })
})

test('should setup add expense action object with Provided value' ,()=>{
const expenseData={
    description:'Rent',
    note:'This is from last month',
    ammount:100,
    createAt:1000
}

const result=addExpense(expenseData)
expect(result).toEqual({
    type:'ADD_EXPENSE',
    expense:{
        ...expenseData,
        id:expect.any(String)
    }
  
})

})

test('should setup add expense action object with default value',()=>{

    const result=addExpense()
    expect(result).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'',
            note:'',
            ammount:0,
            createAt:0,
            id:expect.any(String)
        }   
    })

})