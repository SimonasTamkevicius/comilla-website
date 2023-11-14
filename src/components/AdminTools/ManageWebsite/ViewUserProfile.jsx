import React from "react";
import { useAuth } from "../../../utils/AuthContext";

const ViewUserProfile = () => {
    const { user } = useAuth();
  
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col space-y-5 md:space-y-0 py-5">
        <div className="flex flex-col w-full">
          <label className="text-sm">Email</label>
          <input
            className="p-2 rounded-md bg-slate-200"
            value={user.email}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default ViewUserProfile;
