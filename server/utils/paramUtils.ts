export const getParamThrowIfEmpty = (event: any, paramName: string) => {
  const parameter = event.context.params[paramName];
  if (!parameter) {
    throw createError({
      statusCode: 400,
      statusMessage: `${paramName} must be provided`,
    });
  }
  return parameter;
};

export const throwErrorIfExists = (error: any | null) => {
  if (!error) return;
  console.log(error);
  throw createError({
    statusCode: 500,
    statusMessage: `Oops somthing went wrong on the server`,
  });
};
