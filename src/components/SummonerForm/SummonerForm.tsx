import React, { FC } from 'react';

type SummonerFormProps = {
  handleSearch: (summoner: string) => void;
};

const SummonerForm: FC<SummonerFormProps> = (props) => {
  const [summoner, setUsername] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    props.handleSearch(summoner);
    return Promise.resolve();
  };

  return (
    <form className="summoner-form" onSubmit={handleSubmit}>
      <input type="text" value={summoner} onChange={handleChange} />
      <button>GG</button>
    </form>
  );
};

export default SummonerForm;
