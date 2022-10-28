import React, { useLayoutEffect } from "react";
import { Container, Texto, AddButton, AddButtonImage } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";


export default () => {

    const navigation = useNavigation();
    const list = useSelector(state => state.notes.list);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Suas notas",
            headerRight: () => (
                <AddButton underlayColor="transparent" onPress={() => (alert('ola'))}>
                    <AddButtonImage source={require('../../assets/more.png')} />
                </AddButton>
            )

        })
    }, [])

    return (
        <Container>

        </Container>
    );
}