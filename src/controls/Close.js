// @flow
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import TextIconView, {
	ICON_CODES,
	ICON_SIZES,
} from '../../../../src/views/texts/text-icon.view';
import { COLOR_CODES } from '../../../../src/enums/colors';

const styles = StyleSheet.create({
    closeButton: {
        alignSelf: 'flex-end',
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 15,
    },
    closeButton__text: {
        backgroundColor: 'transparent',
        fontSize: 25,
        lineHeight: 25,
        color: '#FFF',
        textAlign: 'center',
    },
});

export default ({onPress}: {onPress: () => *}) => (
    <TouchableOpacity
        style={styles.closeButton}
        onPress={onPress}
    >
       <TextIconView icon={ICON_CODES.Close}
            size={ICON_SIZES.sm}
            color={COLOR_CODES.White}/>
    </TouchableOpacity>
);
