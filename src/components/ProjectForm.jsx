import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const ProjectForm = ({ open, onClose, onSubmit, initialProjectInfo }) => {
  const currentDate = new Date().toISOString().split('T')[0];

  const [projectInfo, setProjectInfo] = useState({
    projectName: initialProjectInfo?.projectName || '',
    duration: initialProjectInfo?.duration || '',
    owner: initialProjectInfo?.owner || '',
    dateCreated: initialProjectInfo?.dateCreated || currentDate,
    lastViewed: initialProjectInfo?.lastViewed || '',
  });
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjectInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
      lastViewed: new Date().toISOString().split('T')[0], // Update the lastViewed date whenever input changes
    }));
  };

  const handleSubmit = () => {
    onSubmit(projectInfo);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Project Details</DialogTitle>
      <DialogContent>
      <TextField
        label="Project Name"
        name="projectName"
        value={projectInfo.projectName}
        onChange={(e) =>
          setProjectInfo((prevInfo) => ({
            ...prevInfo,
            projectName: e.target.value,
          }))
        }
        fullWidth
        margin="normal"
      />

      <TextField
        label="Duration"
        name="duration"
        value={projectInfo.duration}
        onChange={(e) =>
          setProjectInfo((prevInfo) => ({
            ...prevInfo,
            duration: e.target.value,
          }))
        }
        fullWidth
        margin="normal"
      />

      <TextField
        label="Owner"
        name="owner"
        value={projectInfo.owner}
        onChange={(e) =>
          setProjectInfo((prevInfo) => ({
            ...prevInfo,
            owner: e.target.value,
          }))
        }
        fullWidth
        margin="normal"
      />

    <TextField
      label="Date Created"
      name="dateCreated"
      type="date"
      value={projectInfo.dateCreated}
      onChange={(e) =>
        setProjectInfo((prevInfo) => ({
          ...prevInfo,
          dateCreated: e.target.value,
        }))
      }
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />

    <TextField
      label="Last Viewed"
      name="lastViewed"
      value={projectInfo.lastViewed}
      onChange={(e) =>
        setProjectInfo((prevInfo) => ({
          ...prevInfo,
          lastViewed: e.target.value,
        }))
      }
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="inherit">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectForm;
