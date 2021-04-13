const express =require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/image', express.static('image'));
app.use('/public', express.static('public'));
app.use('/script', express.static('script'));

app.get('/', (req, res)=> {
    res.render('Africa.ejs');
});

app.get('/gallery', (req, res)=> {
    res.render('gallery.ejs');
});


app.get('/about', (req, res)=> {
    res.render('about.ejs');
});

app.get('/map', (req, res)=> {
    res.render('map.ejs');
});

app.get('/pages', (req, res)=> {
    res.render('pages.ejs');
});



app.listen(1000, ()=> {
    console.log("Bienvenue a mon projet !!!")
});