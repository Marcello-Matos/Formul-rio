import './Contact.css';
import Swal from 'sweetalert2';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
    
        formData.append("access_key", "aed7c56f-7010-4e83-8441-f556b6ae3150");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Bom Trabalho!",
                text: "Mensagem enviada!",
                icon: "success"
            });
            form.reset();
        }
    };
    
    return (
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>Formulário de Contato</h2>            
                <div className="input-box">
                    <label>Nome Completo:</label>
                    <input type="text" className="field" placeholder='Coloque o seu nome' name='name' required />
                </div>
                <div className="input-box">
                    <label>Endereço:</label>
                    <input type="text" className="field" placeholder='Coloque o seu endereço' name='endereço' required />
                </div>
                <div className="input-box">
                    <label>Cidade:</label>
                    <input type="text" className="field" placeholder='Coloque a sua cidade' name='cidade' required />
                </div>
                <div className="input-box">
                    <label>Endereço de Email:</label>
                    <input type="email" className="field" placeholder='Coloque o seu email' name='email' required />
                </div>
                <div className="input-box">
                    <label>Sua Mensagem:</label>
                    <textarea name="mensagem" className="field mess" placeholder="Coloque a sua mensagem" required></textarea>
                </div>
                <button type="submit">Enviar</button> 
            </form> 
        </section>
    );
}

export default Contact;
