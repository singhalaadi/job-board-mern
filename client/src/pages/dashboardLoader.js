import customFetch from '../utils/customFetch';


export const loader = async () => {
  try {
    const { data } = await customFetch('/users/current-user');
    return data;
  } catch {
    // Return demo user data for exploration
    return { 
      user: { 
        name: 'Demo User', 
        email: 'demo@example.com',
        lastName: 'User',
        location: 'Demo Location',
        role: 'user'
      } 
    };
  }
};