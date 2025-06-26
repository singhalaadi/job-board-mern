import customFetch from '../../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const position = formData.get('position');
  const company = formData.get('company');
  const jobLocation = formData.get('jobLocation');

  try {
    await customFetch.post('/jobs', {
      position,
      company,
      jobLocation,
    });
    return null;
  } catch (error) {
    return { error: error.message || 'Failed to add job' };
  }
};