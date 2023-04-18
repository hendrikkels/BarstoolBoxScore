import prisma from "../../prisma/prisma";

export const getGame = async (uuid: string) => {
  try {
    const cachedGame = await prisma.game.findUnique({
      where: {
        uuid: uuid,
      },
    })

    return cachedGame;

  } catch (e) {
    console.log(`Error: ${e}`);
    throw e;
  }
};

export const setGame = async (uuid: string, data: any) => {
  try {
    let game = await getGame(uuid);

    if (!game) {
      game = await prisma.game.create({
        data: {
          uuid: uuid,
          jsonData: data,
        }
      })
    } else {
      game = await prisma.game.update({
        where: {uuid: uuid},
        data: {jsonData: data}
      })
    }
    return game;
  } catch (e) {
    console.log(`Error: ${e}`);
    throw e;
  }
};
