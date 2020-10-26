import Rthree from '../../assets/projectimages/Rthree.jpg';
import music from '../../assets/projectimages/music.jpg';


import meme from '../../assets/projectimages/meme.jpg'

import group from '../../assets/projectimages/group.JPG'

const data_projects = [
    {
        name: 'RThree Academy',
        image: Rthree,
        deployed_url: 'https://dry-crag-84112.herokuapp.com/',
        github_url: 'https://github.com/radhikarajgire/FinalProject',
        category: ['react.js','node.js', 'mongoDB',]
    },

    {
        name: 'EPIC MEME GENERATOR',
        image: meme,
        deployed_url: 'https://dev-talks.herokuapp.com/',
        github_url: 'https://github.com/Hangrykat/Meme-Generator',
        category: [ 'react.js']
    },

    {
        name: 'Music Blog',
        image: music,
        deployed_url: 'https://jakubjureczko.github.io/contentful-blog/',
        github_url: 'https://github.com/JakubJureczko/contentful-blog',
        category: ['node', 'socket.io', 'react']
    },

    {
        name: 'TODO App',
        image: group,
        deployed_url: 'https://justinhorn.name/todo/',
        github_url: 'https://github.com/JustinHorn/todo',
        category: ['django', 'react']
    }
]

export default data_projects;