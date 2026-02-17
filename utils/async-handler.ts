export const asyncHandler = async <T, E = Error>(
  promise: Promise<T>,
): Promise<[T | null, E | null]> => {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error as E];
  }
};
