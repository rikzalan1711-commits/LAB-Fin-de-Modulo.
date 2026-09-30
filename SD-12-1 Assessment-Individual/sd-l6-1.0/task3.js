// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from './task1.js';

export async function addUser(first_name, last_name, email) {
  await fetch(`${getServerURL()}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ first_name, last_name, email })
  });
}
