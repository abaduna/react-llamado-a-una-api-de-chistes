

const Joker = ({data}) => {
  const {category,error,flags,id,joke,lang,safe,type} = data
console.log(category);
// // const {}
  return (
    <>
     <h2>{category}</h2>
     <p>{category ==="Programming" ? "no hay chiste el api no sabe nada":joke}</p>
    </>
   
  )
}

export default Joker