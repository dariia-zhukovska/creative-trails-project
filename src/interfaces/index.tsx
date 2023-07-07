export interface ITourListData {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  fullDescription?: string;
  continent: string;
  adults: boolean;
}

export interface IInputProps {
  label: string;
  id: string;
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  checked?: boolean;
}

interface Option {
  value: string;
  label: string;
}

export interface ISelectProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  required?: boolean;
}
