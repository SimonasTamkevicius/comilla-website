import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../utils/axiosInstance';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [customAlert, setCustomAlert] = useState({
    isOpen: false,
    message: '',
    onConfirm: null,
    onCancel: null,
  });

  useEffect(() => {
    axiosInstance
      .get('/project')
      .then((response) => {
        setProjects(response.data);
        setIsLoading(false);
      })
      .catch(function (err) {
        console.error('Error getting projects:', err);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteConfirmation = (projectId) => {
    setDeleteConfirmation(projectId);

    setCustomAlert({
      isOpen: true,
      message: 'Are you sure you want to delete this project?',
      onConfirm: () => handleDeleteProject(projectId),
      onCancel: handleCancelDelete,
    });
  };

  const handleDeleteProject = (projectId) => {
    axiosInstance
      .delete(`/project/${projectId}`)
      .then((response) => {
        console.log(response.data);
        setProjects(projects.filter((project) => project._id !== projectId));
        setDeleteConfirmation(null);
      })
      .catch((error) => {
        console.error('Error deleting project:', error);
        setDeleteConfirmation(null);
      });
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(null);
  };

  return (
    <div className={`all-projects-container ${isLoading && 'dim-background'}`}>
    <h1 className="text-center font-semibold text-3xl mb-4">All Projects</h1>
      {isLoading ? (
        <div className="loader absolute text-5xl" />
      ) : (
        <div className='md:grid grid-cols-2 gap-10'>
          {projects.map((project, i) => {
            const isDeleteConfirmationActive = deleteConfirmation === project._id;
            return (
              <div key={i} className="project-card-manage relative">
                <Link to="/EditProject" state={{ project: project }} className='absolute top-3 right-3'>
                  <FaRegEdit className='text-2xl' />
                </Link>
                <div className={`${isDeleteConfirmationActive ? 'dim-background' : ''}`}>
                  {isDeleteConfirmationActive ? (
                    <div className="bg-white p-10 rounded space-y-10 border-2 border-gray-700 relative">
                      <RxCross1 onClick={handleCancelDelete} className='absolute top-3 right-3 text-3xl bg-gray-200 hover:bg-gray-300 transition-all duration-100 ease-in-out p-1 rounded-sm hover:cursor-pointer' />
                      <p className="text-3xl max-w-xs">
                        Are you sure you want to delete this project?
                      </p>
                      <div className="flex flex-row justify-center space-x-10">
                        <button
                          className="text-2xl border-2 border-[#4CAF50] hover:text-white hover:bg-[#4CAF50] rounded-md py-1 px-4 transition-all duration-200 ease-in-out"
                          onClick={() => handleDeleteProject(project._id)}
                        >
                          Yes
                        </button>
                        <button
                          className="text-2xl border-2 border-[#FF5733] hover:text-white hover:bg-[#FF5733] rounded-md py-1 px-4 transition-all duration-200 ease-in-out"
                          onClick={handleCancelDelete}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <FaTrash className='absolute text-2xl top-3 right-12 hover:cursor-pointer' onClick={() => handleDeleteConfirmation(project._id)} />
                      <h2>{project.name}</h2>
                      <h3>{project.description}</h3>
                      <h4>{project.location}</h4>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllProjects;
