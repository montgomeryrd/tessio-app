const Form = ({ value, setValue, orderList, setOrderList }) => {
    
    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        let list = value.match(/(.+)/g)
            .filter(item => item !== '')
            .map(item => {
                item = { val:item, id:Math.random() * 10, complete:false }
                return item;
            });
        setOrderList([...orderList, ...list]);
        setValue('');
    }

    return (
        <div>
            <h1>Kirk's App</h1>
            <form className="list" onSubmit={handleSubmit}>
                <textarea 
                    id="list" 
                    name="list" 
                    rows="25" 
                    cols="33"
                    autoComplete="off"
                    onChange={handleChange}
                    required={true}
                    placeholder="Input list...">
                </textarea>
                <button className="btn butt" type="submit" onSubmit={handleSubmit}>create</button>
            </form>
        </div>
    )
}

export default Form