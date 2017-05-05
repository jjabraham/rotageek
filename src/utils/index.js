export const fakeAjax = (resource = 'failure') => {
  const success = {
    status: 200,
    message: 'Success'
  }
  const failure = {
    status: 400,
    error: 'Failed to save form.'
  }
  return new Promise((resolve, reject) => {
    if (resource === 'success') {
      resolve(success);
    } else {
      reject(failure);
    }
  });
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('state persist error');
  }
};
