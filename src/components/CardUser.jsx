export default function CardUser(){
    return(
        <div style={Styles.contayner}>
            <img src = "https://github.com/ArthurTiso.png" 
            
            alt="User"
             style={styles.image}/>
            <div>
                <h2> Arthur Tiso </h2>
                <p> arthur@morais.com</p>
            </div>
        </div>
    )
}
const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: 20,
        border: "1px solid #ffff",
        borderradius: 8
    },
    image: {
        width: 80,
        height: 80,
        borderradius: 40
    }
}