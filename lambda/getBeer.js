exports.handler = async event => {
  const type = event.type;

  const getType = type => {
    switch (type) {
      case 'all':
        return { test: 'test' };

      case 'single':
        return { test: 'test' };

      default:
        return { test: 'test' };
    }
  };

  const response = await getType();
  return response;
};
