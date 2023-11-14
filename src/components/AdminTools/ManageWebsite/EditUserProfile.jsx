import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../utils/axiosInstance";
import { useAuth } from "../../../utils/AuthContext";

const EditUserProfile = () => {
  const { user, updateUser } = useAuth();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setId(user._id);
    setEmail(user.email);
    setLoading(false);
  }, [user.email, user._id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const inputStateMap = {
      email: setEmail,
    };

    const stateUpdater = inputStateMap[name];
    if (stateUpdater) {
      stateUpdater(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("_id", id);
      formData.append("email", email);
      axiosInstance.post("/edit-email", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function(response) {
        setLoading(false);
        setSuccessMessage("User info updated successfully!");
        updateUser(response.data)
          
        setTimeout(() => {
            setSuccessMessage("");
            window.location.reload();
        }, 1500);
      })
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      setErrorMessage("Failed to update user info.");
      setTimeout(() => {
        setErrorMessage("");
        navigate("/UserProfile")
      }, 1500);
    }
  };

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
      <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-5 md:space-y-0 py-5">
          <div className="flex flex-col w-full">
            <label className="text-sm">Email</label>
            <input
              className="p-2 rounded-md bg-slate-200"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="bg-black text-white rounded-md flex justify-center mx-auto py-2 px-4"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditUserProfile;
