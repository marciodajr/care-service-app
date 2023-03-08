import styled from "styled-components/native";
import { normalize } from "~/utils/normalize";
import { IButtonBase } from "./interfaces";

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`
export const ScrollView = styled.ScrollView`
  border: 1px solid #CCCCCC;
  padding: 0 ${normalize(12)}px;
  margin-bottom: ${normalize(12)}px;
`
export const Message = styled.Text`
  margin: ${normalize(3)}px 0;
  font-family: 'Sora-400';
`

export const TypeArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 ${normalize(12)}px;
`

export const Input = styled.TextInput`
  background-color: #f4f4f4;
  border-radius: ${normalize(4)}px;
  font-family: 'Sora-400';
  font-size: ${normalize(14)}px;
  height: ${normalize(48)}px;
  padding: 0px ${normalize(10)}px;
  border: 1px solid #CCCCCC;
  width: ${normalize(200)}px;
`;

export const ButtonBase = styled.TouchableOpacity<IButtonBase>`
  align-items: center;
  background: ${(props) => (!props.disabled ? '#770fdf' : '#A0A0A0')};
  border-radius: ${normalize(4)}px;
  height: ${normalize(48)}px;
  justify-content: center;
  margin-bottom: ${(props) => normalize(props.marginBottom || 0)}px;
  margin-top: ${(props) => normalize(props.marginTop || 0)}px;
  width: ${normalize(80)}px;
`;

export const ButtonLabel = styled.Text`
  color: #ffffff;
  font-family: 'Sora-500';
  font-size: ${normalize(16)}px;
`;
