

export default  function Buttons({explore,learn,exploreclass,learnclass}){
    return(
        <>
        <button className={exploreclass}>{explore}</button>
        <button className={learnclass}>{learn}</button>
        </>
    )
}