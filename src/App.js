import React, {useEffect, useState} from 'react'
import Form from './Form'
import List from "./List"
import axios from 'axios'


const initialList = [
    {
        "description": "снова и снова",
        "_id": "5ef143a411aa6e08d0edd8b5",
        "name": "Вот специальная строка, которую стереть ты сможешь.",
        "done": true,
        "createdAt": "2020-06-22T23:49:56.368Z",
        "updatedAt": "2020-06-24T01:05:44.925Z"
    },
    {
        "description": "Ибо терпение его достойно всяческих похвал.",
        "_id": "5ef143ff11aa6e08d0edd8b6",
        "name": "Когда большим и сильным стану я, то брошу розы к Виктора стопам!",
        "done": false,
        "createdAt": "2020-06-22T23:51:27.233Z",
        "updatedAt": "2020-06-23T18:47:54.731Z"
    },
    {
        "description": "Как я могу судить о том, устроен мир несправедливо или хорошо? Кто я на свете? ",
        "_id": "5ef1447f11aa6e08d0edd8b7",
        "name": "Мой пятистопный ямб разносит эхо по пещере, и удивлён я технологией сией.",
        "done": true,
        "createdAt": "2020-06-22T23:53:35.128Z",
        "updatedAt": "2020-06-23T17:28:49.823Z"
    },
    {
        "description": "Мне непонятен этот механизм, загадочен и сложен он, и магией немного отдаёт.",
        "_id": "5ef1499511aa6e08d0edd8bb",
        "name": "Волшебным и загадочным образом буквы превращаются в слова.",
        "done": true,
        "createdAt": "2020-06-23T00:15:17.383Z",
        "updatedAt": "2020-06-23T18:47:56.561Z"
    },
    {
        "description": "Подними бокал за павших!",
        "_id": "5ef18c186d8db90be89cf5d0",
        "name": "Как вкусен чай мой вечером во тьме.",
        "done": false,
        "createdAt": "2020-06-23T04:59:04.204Z",
        "updatedAt": "2020-06-23T04:59:04.204Z"
    },
    {
        "description": "Вот в чём вопрос!",
        "_id": "5ef18c6f6d8db90be89cf5d1",
        "name": "Быть или не быть?",
        "done": true,
        "createdAt": "2020-06-23T05:00:31.223Z",
        "updatedAt": "2020-06-24T00:55:30.271Z"
    },
    {
        "description": "",
        "_id": "5ef18ca06d8db90be89cf5d2",
        "name": "Буль-буль карасики!!!!!!!!!",
        "done": false,
        "createdAt": "2020-06-23T05:01:20.974Z",
        "updatedAt": "2020-06-23T05:01:20.974Z"
    },
    {
        "description": "Ответь.",
        "_id": "5ef18d226d8db90be89cf5d3",
        "name": "Кто явился ко мне в момент попитья чая??",
        "done": false,
        "createdAt": "2020-06-23T05:03:30.706Z",
        "updatedAt": "2020-06-23T05:03:30.706Z"
    },
    {
        "description": "it goes on",
        "_id": "5ef1912b1b4fb5a9d5916c12",
        "name": "In three words I can sum up everything I’ve learned about life",
        "done": false,
        "createdAt": "2020-06-23T05:20:43.900Z",
        "updatedAt": "2020-06-24T01:13:29.628Z"
    },
    {
        "description": "Some text",
        "_id": "5ef29dd08b97bd04dff03e0c",
        "name": "First group",
        "done": false,
        "createdAt": "2020-06-24T00:26:56.369Z",
        "updatedAt": "2020-06-24T00:56:54.080Z"
    },
    {
        "description": "Грызите шрание науки",
        "_id": "5ef2d09b9809542cc0675a19",
        "name": "----31111111-----",
        "done": false,
        "createdAt": "2020-06-24T04:03:39.802Z",
        "updatedAt": "2020-06-24T04:04:40.334Z"
    }
]


function App() {
    const [list, setList] = useState([]);


    useEffect(() => {
        getTodoAll()
    }, [])

    const remove = (id) => {
        const url = 'http://localhost:5000/todo/' + id
        axios(
            {
                url: url,
                method: 'DELETE'
            }
        )
            .then(res => {
                getTodoAll()
            })
            .catch(e =>
                console.log(e)
            )
    }
    const getTodoAll = () => {
        axios({
            url: 'http://localhost:5000/todo',
            method: 'GET',
        })
            .then(res => {
                    console.log(res.data)
                    setList(res.data)
                }
            )
            .catch(e => console.log(e))
    }
    const createTodo = (form) => {
        axios({
            url: 'http://localhost:5000/todo',
            method: 'POST',
            data: form,
        })
            .then(res => {
                getTodoAll()
            })
            .catch(e => console.log(e))

    }
    const changeStatuse = (id, done) => {
        console.log(done)
        const url = 'http://localhost:5000/todo/' + id


        axios({
            url: url,
            method: 'PUT',
            data: {done:done},
        })
            .then(res => {
                getTodoAll()
            })
            .catch(e => console.log(e))


    }
    const saveRecord=(task)=>{
        console.log(task)
        const url = 'http://localhost:5000/todo/' + task._id
        axios({
            url: url,
            method: 'PATCH',
            data: {name:task.name, description:task.description},
        }) .then(res => {
            getTodoAll()
        })
            .catch(e => console.log(e))
    }

    return (
        <div className="container">
            <h1> Todo List for {String(new Date())}</h1>
            <Form createTodo={createTodo}/>
            <List list={list} remove={remove} changeStatuse={changeStatuse} saveRecord={saveRecord}/>
        </div>
    );
}

export default App;
