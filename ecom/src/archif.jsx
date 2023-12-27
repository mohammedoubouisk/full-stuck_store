e.preventDefault()
if (email === '' || password === '') {
    alert('You must fill in all the fields');
}
else {
    try {
        const response = await Axios.post("http://127.0.0.1:3001/login", { email, password });
        // get data from db and set it in localstorage
        if (response.data.message === "success") {

            allUsers.map((e) => {
                if (e.email === email) {
                    localStorage.setItem('token', JSON.stringify(e))
                }
            })           
            navigate('/')
            window.location.reload()
        }
        else {
            alert("Email or Password icorrect");
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred during login');
    }
}