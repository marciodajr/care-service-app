export interface IButtonBase {
  marginBottom?: number;
  marginTop?: number;
}

export interface IButton extends IButtonBase {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}
