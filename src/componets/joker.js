

const Joker = ({data}) => {
  const {category,error,flags,id,joke,lang,safe,type,delivery} = data
console.log(category);
// // const {}
  return (
    <>
     <h2>{category}</h2>
     {/* <p>{category ==="Programming" ? "no hay chiste el api no sabe nada":joke}</p> */}
     <p>{joke}</p>
     <p>{delivery}</p>
     <span>en el idioma <b>{lang}</b></span>
    </>
   
  )
}

export default Joker