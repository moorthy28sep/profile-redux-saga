

const initialState = { 
    myJson: [],
    isloading : false
};

export const jsonDataAction = () => {
    return {
        type: "jsonDataType"
    }
}

export const deleteAction = (element) => {
    return {
        type: "deleteType",
        element : element
    }
}



export default(state = initialState, action) => {
    switch (action.type) {
        case "DATA_RECEIVED": return jsonDataFunction(state, action)
        case "deleteType": return deleteFunction(state, action)
        default: return state;
    }
}



const deleteFunction = (state, element) => {
    let id = Number(element.element.currentTarget.id);
    let myData = state.myJson.filter(d => d.id !== id);
          
    return {
        ...state, myJson: myData
    }
    //alert( action + '+' + state)
}

const jsonDataFunction = (state, action) => {
    /* var url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(myData => {
           myJson : this.initialState.myJson({ myJson: myData });
            console.log("state", this.state.myJson)
        })
        .catch(error => console.log(error)) */
        // return { myJson :[
        //     {
        //       "userId": 1,
        //       "id": 1,
        //       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //       "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        //     },
        //     {
        //       "userId": 1,
        //       "id": 2,
        //       "title": "qui est esse",
        //       "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        //     }],
        //     isloading : true
        // };
        return {
            ...state,
            myJson: action.data.data,
            isloading : true
        }
}