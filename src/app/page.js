import Header from "@/components/Header"

const nome = "Arthur Morais"

export default function Home(){
    return (
      <div>
        <Header />
        <h1>Olá Mundo React! Bem-vindo {nome}</h1>
        
      
      
      <div style={style.users}>
        <CardUser name = "ArthurTiso" email="arthur@morais.com"/>
        <CardUser />
        <CardUser />
        <CardUser />
      </div>
      </div>
    )
}