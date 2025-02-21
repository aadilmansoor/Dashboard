import React, { useState, useEffect } from 'react';

import { apiService } from '../ApiServices/apiService';
import Grid from '../../shared/Grid';
import TaskModal from '../Modal/UserModal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenCustomModal, setPageTitle } from '../../Redux/slice/sharedSlice';
import UserModal from '../Modal/UserModal';

const User = () => {
  const [tableData, setTableData] = useState(null);
  const { openCustomModal } = useSelector((state) => state.shared); 
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    dispatch(setPageTitle("User List"));
  }, []);


  const handleAddClick = () => {
    dispatch(setOpenCustomModal(true));
  };


  const fetchData = async () => {
    try {
      const response = await apiService.fetchSectionList();
      setTableData(response.data);
      console.log(response.data, "get");

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  return (
    <div className='pl-[10px] pt-4'>
      <div className='flex justify-end pr-5'>
        <button
          className='px-4 py-2 mb-4 text-white bg-blue-500 rounded-md w-[150px]'
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>

      <Grid data={tableData} />

      <UserModal
        open={openCustomModal}  
      />
    </div>
  );
};

export default User;
