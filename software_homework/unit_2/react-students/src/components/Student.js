import Score from './Score'


function Student(props){
    return(
        <div>
            <h3>{props.studentInfo.name}</h3>
            <p>Bio - {props.studentInfo.bio}</p>
       {props.studentInfo.scores.map(score=>{
        return(
             <Score scoreInfo={score}/> 
       )})}
      </div>
        )
}
   
  

export default Student