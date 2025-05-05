const getReturnDate = (time) => {
  const date = new Date();
  const updatedDate = Number(date.getDate() + time);

  return new Date(date.setDate(updatedDate));
};

export default getReturnDate;
