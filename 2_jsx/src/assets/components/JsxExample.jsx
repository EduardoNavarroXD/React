import React from 'react'

const JsxExample = () => {

    const userName ="Carlos";

    const user = {
     name: "Ana",
     LastName:"Souza",  
    }

    function getGreeting(name) {
        return `Olá ${name}`
    }

    const userIsLoggedin = false;

    const userRole ="admin";

    const users =[
        {id:1, name:"João"},
        {id:2, name:"Pedro"},
        {id:3, name:"Maria"},
    ]

    return (
    <div>
        <h2>Conteúdo que o usuário vai ver</h2>
        <p>O nome do usuário é {userName}</p>

        <p>
            Usuário: {user.name} {user.LastName}
        </p>
        <p>{2 + 2}</p>
       
        <p>{getGreeting(userName)}</p>
        <p>{getGreeting("Matheus")}</p>
         {/* DIFERENCAS DO HTML */}
         <div className="algumacoisa">Este cara</div>
         <div className="teste">ok</div>

         <button onClick={() => alert("Teste")}>Clique em mim</button>

         <input type="text" placeholder='Digite algo' />

         {/* RENDERIXACAO CONDICIONAL */}
         {userIsLoggedin ?(
            <p>Caso: está logado</p> ): ( <p>Caso: NÃO está logado</p>)}

            <p>
                {userRole === "admin" && "Você é um admin"}</p>

        {/* RENDERIZACAO DE LISTAS */}
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
        </div>

    </div>
  )
}

export default JsxExample