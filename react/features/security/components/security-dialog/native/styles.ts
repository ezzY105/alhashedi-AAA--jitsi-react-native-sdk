import BaseTheme from '../../../../base/ui/components/BaseTheme.native';

/**
 * The styles of the feature security.
 */
export default {

    securityDialogContainer: {
        backgroundColor: BaseTheme.palette.ui01,
        flex: 1
    },

    headerCloseButton: {
        marginLeft: 12
    },

    lobbyModeContainer: {
        borderBottomColor: BaseTheme.palette.ui07,
        borderBottomWidth: 1,
        marginTop: BaseTheme.spacing[4]
    },

    lobbyModeContent: {
        marginHorizontal: BaseTheme.spacing[3],
        marginBottom: BaseTheme.spacing[4]
    },

    lobbyModeText: {
        color: BaseTheme.palette.text01
        ,   fontFamily:"IBMPlexSansArabic-Light"
    },

    lobbyModeLabel: {
        color: BaseTheme.palette.text01,
        fontWeight: 'bold',
        marginTop: BaseTheme.spacing[2],   fontFamily:"IBMPlexSansArabic-Light"
    },

    lobbyModeSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: BaseTheme.spacing[1],   fontFamily:"IBMPlexSansArabic-Light"
    },

    passwordContainer: {
        marginHorizontal: BaseTheme.spacing[3],
        marginTop: BaseTheme.spacing[4]
    },

    passwordContainerText: {
        color: BaseTheme.palette.text01
        , fontFamily:"IBMPlexSansArabic-Light"
    },

    passwordContainerControls: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    savedPasswordContainer: {
        flexDirection: 'row',
        width: 208
    },

    savedPasswordLabel: {
        color: BaseTheme.palette.text01,
        fontWeight: 'bold', fontFamily:"IBMPlexSansArabic-Light"
    },

    savedPassword: {
        color: BaseTheme.palette.text01, fontFamily:"IBMPlexSansArabic-Light"
    },

    customContainer: {
        width: 208
    },

    passwordSetupButtonLabel: {
        color: BaseTheme.palette.link01
    },

    passwordSetRemotelyContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    passwordSetRemotelyText: {
        color: BaseTheme.palette.text01,   fontFamily:"IBMPlexSansArabic-Light"
    },

    passwordSetRemotelyTextDisabled: {
        color: BaseTheme.palette.text02,   fontFamily:"IBMPlexSansArabic-Light"
    }
};
