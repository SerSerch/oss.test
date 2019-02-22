export function handleInputChange (event) {
    this.setState({
        [event.currentTarget.name]: event.target.value
    });
}

export function handleCheckboxChange(event) {
    this.setState({
        [event.currentTarget.name]: event.target.checked
    });
}