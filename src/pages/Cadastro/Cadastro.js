import React from 'react';
import './cadastro.css';

const Cadastro = ()=>{
    return(
        <section className="section" id="cadastro">
            <div className='formcreate'>
                <h2>Criando sua conta</h2><hr className='separador'/>
                <form method=''action=''> 
                    
                <p>
                <input type='text' id='usuario' placeholder='Usuário' required="required"/>
                </p>

                <p>
                <input type='email' id='email' placeholder='E-mail' required="required"/>
                </p>

                <p>
                <input type='password' id='senha' placeholder='Senha' required="required"/>
                </p>

                <p>
                <input type='password' id='confirmarSenha' placeholder='Confirmar Senha' required="required"/>
                </p>

                <p>  
                <input  type='checkBox' id='checkbox'required="required"/>
                <label><a href='#'>Li e concordo com os termos de uso</a></label>
                </p>

                <p>
                <input className='cadastrar' type='submit' value='Cadastrar'/>
                </p>

                <p>
                    Já é cadastrado? <a href='#'>Cliqe aqui</a>
                </p>
                </form>
            </div>
        </section>
    
    )
}
export default Cadastro
