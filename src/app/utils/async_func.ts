const delay = (message: string, time: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (time >= 0) {
      setTimeout(() => resolve(message), time);
    } else {
      reject(new Error("timeは0以上で指定してください"));
    }
  });
};

export { delay };
