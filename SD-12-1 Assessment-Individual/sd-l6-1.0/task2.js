
import {getServerURL} from "./task1.js";

// Task 2: listUsers()

export async function listUsers() {
  const url = `${getServerURL()}/users`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
