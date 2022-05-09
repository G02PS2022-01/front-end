import React from 'react';
import './popuplogin.css';
import { Link } from 'react-router-dom';
import { DogContext } from '../../DogCodeContext/DogContext';

export default function LoginModal (props) {
  const { modalOn, openModal } = React.useContext(DogContext)

  return (
    <div id="walletModal" tabindex="-1" aria-hidden="true"
    class={
      modalOn 
      ? " overflow-y-auto overflow-x-hidden fixed flex justify-center mt-28 z-50 w-full md:inset-0 h-modal md:h-full"
      :"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"}>
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
         
            
         
                <button
                onClick={()=>{openModal(!openModal)}}
                type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="walletModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                <form class="my-4 space-y-3">

                
            

                <section className="section" id="cadastro">
            <div className='formcreate'>
                <h2>Login</h2><hr className='separador'/>
                <form method=''action=''> 
                    
                <p>
                <input type='email' id='email' placeholder='E-mail' required="required"/>
                </p>

                <p>
                <input type='password' id='senha' placeholder='Senha' required="required"/>
                </p>


                <p>  
                <input  type='checkBox' id='checkbox'required="required"/>
                <label><a href='#'>Lembre-me</a></label>
                </p>

                <p>
                <input className='cadastrar' type='submit' value='Entrar'/>
                </p>

                <p>
                <Link onClick={()=>{openModal(!openModal)}} to='./Register/new' class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                        <svg class="mr-2 w-3 h-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="" role="" xmlns="" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
                        Cadastre-se</Link>
                </p>

                <p>
                <Link to="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                        <svg class="mr-2 w-3 h-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
                        Esqueceu sua senha?</Link>
                </p>

                


                </form>
            </div>
        </section>
                </form>
            
        </div>
    </div>
</div>
  )
}