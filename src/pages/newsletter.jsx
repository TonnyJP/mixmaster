import axios from 'axios';
import {Form, redirect} from 'react-router-dom';
import {toast} from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData)
    const response = await axios.post(newsletterUrl, data)

    if(response.status === "201"){
        toast.success(response.data.message)
    }
    return redirect("/")
}
export const Newsletter = () => {
    return <Form className="from" method="post">
         <h4 style={{textAlign: "center", marginTop: "2rem"}}>Our newsletter</h4>
         <div className="form-row">
             <label htmlFor="name" className="form-label"> name </label>
             <input type="text" className="form-input" name="name" id="name" defaultValue={"john"} />
         </div>
         <div className="form-row">
             <label htmlFor="lastName" className="form-label"> last name </label>
             <input type="text" className="form-input" name="lastName" id="lastName" defaultValue={"Doe"} />
         </div>
         <div className="form-row">
             <label htmlFor="email" className="form-label"> name </label>
             <input type="text" className="form-input" name="email" id="email" defaultValue={"test@test.com"} />
         </div>

         <button type="submit" className="btn btn-block" style={{marginTop: "0.5rem"}}>Submit</button>
    </Form>
}