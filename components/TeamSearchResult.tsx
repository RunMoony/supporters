interface TeamSearchResultProps {
  teams: string[];
  handleSearchClick: any;
}

export default function TeamSearchResult({
  teams,
  handleSearchClick,
}: TeamSearchResultProps) {
  return (
    <ul className='p-1'>
      {teams.map((team, index) => {
        return (
          <li
            className='text-sm text-white py-2'
            onClick={handleSearchClick}
            key={index}
          >
            {team}
          </li>
        );
      })}
    </ul>
  );
}
