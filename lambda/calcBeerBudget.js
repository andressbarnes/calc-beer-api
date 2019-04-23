exports.handler = async event => {
  let promise = new Promise((res, rej) => {
    setTimeout(() => {
      const beerBudget = event.age * 20;

      res({ name: event.name, beerBudget: beerBudget });
    }, 100);
  });

  const response = await promise;
  return response;
};
//end function
