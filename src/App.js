import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff'
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1615743893364-d7e35d38a86c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
    height: '500px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 30%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: '3rem',
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex'
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}));


function App() {
  const cards = [
    {title: 'fish fingers', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/09/12/21/29-fish-fingers-rex.jpg?width=1200', name: 'Fish Fingers', body: 'The glourious fish fingers have never found a stomach they could not satisfy', avatar: 'https://images.unsplash.com/photo-1614117673410-2e711420f059?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', avatarName: 'Harold Fisher', dateCreated: 'May 14th 2002'},
    {title: 'Fork Money', image: 'https://images.crateandbarrel.com/is/image/Crate/DinnerForksSet4SHF15', name: 'How to make money with forks', body: 'Forks are not just a kitchen utensil, they are also an untapped gold mine', avatar: 'https://images.unsplash.com/photo-1464347477106-7648bc26261b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80', avatarName: 'Julie Ryder', dateCreated: 'April 3rd 2008'},
    {title: 'Deadly Beavers', image: 'https://ychef.files.bbci.co.uk/624x351/p04b1gkk.jpg', name: 'Beavers Gonna get ya', body: 'Beavers are being introduced back to the U.K BEWARE THEY WILL EAT YOU', avatar: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80', avatarName: 'William Conquer', dateCreated: 'July 22nd 1066'},
    {title: 'Jam & Mustard', image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F11%2Fmain%2Fpeach-mustard-savory-jam-1611w.jpg%3Fitok%3D7z_7nmc_', name: 'Jam & Mustard', body: 'The hipsters have found another hit!', avatar: 'https://cdn.cnn.com/cnnnext/dam/assets/210106132210-the-weeknd-face-alteration-super-tease.jpg', avatarName: 'Buttie Butts', dateCreated: 'January 12th 1995'},
    {title: "Purple doesn't exist", image: 'http://www.frockflicks.com/wp-content/uploads/2020/08/TheColorPurple-1985-preview.jpg', name: "Purple doesn't exist??", body: 'Scientists have discovered that the color purple does not actually exist and is created by our brains', avatar: 'https://images.unsplash.com/photo-1614117673410-2e711420f059?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', avatarName: 'Liam Lotus', dateCreated: 'December 2nd 2022'},
    {title: 'Magic Sock puppets', image: 'https://masandpas.com/wp-content/uploads/2020/04/socks-main-3-new.jpg', name: 'Magic Sock Puppets inSerbia', body: 'Magic sock puppets have been found in Serbia, not many people have lived...', avatar: 'https://www.bestyears.co.uk/images/stories/virtuemart/product/rsz_utn_carrot_toy.jpg', avatarName: 'Buffy Summers', dateCreated: 'June 2nd 1969'},
  ]
  const classes = useStyles()
  return (
    <div className="App">
     <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="primary">
            My Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>Not Another Fashion Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
        {cards.map(card => (
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <CardActionArea>
        <CardMedia
          className={classes.media}
          image={card.image}
          title={card.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src={card.avatar} />
          <Box ml={2}>
            <Typography gutterBottom variant="subtitle2" component="p">{card.avatarName}</Typography>
            <Typography gutterBottom variant="subtitle2" component="textSecondary">{card.dateCreated}</Typography>
          </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon />
          </Box>
      </CardActions>
              </Card>
             
          </Grid>
          ))}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
        <Pagination count={10}/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
