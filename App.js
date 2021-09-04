import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1E1E1E;
`;

const Input = styled.TextInput`
  font-size: 15px;
  border: 1px solid #FFF;
  height: 50px;
  width: 90%;
  padding: 10px;
  background-color: #e1e1e1;
  margin-bottom: 10px;
`;

const Salvar = styled.Button`
  
`;

const NameArea = styled.View`
  padding: 20px;
  background-color: #CCC;
  width: 100%;
  margin-top: 10px;
  width: 90%;
`;

const Nome = styled.Text`
  font-size: 18px;
`;

export default function(){

  const [nome, setNome] = useState('');
  const [novoNome, setNovoNome] = useState('');

  const handleSave = async () => {
    if (novoNome != '') {
      await AsyncStorage.setItem('@nome', novoNome);
      setNome(novoNome);
      setNovoNome('');
    }
  }

  const getName = async() => {
    const n = await AsyncStorage.getItem('@nome');
    setNome(n)
  }

  useEffect(()=> {
    getName();
  }, []);

  return(
    <Page>
      <Input 
        value = {novoNome}
        onChangeText = {e => setNovoNome(e)}
      />
      <Salvar title= "salvar" onPress = { handleSave } />

      <NameArea>
          <Nome> { nome } </Nome>
      </NameArea>
    </Page>
    
  );
}