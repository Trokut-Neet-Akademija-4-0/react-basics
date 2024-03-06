
import { slidesList } from '../Slideshow/slideshowData'
import { useState } from 'react'

const todos = slidesList;
function TodoList() {
  const [filteredTODOS, setFilteredTODOS] = useState(todos);
  const [currentAddNewValue, setCurrentAddNewValue] = useState('');

  function handleFilter(event){
    console.log("something changed", event.target.value);
    const searchString = event.target.value;
    const matchedElements = filterByValue(todos, searchString)
    console.log("found", matchedElements);
    setFilteredTODOS(matchedElements);
  }

  /**
   * @param array
   * @param string
   * @returns {*}
   */
  function filterByValue(array, string) {
    console.log("string to search filterByValue =>>> ", string);
    return array.filter(o =>
      Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
  }

  function addNewChangeHandler(e){
    console.log("Value entered: ", e.target.value);
    setCurrentAddNewValue(e.target.value);
    console.log("currentAddNewValue: ", currentAddNewValue );
  }
  // PONAVLJANJE ZA ARRAY COPY VS REFERENCE
  // const arr1 = [1,2,3];
  // let arr2 = arr1;
  // console.log("Arr2 before push", arr2)
  // arr2.push(4);
  // console.log("Arr2 after push", arr2)
  // console.log("Arr1 after push", arr1)
  // console.log("==============")
  //
  // let arr3 = [...arr1];
  // console.log("Arr3 before push", arr3)
  // arr3.push(5);
  // console.log("Arr3 after push", arr3)
  // console.log("Arr1 after push", arr1)

  function handleAddNewSubmission(){
    console.log("New Submisssion ist do be added to the list at this point");
    console.log("Value to be saved", currentAddNewValue)
    const newElement = { name: currentAddNewValue};
    // filteredTODOS.push(newElement) <==== THIS IS HOW NOT TO UPDATE STATE
    setFilteredTODOS([...filteredTODOS, newElement]); // STATE CAN BE UPDATED ONLY through his setter
    console.log("new todos array looks like =>>>", filteredTODOS);
  }

  const inputStyle = {padding: 10, minWidth: 200}

  // END OF BUSINESS LOGIC
  return(
    <div className={'todolist-wrapper'}>
      <h4>TODO LIST</h4>
      {/* here we make the part that filter what is shown in the list*/}
      <div>Filter TODOS</div>
      <input style={inputStyle} type="text"
        onChange={(e) => handleFilter(e)}/>
      <ul>
        {filteredTODOS.map((item, index) => {
          return(
              <li key={index}>{item.name}</li>
            )
          }
        )}
      </ul>
    {/*  Here we make the part that adds new item*/}
      <div>Add new TODO </div>
      <div style={{display: "flex"}}>
        <input onChange={(event) => addNewChangeHandler(event)} type={'text'} style={inputStyle} />
        <a style={{background: 'gray', color: "white"}}
           onClick={() => handleAddNewSubmission()}
        >
            Add New
        </a>
      </div>
    </div>
  )
}

export { TodoList }
