const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite === 'undefined') {
    return undefined;
  }

  const isBoolean = typeof isFavourite === 'boolean';
  if (isBoolean) {
    return isFavourite;
  }

  const parsedIsFavourite = JSON.parse(isFavourite.toLowerCase());
  if (typeof parsedIsFavourite !== 'boolean') {
    return undefined;
  }

  return parsedIsFavourite;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
