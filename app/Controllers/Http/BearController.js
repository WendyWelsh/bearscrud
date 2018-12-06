'use strict'
let bears = [{ id: "0", breed: "Grizzly", color: "Brown", temperment: "Furious" }, { id: "1", breed: "Panda", color: "dual", temperment: "Comical" }]
class BearController {
    bearget({ request, response }) {
        response.send(bears)
    }
    bearcreate({ request, response }) {
        //info created on postman
        // how to get info from postman from this doc
        const bear = request.post()//gets in fo from postman through route doc
        //console.log(bear)
        //we want to push/add the info bear to the bears array 
        bears.push(bear)
        //sending postman the new array
        //console.log(bears)
        response.send(bears)
    }
    beardelete({ request, response }) {
        //delete info from the array bears
        //bears array should show up in postman with the new updated deleted array
        const body = request.post()
        //filtering the array bears and removing the id contained in body
        bears = bears.filter((eachItem) => {
            return eachItem.id !== body.id //false removes
        })
        response.send(bears)
        // console.log(newbears)
        //capitals = capitals.filter((element) => {
        // console.log(element.country === body.country)
        // console.log(eachItem.country !== body.id)
    }
}

module.exports = BearController
