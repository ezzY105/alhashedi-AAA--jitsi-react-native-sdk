import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import AbstractVideoTrack, { IProps } from '../AbstractVideoTrack';

import styles from './styles';

/**
 * Component that renders video element for a specified video track.
 *
 * @augments AbstractVideoTrack
 */
class VideoTrack extends AbstractVideoTrack<IProps> {
    /**
     * Renders the video element for the associated video track.
     *
     * @override
     * @returns {ReactElement}
     */
    render() {
        return (
            <View style = { styles.video } >
                <View style ={this.props.stylemainvidio ? this.props.stylemainvidio : {width:'100%',height:'100%'}}>
                { super.render() }
                </View>
            </View>
        );
    }
}

export default connect()(VideoTrack);
