export const ORDER_BY = 'ORDER_BY';

 
export function orderBy(ascOrDesc) {
    return {
      type: ORDER_BY,
      payload: ascOrDesc,
    };
  }
  