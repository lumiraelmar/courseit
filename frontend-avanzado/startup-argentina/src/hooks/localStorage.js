export const useLocalStorage = () => {

  const handleSave = (startupInfo) => {
    const startups = localStorage.getItem('startups') ?? '[]';
    const parsedStartups = JSON.parse(startups);

    parsedStartups.push(startupInfo)

    const stringifiedStartups = JSON.stringify(parsedStartups);
    localStorage.setItem('startups', stringifiedStartups)
  }

  const getStartups = localStorage.getItem('startups');
  const parsedStartups = JSON.parse(getStartups)

  return [parsedStartups, handleSave]
}