import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../server/utils/constants';
import { Form, useNavigation} from 'react-router-dom';
// import { toast } from 'react-toastify';
// import customFetch from '../utils/customFetch';

const AddJob = () => {
  const user  = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>ADD JOB</h4>
        <div className='form-center'>
          <FormRow type='text' name='position' />
          <FormRow type='text' name='company' />
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            defaultValue={user.location ? user.location.toUpperCase() : ''}
          />

          <button
            type='submit'
            className='btn btn-block form-btn '
            disabled={isSubmitting}
          >
            
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;




// function AddJob(){
//     return (
//         <div>
//         <h1>Add Job Page</h1>
//         {/* Add your form or components for adding a job here */}
//         </div>
//     );
// }
// export default AddJob;
