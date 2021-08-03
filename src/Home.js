import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
	root: {
	  maxWidth: 745,
	  marginTop: '50px'
	},
	media: {
	  height: 0,
	  paddingTop: '56.25%', // 16:9
	},
	expand: {
	  transform: 'rotate(0deg)',
	  marginLeft: 'auto',
	  transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	  }),
	},
	expandOpen: {
	  transform: 'rotate(180deg)',
	},
	avatar: {
	  backgroundColor: 'black'
	},
  }));

const Home = () => {
 const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
	  <div>
	  <center>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            WZ
          </Avatar>
        }
        title="Welcome To War-Zone"
        subheader="Watch this video if you are new and want to learn how to play the game"
      />

	  <ReactPlayer url='https://www.youtube.com/watch?v=J5vT33Vo04s' />


      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
		Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack. If the cards are the same rank, it is War.
        </Typography>
      </CardContent>
    </Card>
	<Link to="/gameboard">
	<button className="home-btn">Start Playing</button>
	</Link>
	</center>
	</div>
	)
}

export default Home
