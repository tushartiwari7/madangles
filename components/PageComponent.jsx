import React,{useState} from 'react'
import Link from 'next/link';
import styles from '../styles/Category.module.css'
//material ui
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//scripts
import getArea from '../scripts/getArea';
import CardMedia  from '@material-ui/core/CardMedia';
import { CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    form: {
    width: '100%',
    marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        padding: '56.25%', 
    }
  }));
  

const PageComponent = ({
        id,
        title="Calculate Area of Triangles",
        variant="side",
        algorithm=getArea 
    }) => {
    const classes = useStyles();

    const [first, setfirst] = useState(null);
    const [second, setsecond] = useState(null);
    const [third, setthird] = useState(null);
    const [result, setresult] = useState(null);
        
    return (
        <div className={` ${classes.root} ${styles.container}`} style={{width: '90%'}} >
            <Link href="/" className={styles.link} >
                <a className={styles.goBack}> &larr; Go Back</a>
            </Link>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}> enter {variant}s:- </p>
            <Grid container spacing={2} className={styles.gridroot} >
                <Grid item xs={6} className={styles.inputgrid}>
                    <Paper className={classes.paper} elevation={0}>
                    <form className={classes.form} onSubmit={(e)=> {
                        e.preventDefault();
                        const ans = algorithm(first,second,third);
                        
                        switch (id) {
                            case 2:
                                setresult(ans ? `Area of the Triangle is ${ans}` : "Enter valid side lengths such that each side length should be less than sum of other two sides" );
                                break;
                            case 3:
                                setresult(`Hypotenuse of the Triangle with base ${first} and ${second} is ${ans}`);
                                break;
                            case 4:
                                setresult(ans ? "It is a Valid Triangle" : "Not a valid Triangle");
                                break;
                            default:
                                break;
                        }

                    }} >
                        <Grid container spacing = {2}> 
                            <Grid item xs={10} >
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="first"
                                    label={`First ${variant}`}
                                    name="firstSide"
                                    onChange={(e) => setfirst(e.target.value)}
                                    />
                            </Grid>
                            <Grid item xs={10} >
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="second"
                                    label={`Second ${variant}`}
                                    name="secondSide"
                                    onChange={(e) => setsecond(e.target.value)}
                                    />
                            </Grid>
                            {id !== 3 &&
                             <Grid item xs={10}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="third"
                                    label={`Third  ${variant}`}
                                    name="thirdSide"
                                    onChange={(e) => setthird(e.target.value)}
                                    />
                            </Grid>
                            }
                            <Grid item xs={10}>
                                <Button
                                    type="submit"
                                    disabled={id ===3 ? !(first>0 && second>0) : !(first>0 && second>0 && third>0)}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    </Paper>
                </Grid>
                <Grid item xs={6} className={styles.outputgrid} >
                    <Paper className={classes.paper} elevation={0} >
                            {result &&                                
                                <CardContent >
                                    <Typography variant="h5" component="h2" className={styles.result}>
                                    {result}
                                    </Typography>
                                </CardContent>
                            }
                            <CardMedia className={classes.media}
                                image="https://build-learn-triangles.netlify.app/images/cal-area.png"
                                title="Area of Triangle"
                                style={{height: '0',padding:'120px', backgroundSize: 'contain' }}
                            />
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default PageComponent;
