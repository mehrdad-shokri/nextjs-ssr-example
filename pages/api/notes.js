export default function handler(req, res){
    res.status(200).json([
        {
            "id": 4,
            "created_at": "2022-10-15T06:10:41.921Z",
            "updated_at": "2022-10-15T06:10:41.921Z",
            "title": "Make a thing",
            "body": "It's very easy to make some words **bold** and other words *italic* with\nMarkdown. You can even [link to React's website!](https://www.reactjs.org)."
        },
        {
            "id": 3,
            "created_at": "2022-08-19T14:51:34.673Z",
            "updated_at": "2022-08-19T14:51:34.673Z",
            "title": "A note with a very long title because sometimes you need more words",
            "body": "You can write all kinds of [amazing](https://en.wikipedia.org/wiki/The_Amazing)\nnotes in this app! These note live on the server in the `notes` folder.\n\n![This app is powered by React](https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/React_Native_Logo.png/800px-React_Native_Logo.png)"
        },
        {
            "id": 2,
            "created_at": "2022-10-23T16:50:42.279Z",
            "updated_at": "2022-10-23T16:50:42.279Z",
            "title": "I wrote this note today",
            "body": "It was an excellent note."
        },
        {
            "id": 1,
            "created_at": "2022-03-13T15:41:11.139Z",
            "updated_at": "2022-03-13T15:41:11.139Z",
            "title": "Meeting Notes",
            "body": "This is an example note. It contains **Markdown**!"
        }
    ])
}