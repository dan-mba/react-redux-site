/*
 * Tabs/HomeTab.jsx
 *
 * The HomeTab component is displayed on the / route
 */

import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Link, List, withStyles } from '@material-ui/core';
import { LINoLink } from '../util/ListItems';
import { GISmall, GIWithLink } from '../util/GridItems';
import TOOLS from '../config/tools';

const styles = {
  root: {
    padding: '75px 0 10px',
    width: '98%',
    margin: '0 auto',
  },
  paper: {
    padding: '8px 2%',
  },
  body: {
    padding: '10px 0',
  },
  separator: {
    marginBottom: '20px',
  },
};

const HomeTab = ({ classes }) => (
  <Grid
    container
    spacing={1}
    justifyContent="center"
    className={classes.root}
  >
    <Grid item sm={12} lg={11}>
      <Paper className={classes.paper}>
        <Typography variant="h3" align="center">Introduction</Typography>
        <Typography variant="body1" className={classes.body}>
          I created this website as an addendum to my resume and LinkedIn profile.
          It allows me to provide additional information that does not fit in those formats.
          The experience section contains additional explanations of each position I have held,
          and the code section contains some examples of my programming ability.
        </Typography>
        <Typography variant="h4" align="center">Professional Summary</Typography>
        <List>
          <LINoLink>
            Software Engineer with experience providing technical support to customers and&nbsp;
            developing web applications, QuickBase databases, operating system components, and&nbsp;
            hardware simulators.
          </LINoLink>
          <LINoLink>
            Business acumen obtained while working with small business owner and earning&nbsp;
            my MBA allows me to provide solutions that meet business and technical needs.
          </LINoLink>
        </List>
        <Grid container justifyContent="space-between" className={classes.separator}>
          {
            ['Willing to Learn', 'Problem Solver', 'Logical Thinker',
              'Collaborative', 'Enjoys New Challenges', 'Analytical',
              'Effective Communicator', 'TeamPlayer', 'Adaptable',
            ].map((text, index) => (
              <Grid item sm={index % 2 === 0 ? 7 : 5} lg={4} key={text}>
                <GISmall>{text}</GISmall>
              </Grid>
            ))
          }
        </Grid>
        <Typography variant="h4" align="center">Website Summary</Typography>
        <Typography variant="body1" className={classes.body} align="center">
          This website was built using the following tools and Javascript libraries:
        </Typography>
        <Grid container justifyContent="space-between">
          {
            TOOLS.map((tool, index) => (
              <Grid item sm={index % 2 === 0 ? 7 : 5} lg={4} key={tool.name}>
                <GIWithLink link={tool.link}>{tool.name}</GIWithLink>
              </Grid>
            ))
          }
        </Grid>
        <Typography variant="body1" className={classes.body} align="center">
          The source code for this site is available&nbsp;
          <Link
            href="https://github.com/dan-mba/react-redux-site"
            variant="inherit"
            underline="always"
            target="_blank"
            rel="noopener noreferrer"
          >
            on GitHub here.
          </Link>
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);

HomeTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeTab);
