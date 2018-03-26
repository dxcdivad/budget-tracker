const defaultState = {
    description: '',
    amount: '',
    lineItems: []
  };
  
  export default function incomeReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'UPDATE_INCOME_DESCRIPTION': {
        return {
          ...state,
          description: payload.description
        };
      }
  
      case 'UPDATE_INCOME_AMOUNT': {
        return {
          ...state,
          amount: payload.amount
        };
      }
  
      case 'ADD_INCOME': {
        const { description, amount } = action.payload;
        console.log('amount inside reducer' + amount);
        return {
          description: '',
          amount: '',
          lineItems: [...state.lineItems, { description, amount }]
        };
      }
  
      default: {
        return state;
      }
    }
}