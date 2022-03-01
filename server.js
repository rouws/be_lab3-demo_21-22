const express = require('express')
const bodyParser = require('body-parser')

/*****************************************************
 * Define some constants and variables
 ****************************************************/
const app = express();
const port = 3000;
const categories = ["action", "adventure", "sci-fi", "animation", "horror", "thriller", "fantasy", "mystery", "comedy", "family"];
const movies = [
        {
                "id": 1,
                "slug": "black-panther",
                "name": "Black Panther",
                "year": "2018",
                "categories": ["action", "adventure", "sci-fi"],
                "storyline": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
        },
        {
                "id": 2,
                "slug": "incredibles-3",
                "name": "Incredibles 2",
                "year": "2018",
                "categories": ["animation", "action", "adventure"],
                "storyline": "While the Parr family has accepted its collective calling as superheroes, the fact remains that their special heroism is still illegal. After they are arrested after unsuccessfully trying to stop the Underminer, their future seems bleak. However, the wealthy Deavor siblings of Devtech offer new hope with a bold project to rehabilitate the public image and legal status of Supers, with Elastigirl being assigned on point to be the shining example. Now having agreed for now to stay at home to care of the kids, Mr. Incredible finds domestic life a daunting challenge, especially with baby Jack-Jack's newly emerged powers making him almost impossible to manage. However, Elastigirl soon has her own concerns dealing with the menace of a new supervillain, Screenslaver, who is wreaking havoc with his mind control abilities. Now, Elastigirl must solve the mystery of this enemy, who has malevolent designs on the world with the Parr family and friends key targets of this evil. Written by Kenneth Chisholm (kchishol@rogers.com)"
        },
        {
                "id": 3,
                "slug": "halloween",
                "name": "Halloween",
                "year": "2018",
                "categories": ["horror", "thriller"],
                "storyline": "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago."
        },
        {
                "id": 4,
                "slug": "ad-astra",
                "name": "Ad Astra",
                "year": "2019",
                "categories": ["adventure", "fantasy", "mystery", "thriller", "sci-fi"],
                "storyline": "Thirty years ago, Clifford McBride led a voyage into deep space, but the ship and crew were never heard from again. Now his son -- a fearless astronaut -- must embark on a daring mission to Neptune to uncover the truth about his missing father and a mysterious power surge that threatens the stability of the universe."
        },
        {
                "id": 5,
                "slug": "toy-story-4",
                "name": "Toy Story 4",
                "year": "2019",
                "categories": ["animation", "adventure", "comedy", "family", "fantasy"],
                "storyline": "When a new toy called Forky joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy."
        }
];

/*****************************************************
 * Middleware
 ****************************************************/
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}))

/*****************************************************
 * Set template engine
 ****************************************************/
app.set('view engine', 'ejs');


/*****************************************************
 * Routes
 * 
 * GET /                        
 *   home - show movielist
 ****************************************************/


app.get('/',  (req, res) => {
    // RENDER PAGE
    const title  = (movies.length == 0) ? "No movies were found" : "Movies";
    res.render('movielist', {title, movies});
})

app.get('/movies/:id/:slug', (req, res) => {
    // FIND MOVIE
    const id = req.params.id
    const movie = movies.find(element => element.id == id)
    console.log(movie)
    // RENDER PAGE
    res.render('moviedetails', {title: `Moviedetails for ${movie.name}`, movie});
})


app.get('/movies/add',  (req, res) => {
    // RENDER PAGE
    const title  = "Add a new movie";
    res.render('addmovie', {title, categories});
})

app.post('/ditistijdelijk', (req, res) => {
        console.log(req.body.eenvariabele);
        const movie = {
                name: req.body.moviename
        }
        //movies.push(movie)
        title = "Het is gelukt!"
        res.render('movielist', {title, movies});
})

/*****************************************************
 * If no routes give response, show 404 Page
 ****************************************************/
app.use( (req, res) => {
    res.status(404).send('Error 404: file not found')
})

/*****************************************************
 * Start webserver
 ****************************************************/
app.listen(port, () => {
    console.log(`web server  running on http://localhost:${port}`)
})