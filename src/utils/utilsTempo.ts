export const transformarDataEmTimeStamp = (dias: number) => {
  try {
    const hoje = Date.now();
    const dataFuturaDias = hoje + dias * 24 * 60 * 60 * 1000;

    console.log(dataFuturaDias);

    return dataFuturaDias;
  } catch (err: any) {
    throw new Error(err);
  }
};
