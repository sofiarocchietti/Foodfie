export function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Name is required';
    } else if (!/\S+@\S+\.\S+/.test(input.name)) {
      errors.name = 'Name is invalid';
    }
      if (!input.summary) {
        errors.summary = 'Summary is required';
      } else if (!/\S+@\S+\.\S+/.test(input.summary)) {
        errors.summary = 'Summary is invalid';
      }
  
    return errors;
  };