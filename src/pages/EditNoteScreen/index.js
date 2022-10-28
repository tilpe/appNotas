import React from "react";
import { Button, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Container, Texto } from "./styles";

export default () => {

    const rout = useRoute();

    const handleClick = () => {
        rout.navigation.navigate('Edit');
    }

    return (
        <Container>
            <Button
                title="Editar"
                onPress={handleClick}
            />
        </Container>
    );
}