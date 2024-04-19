export const handlePending = state => {
    state.isLoading = true;
  };
  
  export const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  

  export const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  

  export const formatPrice = price => {
    return price.toFixed(2);
  };

  
  export const getUniqueLocations = vans => {
    return [...new Set(vans.map(van => van.location))];
  };
  
  export const reverseLocation = location => {
    return location.split(', ').reverse().join(', ');
  };
  