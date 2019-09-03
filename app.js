let express = require('express');
let app = express();

const randomDate=(start, end)=>{
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  const cityArr = [
  'Dushanbe, Tajikistan',
  'Dili, East Timor',
  'Dublin, Ireland',
  'Kiev, Ukraine',
  'Ljubljana, Slovenia',
  'Libreville, Gabon',
  'Minsk, Belarus',
  'Moscow, Russia',
  'Paris, France',
  'Rome, Italy',
  'Tallinn, Estonia'
];

let  getRandomInt=(min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const wehicleArr=['car','plane','train','horse','dog team'];
  app.use(function (req, res, next) {


    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
  });
app.get('/trips',  (req, res)=>{
    
    let tripsArr=[
       
    ];
    
    for(i=0;i<25;i++){

        let date = randomDate(new Date(2025, 0, 1), new Date());
        let cityFrom = cityArr[getRandomInt(0,cityArr.length)];
        let cityTo = cityArr[getRandomInt(0,cityArr.length)];
        let vehicle = wehicleArr[getRandomInt(0,wehicleArr.length)];

        tripsArr.push(
        {
            "fromName": cityFrom,
            "toName": cityTo,
            "departAt": `${date.getFullYear()}-${date.getDate()}-${date.getMonth()}`,
            "vehicle": vehicle
        });
    }
    res.json(tripsArr);

});

app.listen(5000,  ()=>{});
