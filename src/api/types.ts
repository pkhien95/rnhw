export type Country = {
  code: string;
  name: string;
  phone: string;
  emoji: string;
  capital: string;
  continent: Partial<Continent>;
};

export type Continent = {
  code: string;
  name: string;
  countries: Partial<Country>[];
};
