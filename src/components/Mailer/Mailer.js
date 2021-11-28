import './Email.css';
import emailjs from 'emailjs-com';

function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(
    "service_20afdea", 
    "template_w9bssu5",
     e.target,  
     "user_Hopivm4iaNSPpXTsVV26R"
    ).them(res=>{
        console.log(res);
    }).catch(err=> console.log(err));
}

const Mailer = () => {
    
    return (

        <div id="email" className="container border">

            <h1 id="title-email" >Contacto</h1>

            <form className="row" onSubmit={sendEmail} id="email-form" method="post">
                <label>Name</label>
                <input type="text" name="name" className="form-control"/>

                <label>Email</label>
                <input type="email" name="user-email" className="form-control"/>

                <label>Message</label>
                <textarea name="message" rows="7" className="form-control"/>
               
                <input 
                id="email-message" 
                type="submit" 
                value="Enviar" 
                className="form-control btn btn-primary"
                />

            </form>
        </div>
    );
};

export default Mailer
