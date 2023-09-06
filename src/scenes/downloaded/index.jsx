import React, { useState, useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Header from "../../components/Header";

const Downloaded = ({ downloadedProjects }) => {
  const [downloadedProjectsLocal, setDownloadedProjectsLocal] = useState([]);

  useEffect(() => {
    // Sync the downloaded projects from the props to the local state
    setDownloadedProjectsLocal(downloadedProjects);
  }, [downloadedProjects]);

  const handleDownloadAudio = (updatedProjectInfo) => {
    // Add the new project to the local state
    setDownloadedProjectsLocal((prevProjects) => [...prevProjects, updatedProjectInfo]);
  };
  

  return (
    <Box m="20px">
      <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Downloaded" />
      </Box>
        <Paper elevation={3} style={{ marginTop: "10px" }}>
          <Grid container spacing={0}>
            <Grid item xs={3} style={{ padding: "10px", backgroundColor: "#3e4396" }}>
              <Typography variant="subtitle1">Project Name</Typography>
            </Grid>
            <Grid item xs={2} style={{ padding: "10px", backgroundColor: "#3e4396" }}>
              <Typography variant="subtitle1">Duration</Typography>
            </Grid>
            <Grid item xs={2} style={{ padding: "10px", backgroundColor: "#3e4396" }}>
              <Typography variant="subtitle1">Owner</Typography>
            </Grid>
            <Grid item xs={2} style={{ padding: "10px", backgroundColor: "#3e4396" }}>
              <Typography variant="subtitle1">Date Created</Typography>
            </Grid>
            <Grid item xs={3} style={{ padding: "10px", backgroundColor: "#3e4396" }}>
              <Typography variant="subtitle1">Last Viewed</Typography>
            </Grid>
            {downloadedProjectsLocal.map((project, index) => (
              <React.Fragment key={index}>
                <Grid item xs={3} style={{ padding: "10px", backgroundColor: "#c2c2c2" }}>
                  <Typography style={{ color: "blue" }}>{project.projectName}</Typography>
                </Grid>
                <Grid item xs={2} style={{ padding: "10px", backgroundColor: "#c2c2c2" }}>
                  <Typography style={{ color: "blue" }}>{project.duration}</Typography>
                </Grid>
                <Grid item xs={2} style={{ padding: "10px", backgroundColor: "#c2c2c2" }}>
                  <Typography style={{ color: "blue" }}>{project.owner}</Typography>
                </Grid>
                <Grid item xs={2} style={{ padding: "10px", backgroundColor: "#c2c2c2" }}>
                  <Typography style={{ color: "blue" }}>{project.dateCreated}</Typography>
                </Grid>
                <Grid item xs={3} style={{ padding: "10px", backgroundColor: "#c2c2c2" }}>
                  <Typography style={{ color: "blue" }}>{project.lastViewed}</Typography>
                </Grid>
              </React.Fragment>
            ))}

          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default Downloaded;
