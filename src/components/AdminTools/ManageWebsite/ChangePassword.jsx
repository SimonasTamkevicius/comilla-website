import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import axiosInstance from '../../../../utils/axiosInstance';
import { useAuth } from '../../../utils/AuthContext';

const ChangePassword = () => {
    const { user } = useAuth();

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        const inputStateMap = {
        oldPassword: setOldPassword,
        newPassword: setNewPassword,
        confirmNewPassword: setConfirmNewPassword,
        };

        const stateUpdater = inputStateMap[name];
        if (stateUpdater) {
        stateUpdater(value);
        }
    };

    const togglePasswordVisibility = (inputName) => {
        const visibilityStateMap = {
        oldPassword: setShowOldPassword,
        newPassword: setShowNewPassword,
        confirmNewPassword: setShowConfirmNewPassword,
        };

        const visibilityUpdater = visibilityStateMap[inputName];
        if (visibilityUpdater) {
        visibilityUpdater((prev) => !prev);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("_id", user._id);
        formData.append("oldPassword", oldPassword);
        formData.append("newPassword", newPassword);
        formData.append("confirmNewPassword", confirmNewPassword);

        axiosInstance.post("/change-password", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            console.log(response);
            setSuccessMessage(response.data.message);
            setTimeout(()=>{
                window.location.reload();
            }, 2000);
            setOldPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
        })
        .catch(error => {
            console.error(error);
            if (error.response) {
               setErrorMessage(error.response.data.message);
               setTimeout(()=>{
                setErrorMessage('');
            }, 2000);
            setOldPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
            } else {
               setErrorMessage("An error occurred while processing your request.");
            }
         });         
    }

  return (
    <div>
      {successMessage.length > 0 && (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-gray-500 bg-opacity-80">
          <p className="text-white text-xl">{successMessage}</p>
        </div>
      )}
      {errorMessage.length > 0 && (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-gray-500 bg-opacity-80">
          <p className="text-white text-xl">{errorMessage}</p>
        </div>
      )}
      {loading && (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-gray-500 bg-opacity-80">
          <p className="text-white text-xl">Loading...</p>
        </div>
      )}
      <h1 className="text-center font-semibold text-3xl mb-4">Change Password</h1>
      <form className="flex flex-col w-96 space-y-4 border rounded-md shadow-md p-4" onSubmit={handleSubmit}>
        <div className='flex flex-col relative'>
          <label className="text-sm">Old Password</label>
          <div className="relative">
            <input
              className="p-2 rounded-md bg-slate-200 w-full"
              type={showOldPassword ? "text" : "password"}
              name='oldPassword'
              value={oldPassword}
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => togglePasswordVisibility('oldPassword')}
            >
              {showOldPassword ? <AiOutlineEye className='text-xl' /> : <AiOutlineEyeInvisible className='text-xl' />}
            </span>
          </div>
        </div>
        <div className='flex flex-col relative'>
          <label className="text-sm">New Password</label>
          <div className="relative">
            <input
              className="p-2 rounded-md bg-slate-200 w-full"
              type={showNewPassword ? "text" : "password"}
              name='newPassword'
              value={newPassword}
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => togglePasswordVisibility('newPassword')}
            >
              {showNewPassword ? <AiOutlineEye className='text-xl' /> : <AiOutlineEyeInvisible className='text-xl' />}
            </span>
          </div>
        </div>
        <div className='flex flex-col relative'>
          <label className="text-sm">Confirm New Password</label>
          <div className="relative">
            <input
              className="p-2 rounded-md bg-slate-200 w-full"
              type={showConfirmNewPassword ? "text" : "password"}
              name='confirmNewPassword'
              value={confirmNewPassword}
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-2 cursor-pointer"
              onClick={() => togglePasswordVisibility('confirmNewPassword')}
            >
              {showConfirmNewPassword ? <AiOutlineEye className='text-xl' /> : <AiOutlineEyeInvisible className='text-xl' />}
            </span>
          </div>
        </div>
        <button className="bg-black text-white rounded-md py-2 px-4" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
