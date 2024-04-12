import { getData, getData2 } from "./DOM.js";

let API = "http://localhost:3000/data";

async function get() {
  try {
    let responce = await fetch(API);
    let data = await responce.json();
    getData2(data);
    getData(data);
  } catch (error) {
    console.error(error);
  }
}

async function Deletites(id) {
  try {
    let responce = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    get();
  } catch (error) {
    console.error(error);
  }
}
async function infoitems(id) {
    try {
        let responce=await fetch(`${API}/${id}`)
        get()
    } catch (error) {
        console.error(error);
    }
}

export default get;
export { Deletites, infoitems };
