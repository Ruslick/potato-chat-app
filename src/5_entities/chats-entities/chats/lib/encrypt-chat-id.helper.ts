export const encryptChatId = (uid1: string, uid2: string) => {
  let string1 = uid1;
  let string2 = uid2;
  if (string1 < string2) {
    [string1, string2] = [string2, string1];
  }
  return `${string1}${string2}`;
};
