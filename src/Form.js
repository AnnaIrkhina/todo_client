import React, {useState} from 'react';


function Form(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = () => {
        props.createTodo({name, description});
        setName('');
        setDescription('');
    }

    return (
        <form>
            <div className="input-group mb-3">
                <div>

                <input className="form-control" type="text" placeholder="Todo's title" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>

                <input className="form-control" type="name" placeholder="Todo's description" onChange={e => setDescription(e.target.value)}/>
                </div>
                <div>
                <button className="btn btn-primary" onClick={onSubmit}>Create</button>
                </div>
            </div>
        </form>
    );
}

export default Form;
