import Rthree from '../../assets/projectimages/Rthree.jpg';
import music from '../../assets/projectimages/music.jpg';
import meme from '../../assets/projectimages/meme.jpg'
import group from '../../assets/projectimages/group.JPG'
import rick from '../../assets/projectimages/rick.jpg';
import todo from '../../assets/projectimages/todo.jpg';

const data_projects = [
    {
        name: 'RThree Academy',
        image: Rthree,
        deployed_url: 'https://dry-crag-84112.herokuapp.com/',
        github_url: 'https://github.com/radhikarajgire/FinalProject',
        category: ['react.js','node.js', 'mongoDB','Contentful']
    },

    {
        name: 'Epic_meme_generator',
        image: meme,
        deployed_url: 'https://mymemegenerate.netlify.app/',
        github_url: 'https://github.com/radhikarajgire/MemeGenerator',
        category: [ 'react.js']
    },

    {
        name: 'Rick_Morty_wiki',
        image: rick,
        deployed_url: 'https://rick-morty-wiki-lovat.vercel.app/',
        github_url: 'https://github.com/radhikarajgire/Rick_Morty_Wiki',
        category: [ 'next.js']
    },
    {
        name: 'Music Blog',
        image: music,
        deployed_url: 'https://jakubjureczko.github.io/contentful-blog/',
        github_url: 'https://github.com/JakubJureczko/contentful-blog',
        category: ['CMS', 'react.js']
    },
    {
        name: 'Simple Todo',
        image: todo,
        deployed_url: 'https://radhikarajgire.github.io/React-Todo/',
        github_url: 'https://github.com/radhikarajgire/React-Todo',
        category: [ 'react.js']
    },

    {
        name: 'TODO App',
        image: group,
        deployed_url: 'https://justinhorn.name/todo/',
        github_url: 'https://github.com/JustinHorn/todo',
        category: [ 'react.js']
    }
]

export default data_projects;