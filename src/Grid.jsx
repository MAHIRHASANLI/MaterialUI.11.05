
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BasicModal from "./Modal"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box style={{padding:"100px"}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item sm={6}   xs={12} md={4}>
          <Item style={{paddingTop:"150px"}}><div><img style={{width:"100%", height:"60%"}} src="https://source.unsplash.com/random" alt="" />
           <h2>Heading</h2>
           <p>This is a media card. You can use this section to describe the content.</p>
           <Button size="small">VIEW</Button>
           <Button  size="small"><BasicModal/></Button>
          </div>
          </Item>
        </Grid>
        <Grid  item sm={6}   xs={12} md={4}>
        <Item style={{paddingTop:"150px"}}><div><img style={{width:"100%", height:"60%"}} src="https://source.unsplash.com/random" alt="" />
           <h2>Heading</h2>
           <p>This is a media card. You can use this section to describe the content.</p>
           <Button size="small">VIEW</Button>
        <Button  size="small"><BasicModal/></Button>
          </div>
          </Item>
        </Grid>
        <Grid item sm={6}   xs={12} md={4}>
        <Item style={{paddingTop:"150px"}}><div><img style={{width:"100%", height:"60%"}} src="https://source.unsplash.com/random" alt="" />
           <h2>Heading</h2>
           <p>This is a media card. You can use this section to describe the content.</p>
           <Button size="small">VIEW</Button>
        <Button  size="small"><BasicModal/></Button>
          </div>
          </Item>
        </Grid>
        <Grid item sm={6}   xs={12} md={4}>
        <Item style={{paddingTop:"150px"}}><div>
            <img style={{width:"100%", height:"60%"}} src="https://source.unsplash.com/random" alt="" />
           <h2>Heading</h2>
           <p>This is a media card. You can use this section to describe the content.</p>
           <Button size="small">VIEW</Button>
        <Button  size="small"><BasicModal/></Button>
          </div>
          </Item>
        </Grid>
        <Grid item sm={6}   xs={12} md={4}>
        <Item style={{paddingTop:"150px"}}><div><img style={{width:"100%", height:"60%"}} src="https://source.unsplash.com/random" alt="" />
           <h2>Heading</h2>
           <p>This is a media card. You can use this section to describe the content.</p>
           <Button size="small">VIEW</Button>
        <Button  size="small"><BasicModal/></Button>
          </div>
          </Item>
        </Grid>
        <Grid item sm={6}   xs={12} md={4}>
        <Item style={{paddingTop:"150px"}}><div><img style={{width:"100%", height:"60%"}} src="https://source.unsplash.com/random" alt="" />
           <h2>Heading</h2>
           <p>This is a media card. You can use this section to describe the content.</p>
           <Button size="small">VIEW</Button>
        <Button  size="small"><BasicModal/></Button>
          </div>
          </Item>
        </Grid>
        <Grid item sm={6}   xs={12} md={4}>
        <Item style={{paddingTop:"150px"}}><div><img style={{width:"100%", height:"60%"}} src="https://source.unsplash.com/random" alt="" />
           <h2>Heading</h2>
           <p>This is a media card. You can use this section to describe the content.</p>
           <Button size="small">VIEW</Button>
        <Button  size="small"><BasicModal/></Button>
          </div>
          </Item>
        </Grid>
        <Grid item sm={6}   xs={12} md={4}>
        <Item style={{paddingTop:"150px"}}><div><img style={{width:"100%", height:"60%"}} src="https://source.unsplash.com/random" alt="" />
           <h2>Heading</h2>
           <p>This is a media card. You can use this section to describe the content.</p>
           <Button size="small">VIEW</Button>
        <Button  size="small"><BasicModal/></Button>
          </div>
          </Item>
        </Grid>
        <Grid item sm={6}   xs={12} md={4}>
        <Item style={{paddingTop:"150px"}}><div><img style={{width:"100%", height:"60%"}} src="https://source.unsplash.com/random" alt="" />
           <h2>Heading</h2>
           <p>This is a media card. You can use this section to describe the content.</p>
           <Button  size="small">VIEW</Button>
        <Button  size="small"><BasicModal/></Button>
          </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}