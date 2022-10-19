import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Typography, Divider, Grid} from '@mui/material';
import HardwareSetsTable from './hwTable'

//TODO fetch user projects with API call
const userProjects = ['Project Theta', 'Project Kappa', 'Project Omega'];

const addProject = () => {
  //TODO
};

function ProjectSelection({selectedProject, setSelectedProject}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        '& > *': {
          m: 3,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        {userProjects.map((proj) => (
            proj == selectedProject
            ?
            <Button sx={{color: 'text.primary'}} variant="contained" key={proj}>
              {proj}
            </Button>
            :
            <Button sx={{color: 'text.secondary'}} key={proj} onClick={() => setSelectedProject(proj)}>
              {proj}
            </Button>
          ))}
        <Button variant="outlined" onClick={addProject} sx={{color:"success.main"}}> +  Add Project</Button>
      </ButtonGroup>
    </Box>
  );
}


export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(userProjects[0]);
  return (
    <div>
      <Typography color="gray" sx={{mb:-2.5, mt:2.5, ml:3}}>Select Project:</Typography>
      <ProjectSelection selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
      <Typography variant="h4"
        sx={{
          ml: 6,
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {selectedProject}
      </Typography>                          
        <Divider sx={{mt: 2}}></Divider>
        <Grid container>
          <Grid item>
            <Box sx={{m: 3, ml: 6 }}>
              <Typography color="text.secondary"> <Box component="span" sx={{color:'primary.dark', fontWeight:"bold"}}>Project ID:</Box> 1234</Typography>
              <Typography color="text.secondary"> <Box component="span" sx={{color:'primary.dark', fontWeight:"bold"}}>Authorized Users:</Box> FooBar - You, John123, LeeroyJ</Typography>
            </Box>
          </Grid>                          
          <Grid item xs>                                 
            <Grid container direction="row-reverse">      
              <Grid item sx={{m:3, mr:6}}> <Button variant="contained" >Edit Project</Button></Grid>
            </Grid>
          </Grid>
        </Grid>
        
        <Divider></Divider>

        <HardwareSetsTable/>
    </div>
  )
}