function getDate(): string {
  const date: Date = new Date();
  const min: number = date.getMinutes();
  const hour: number = date.getHours();
  const day: number = date.getDay();
  const month: number = date.getMonth();
  const year: number = date.getFullYear();

  return `${year}-${month}-${day} ${hour}:${min}`;
}

export default getDate;
