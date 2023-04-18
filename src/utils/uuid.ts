import { parse as uuidParse, stringify as uuidStringify } from 'uuid';

/**
 * Convert string to byte array
 * @param uuid (UUID String)
 * @returns UUID (Byte Array)
 */
export function stringToByteArray (uuid: string) {
  const arr = uuidParse(uuid)

  console.log(arr)
  return arr;
}

/**
 * Convert byte array to string
 * @param arr (UUID Byte Array)
 * @returns UUID (String)
 */
export function byteArrayToString (arr: Uint8Array) {
  const uuid = uuidStringify(arr)

  console.log(uuid);
  return uuid;
}

/**
 * This function simply removes the dashes from the initial uuid string
 * @param uuid (string with dashes)
 * @returns id (string without dashes)
 */
export function removeDashes (uuid: string) {
  console.log('removeDashes')
  // const id = uuid.replaceAll('-', '');
  const id = uuidParse(uuid)

  // const id = JSON.stringify(uuid);
  console.log(id)
  return id;
}

/**
 * This function simply adds the dashes at hard coded places in the initial string
 * @param id (without dashes)
 * @returns uuid (string including dashes)
 */
export function addDashes (id: string) {
  console.log('addDashes');
  const part1 = id.slice(0, 8);
  const part2 = id.slice(8, 12);
  const part3 = id.slice(12, 16);
  const part4 = id.slice(16, 20);
  const part5 = id.slice(20, 32);
  const uuid = `${part1}-${part2}-${part3}-${part4}-${part5}`;

  console.log(uuid);
  return uuid;
}
