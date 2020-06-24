import React, {useState} from 'react';

const trash = (<svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>)

const checked = (<svg className="bi bi-check-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path fillRule="evenodd"
          d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg>)

const notChecked = (<svg className="bi bi-app" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
</svg>)

const saveRecord = (
    <svg className="bi bi-arrow-down-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path fillRule="evenodd"
              d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
        <path fillRule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
    </svg>)

const undo = (<svg className="bi bi-x-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
    <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
</svg>)

const editRecord = (
    <svg className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>)

const btnStyles = ["btn btn-danger float-right", "btn btn-success float-right"]


function List(props) {
    const [taskEdit, setTaskEdit] = useState({})
    const [editMode, setEditMode] = useState(false)


    const onEditMode = (task) => {
        setEditMode(true)
        setTaskEdit(task)
        console.log('setTaskEdit(el)')
        console.log(task)
    }
    const onSaveRecord = (task) => {
        props.saveRecord(task)
        onUndo()
    }
    const onUndo = () => {
        setEditMode(false)
        setTaskEdit({})
    }
    return (
        <ul className="list-group">
            {props.list.map(el =>
                <li className="list-group-item" key={el._id}>
                    <div className="row">
                        <div className="col-10">
                            {(editMode) && (el._id === taskEdit._id) && (!el.done) ?
                                <>
                                    {console.log(el._id)}
                                    {console.log(taskEdit._id)}
                                    {console.log('Редактируем!')}
                                    <input className="form-control" type="text" value={taskEdit.name}
                                           onChange={(e) => {
                                               let task1 = {...taskEdit, name: e.target.value}
                                               console.log(task1)
                                               setTaskEdit({...taskEdit, name: e.target.value})
                                           }}/>

                                    <input className="form-control" type="text" value={taskEdit.description}
                                           onChange={(e) => {
                                               let task2 = {...taskEdit, description: e.target.value}
                                               console.log(task2)
                                               setTaskEdit({...taskEdit, description: e.target.value})
                                           }}/>


                                </>
                                : <>
                                    {console.log('Not rедактируем!')}
                                    <div className={el.done ? "c" : ""}>
                                        <strong>
                                            {el.name}
                                        </strong>
                                    </div>
                                    <div className={el.done ? "c" : ""}>
                                        {el.description}
                                    </div>

                                </>
                            }
                        </div>
                        <div className="col-sm ">
                            {(editMode) && (el._id === taskEdit._id) ?
                                <>
                                    <button className="btn btn-secondary"
                                            onClick={() => onSaveRecord(taskEdit)}>{saveRecord}</button>
                                    <button className="btn btn-secondary" onClick={onUndo}>{undo}</button>
                                </>
                                : <>
                                    {!el.done ? <button className="btn btn-secondary " onClick={() => {
                                        onEditMode(el)
                                    }}>{editRecord}</button> : <></>}
                                </>}

                            <button className="btn btn-primary float-right"
                                    onClick={() => props.remove(el._id)}>{trash}</button>
                            <button className={el.done ? btnStyles[1] : btnStyles[0]}
                                    onClick={() => {
                                        props.changeStatuse(el._id, !el.done)
                                        onUndo()
                                    }
                                    }>{el.done ? checked : notChecked}</button>

                        </div>
                    </div>

                </li>)}
        </ul>
    );
}

export default List;
