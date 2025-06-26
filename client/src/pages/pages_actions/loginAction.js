import customFetch from '../../utils/customFetch';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    // Send login request to backend
    await customFetch.post('/auth/login', data);
    // Redirect to dashboard/profile on success
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    // Optionally, handle error (e.g., return error message)
    toast.error(error?.response?.data?.msg || 'Login failed');
    console.error("Login failed:", error);
    return error;
  }
};