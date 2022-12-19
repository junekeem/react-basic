import './App.css';
import Profile from "./components/Profile";


function AppProfile() {
  return (
    <>
      <Profile
        image='https://images.unsplash.com/photo-1517242810446-cc8951b2be40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        name='User 1'
        title='Job 1'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1525354819756-1901e6795bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'
        name='User 2'
        title='Job 1'
      />
      <Profile
        image='https://images.unsplash.com/photo-1579606629365-8f260c690842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80'
        name='User 3'
        title='Job 3'
      />
    </>
  );
}

export default AppProfile;
