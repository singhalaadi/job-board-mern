import Navbar from '../Navbar';
import Home from './Home';

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Home 
        title="Welcome to JOBIFY!"
        description="Find and apply to your dream tech job today."
      />
    </>
  );
}

export default HomeLayout;