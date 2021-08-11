import React from 'react';
import axios from 'axios';
import NewsPresentation from './news-component-presentation';
import { useState, useEffect } from 'react';

export default function NewsContainer(){

    const [news, setNews] = useState([]);

    useEffect(()=> {
        FetchNews(setNews);
    },[setNews]);

    return(
        <NewsPresentation/>
    );
}

function FetchNews(setNews){

    const options = {
        method: 'get',
        url: 'https://myallies-breaking-news-v1.p.rapidapi.com/GetTopNews',
        headers: {
            'x-rapidapi-key': 'd5d2bc83bamsh9057e98b4eb540bp1f999djsnff199caa8c57',
            'x-rapidapi-host': 'myallies-breaking-news-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function(response){
        console.log(response);
        setNews(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}