const express = require('express');
const weatherRouter = express.Router(); // create router

let data = [
    {
      activity: ["morning jog", "breakfast", "work", "lunch", "gym"],
      weather: "sunny",
    },
    {
      activity: ["work", "coffee break", "meetings", "dinner", "movie"],
      weather: "cloudy",
    },
    {
      activity: ["weekend", "hiking", "picnic", "reading", "gardening"],
      weather: "rainy",
    },
  ];


// 下面写API

// GET entire list of activities
weatherRouter.get('/items', (req, res) => {
    res.send(data);
});

// GET an activity by query parameter "?activity=work"
weatherRouter.get('/things', (req, res) => {
    const activity = req.query.activity;
    if (!activity) {
        return res.status(400).send('Activity para is missing');
    }
    const result = data.filter((item) => item.activity.includes(activity));//filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
    if (result.length === 0) { // result is an array
        return res.status(404).send('Activity not found');
    }
    res.send(result);
});


// POST an new activity  (前端通过body传递数据)
weatherRouter.post('/new', (req, res) => {
    const newActivity = req.body;
    if (!newActivity.activity || !newActivity.weather) {
        return res.status(400).send('Activity or weather is missing');
    }
    data.push(newActivity);
    res.status(201).send({
        message: 'New activity added',
        data: newActivity,
    });
});



// GET activities based on weather condition  /:condition
weatherRouter.get('/weather/:condition', (req, res) => {
    const condition = req.params.condition;
    const result = data.filter((item) => item.weather === condition);
    if (result.length === 0) {
        return res.status(404).send('Weather condition not found');
    }
    res.send(result);
});



module.exports = weatherRouter; // export router
