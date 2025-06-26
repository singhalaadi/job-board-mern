import { Outlet ,useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';
import { useState } from 'react';
import { DashboardContext } from './dashboardContext'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch'; 


const Dashboard = ({ isDarkThemeEnabled }) => {
  // temp
  const { user } = useLoaderData();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);
  const navigate = useNavigate();
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logoutUser = async () => {
    try {
      await customFetch.get('/auth/logout');
      toast.success('Logged Out!');
      navigate('/login'); // or navigate('/') for landing page
    } catch {
      toast.error('Logout failed');
    }
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar onLogout={logoutUser}/>
            <div className='dashboard-page'>
              <Outlet context={user}/>
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export default Dashboard;