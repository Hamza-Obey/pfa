import React,{useState , useEffect} from 'react';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';




const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: "#eeeeee",
    padding: theme.spacing(4, 3, 2),
    marginBottom:"10px"
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 100 ,
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function News () { 
  const classes = useStyles();
  const [cards,setCards]=useState([])

  useEffect(  () =>  { 
    const fetchCards=async() => {
    const response = await axios.get("http://localhost:3001/cards")
    .then(res =>
      { console.log(cards)
       setCards(res.data) })
    
  }
  fetchCards() ; 
} , []
    
  )
  

  return (
    
    <React.Fragment>
      <main >
       
        <div className={classes.heroContent} id="News">
          <Container maxWidth="sm"  >
            <Typography style={{fontFamily:"serif",backgroundColor:"#dde"}}component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              NEWS
            </Typography>
            <Typography style={{fontFamily:"cursive"}} variant="h5" align="center" color="textSecondary" paragraph>
            Around the world, people are turning to the news to understand the evolving coronavirus pandemic. We’re working to help people find and engage with quality news across our products to stay informed on COVID-19 developments.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4} style={{margin:"10px"}}>
            {cards.map((card) => (
            
              
              <Grid  item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent key={card.contenu} className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"serif" ,fontSize:"20px",fontWeight:"bold"}}>
                      {card.title}
                    </Typography>
                    <Typography >
                      {card.contenu}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={card.Link} target="_blank"  size="small" color="primary" style={{fontWeight:"bold"}}> 

                      CONTINUE READING ... 
                    </Button >
                    <Button 
                    
                    onClick={()=>
                      {
                        console.log(card)
                        axios.delete(`http://localhost:3001/cards/${card.id}`) 
                        .then( response => {console.log(response.data) 
                        const index = cards.indexOf(card)
                        console.log(index)
                        var card1=cards.splice(index,1)
                       
                        setCards(  cards.filter(card => card !== card1))
                        
                        } 
                        )
                        .catch( (err)=>
                          console.log(err)
                        )
                      
                    
                      }
                    }
                                
                                

                          size="small" style={{fontWeight:"bold" ,color:"red"}}>
                      Delete
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
       
    </React.Fragment>
  );
}
